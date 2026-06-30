import type { EventContext } from "@cloudflare/workers-types";

interface Env {
  HOTMART_HOTTOK: string;
  META_CAPI_TOKEN_GRINGA: string;
}

interface HotmartWebhookBody {
  data?: {
    buyer?: {
      email?: string;
      name?: string;
    };
    purchase?: {
      transaction?: string;
      price?: {
        value?: number;
        currency_value?: string;
      };
    };
  };
}

const FUNNEL_ENDPOINT = "https://dugqmsclhybfxvrljemx.supabase.co/functions/v1/funnel-track";
const META_PIXEL_ID = "1540863624345199";
const META_CONTENT_NAME = "Guia Extensiones de Cabello ES";

const jsonHeaders = {
  "Content-Type": "application/json",
};

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: jsonHeaders,
  });

const normalizeEmail = (email: string) => email.trim().toLowerCase();

const sha256 = async (value: string): Promise<string> => {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

const sendMetaPurchase = async (
  env: Env,
  transaction: string,
  email: string,
  value: number,
  currency: string
) => {
  const hashedEmail = await sha256(normalizeEmail(email));
  const payload = {
    data: [
      {
        event_name: "Purchase",
        event_time: Math.floor(Date.now() / 1000),
        event_id: transaction,
        action_source: "website",
        user_data: {
          em: [hashedEmail],
        },
        custom_data: {
          value,
          currency,
          content_name: META_CONTENT_NAME,
        },
      },
    ],
  };

  const response = await fetch(
    `https://graph.facebook.com/v22.0/${META_PIXEL_ID}/events?access_token=${env.META_CAPI_TOKEN_GRINGA}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error(`Meta CAPI error: ${await response.text()}`);
  }
};

const sendFunnelPurchase = async (
  transaction: string,
  email: string,
  name: string,
  value: number,
  currency: string
) => {
  const response = await fetch(FUNNEL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      session_id: `hotmart_${transaction}`,
      client: "anna-es",
      event: "Purchase",
      event_name: "Purchase",
      metadata: {
        transaction,
        value,
        currency,
        buyer_email: email,
        buyer_name: name,
      },
    }),
    keepalive: true,
  });

  if (!response.ok) {
    throw new Error(`Funnel error: ${await response.text()}`);
  }
};

export async function onRequest(context: EventContext<Env, string, unknown>) {
  const { request, env } = context;

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const hottok = request.headers.get("x-hotmart-hottok");

  if (!env.HOTMART_HOTTOK || hottok !== env.HOTMART_HOTTOK) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  let body: HotmartWebhookBody;

  try {
    body = await request.json() as HotmartWebhookBody;
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  const email = body.data?.buyer?.email;
  const name = body.data?.buyer?.name || "";
  const transaction = body.data?.purchase?.transaction;
  const value = body.data?.purchase?.price?.value;
  const currency = body.data?.purchase?.price?.currency_value;

  if (!email || !transaction || typeof value !== "number" || !currency) {
    return jsonResponse({ error: "Missing required Hotmart purchase data" }, 400);
  }

  const [metaResult, funnelResult] = await Promise.allSettled([
    sendMetaPurchase(env, transaction, email, value, currency),
    sendFunnelPurchase(transaction, email, name, value, currency),
  ]);

  if (metaResult.status === "rejected") {
    console.error("Hotmart Purchase Meta CAPI failed:", metaResult.reason);
  }

  if (funnelResult.status === "rejected") {
    console.error("Hotmart Purchase funnel failed:", funnelResult.reason);
  }

  return jsonResponse({
    ok: true,
    event: "Purchase",
    client: "anna-es",
    transaction,
    metaSent: metaResult.status === "fulfilled",
    funnelSent: funnelResult.status === "fulfilled",
  });
}

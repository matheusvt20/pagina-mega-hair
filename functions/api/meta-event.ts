import type { EventContext } from "@cloudflare/workers-types";

interface Env {
  META_CAPI_TOKEN: string;
}

export async function onRequestPost(
  context: EventContext<Env, string, unknown>
) {
  const { request, env } = context;

  try {
    const body = await request.json() as { eventName: string; eventId: string };
    const { eventName, eventId } = body;

    if (!eventName || !eventId) {
      return new Response(JSON.stringify({ error: "Missing eventName or eventId" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const pixelId = "1545289270267098";
    const accessToken = env.META_CAPI_TOKEN;

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: "website",
        },
      ],
    };

    const metaResponse = await fetch(
      `https://graph.facebook.com/v22.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!metaResponse.ok) {
      const error = await metaResponse.text();
      console.error("Meta CAPI error:", error);
      return new Response(JSON.stringify({ error: "Meta CAPI request failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    console.error("Handler error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

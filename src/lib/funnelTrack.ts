const FUNNEL_ENDPOINT = "https://dugqmsclhybfxvrljemx.supabase.co/functions/v1/funnel-track"
import { getPurchaseSessionId } from "./purchaseTracking"

const getUtmValue = (params: URLSearchParams, name: string): string => {
  return params.get(name) || ""
}

export function trackFunnel(eventName: string): void {
  try {
    if (typeof window === "undefined" || typeof fetch === "undefined") return

    const params = new URLSearchParams(window.location.search)
    const utmContent = getUtmValue(params, "utm_content")

    fetch(FUNNEL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        session_id: getPurchaseSessionId(),
        client: window.location.pathname.split('/').filter(Boolean)[0] === 'es' ? 'anna-es' : 'anna',
        event_name: eventName,
        creative: utmContent,
        utm_source: getUtmValue(params, "utm_source"),
        utm_medium: getUtmValue(params, "utm_medium"),
        utm_campaign: getUtmValue(params, "utm_campaign"),
        utm_content: utmContent,
        utm_term: getUtmValue(params, "utm_term"),
        page_url: window.location.href,
      }),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // Fire and forget.
  }
}

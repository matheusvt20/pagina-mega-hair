const FUNNEL_ENDPOINT = "https://dugqmsclhybfxvrljemx.supabase.co/functions/v1/funnel-track"
const SESSION_STORAGE_KEY = "_lid"

const getSessionId = (): string => {
  const nextSessionId = `lid_${Date.now()}_${Math.random().toString(36).slice(2)}`

  try {
    const currentSessionId = window.localStorage[SESSION_STORAGE_KEY]
    if (currentSessionId) return currentSessionId

    window.localStorage[SESSION_STORAGE_KEY] = nextSessionId
  } catch {
    return nextSessionId
  }

  return nextSessionId
}

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
        session_id: getSessionId(),
        client: window.location.pathname.split('/').filter(Boolean)[0] === 'es' ? 'anna-es' : 'anna',
        event_name: eventName,
        creative: utmContent,
        utm_source: getUtmValue(params, "utm_source"),
        utm_campaign: getUtmValue(params, "utm_campaign"),
        utm_content: utmContent,
        page_url: window.location.href,
      }),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // Fire and forget.
  }
}

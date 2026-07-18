const SESSION_STORAGE_KEY = "_purchase_tracking_session"
const FBP_PATTERN = /^fb\.1\.\d{10,13}\.\d{5,30}$/
const FBC_PATTERN = /^fb\.1\.\d{10,13}\.[A-Za-z0-9_-]{8,250}$/
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const

const endpoint = (import.meta.env.VITE_TRACKING_SESSION_ENDPOINT || "").trim()

function randomSessionId(): string {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID()
  const bytes = crypto.getRandomValues(new Uint8Array(16))
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0"))
  return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10).join("")}`
}

export function getPurchaseSessionId(): string {
  try {
    const current = window.sessionStorage.getItem(SESSION_STORAGE_KEY)
    if (current) return current
    const created = randomSessionId()
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, created)
    return created
  } catch {
    return randomSessionId()
  }
}

export function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
  return match ? decodeURIComponent(match[2]) : ""
}

function validCookie(name: "_fbp" | "_fbc"): string {
  const value = getCookie(name)
  const valid = name === "_fbp" ? FBP_PATTERN.test(value) : FBC_PATTERN.test(value)
  return valid ? value : ""
}

function attribution() {
  const params = new URLSearchParams(window.location.search)
  return Object.fromEntries(UTM_KEYS.map((key) => [key, params.get(key) || ""]))
}

export function capturePurchaseSession(client: string): void {
  if (!endpoint || typeof window === "undefined") return
  const params = new URLSearchParams(window.location.search)
  void fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      session_id: getPurchaseSessionId(),
      client,
      event_source_url: window.location.href,
      fbp: validCookie("_fbp"),
      fbc: validCookie("_fbc"),
      fbclid: params.get("fbclid") || "",
      ...attribution(),
    }),
    keepalive: true,
  }).catch(() => {})
}

export function buildCheckoutUrl(baseUrl: string): string {
  try {
    const url = new URL(baseUrl)
    const fbp = validCookie("_fbp")
    const fbc = validCookie("_fbc")

    if (/(^|\.)kiwify\.com(\.br)?$/i.test(url.hostname)) {
      if (fbp) url.searchParams.set("s1", fbp)
      if (fbc) url.searchParams.set("s2", fbc)
      url.searchParams.set("s3", getPurchaseSessionId())
      for (const [key, value] of Object.entries(attribution())) {
        if (value) url.searchParams.set(key, value)
      }
      return url.toString()
    }

    if (/(^|\.)hotmart\.com$/i.test(url.hostname)) {
      // Preserve the exact legacy Hotmart attribution contract. Additional
      // parameters require proof from a real masked webhook before inclusion.
      if (fbp) url.searchParams.set("src", fbp)
      if (fbc) url.searchParams.set("sck", fbc)
      return url.toString()
    }

    return baseUrl
  } catch {
    return baseUrl
  }
}

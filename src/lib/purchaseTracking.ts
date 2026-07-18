const SESSION_STORAGE_KEY = "_purchase_tracking_session"
const FBC_STORAGE_KEY = "_lansar_fbc"
const FBC_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000
const FBP_PATTERN = /^fb\.1\.\d{10,13}\.\d{5,30}$/
const FBC_PATTERN = /^fb\.1\.\d{10,13}\.[A-Za-z0-9_-]{8,250}$/
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const

const endpoint = (import.meta.env?.VITE_TRACKING_SESSION_ENDPOINT || "").trim()

export interface MetaTrackingSnapshot {
  fbp: string
  fbc: string
}

interface StoredFbc {
  value: string
  createdAt: number
}

let currentPageFbclid = ""
let currentPageFbc = ""
let currentPageFbcCreatedAt = 0

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

function getFbclid(): string {
  if (typeof window === "undefined") return ""
  return new URLSearchParams(window.location.search).get("fbclid") || ""
}

function readStoredFbc(): string {
  try {
    const raw = window.localStorage.getItem(FBC_STORAGE_KEY)
    if (!raw) return ""

    const stored = JSON.parse(raw) as Partial<StoredFbc>
    const isFresh =
      typeof stored.createdAt === "number" &&
      Date.now() - stored.createdAt >= 0 &&
      Date.now() - stored.createdAt <= FBC_MAX_AGE_MS
    const isValid = typeof stored.value === "string" && FBC_PATTERN.test(stored.value)

    if (isFresh && isValid) return stored.value as string
    window.localStorage.removeItem(FBC_STORAGE_KEY)
  } catch {
    // localStorage may be unavailable or contain invalid data.
  }

  return ""
}

function persistFbcFromFbclid(fbclid: string): string {
  if (!fbclid) return ""
  const inMemoryAge = Date.now() - currentPageFbcCreatedAt
  if (
    currentPageFbclid === fbclid &&
    currentPageFbc &&
    inMemoryAge >= 0 &&
    inMemoryAge <= FBC_MAX_AGE_MS
  ) {
    return currentPageFbc
  }

  const stored = readStoredFbc()
  if (stored.endsWith(`.${fbclid}`)) {
    currentPageFbclid = fbclid
    currentPageFbc = stored
    currentPageFbcCreatedAt = Number(stored.split(".")[2])
    return stored
  }

  const createdAt = Date.now()
  const value = `fb.1.${createdAt}.${fbclid}`
  if (!FBC_PATTERN.test(value)) return ""

  currentPageFbclid = fbclid
  currentPageFbc = value
  currentPageFbcCreatedAt = createdAt

  try {
    window.localStorage.setItem(FBC_STORAGE_KEY, JSON.stringify({ value, createdAt }))
  } catch {
    // The current-page value is still usable even if persistence is unavailable.
  }

  return value
}

function cookieMetaIdentifiers(): MetaTrackingSnapshot {
  return {
    fbp: validCookie("_fbp"),
    fbc: validCookie("_fbc"),
  }
}

export function initializeMetaTracking(): void {
  if (typeof window === "undefined") return
  const fbclid = getFbclid()
  if (fbclid) persistFbcFromFbclid(fbclid)
}

export function resolveMetaIdentifiers(): MetaTrackingSnapshot {
  if (typeof window === "undefined") return { fbp: "", fbc: "" }

  const fbp = validCookie("_fbp")
  const cookieFbc = validCookie("_fbc")
  if (cookieFbc) return Object.freeze({ fbp, fbc: cookieFbc })

  const storedFbc = readStoredFbc()
  if (storedFbc) return Object.freeze({ fbp, fbc: storedFbc })

  return Object.freeze({ fbp, fbc: persistFbcFromFbclid(getFbclid()) })
}

export async function resolveMetaIdentifiersAfterFbp(
  timeoutMs = 1500,
  intervalMs = 100
): Promise<MetaTrackingSnapshot> {
  const deadline = Date.now() + timeoutMs

  while (!validCookie("_fbp") && Date.now() < deadline) {
    const remainingMs = deadline - Date.now()
    await new Promise((resolve) => window.setTimeout(resolve, Math.min(intervalMs, remainingMs)))
  }

  return resolveMetaIdentifiers()
}

function attribution() {
  const params = new URLSearchParams(window.location.search)
  return Object.fromEntries(UTM_KEYS.map((key) => [key, params.get(key) || ""]))
}

export function capturePurchaseSession(
  client: string,
  identifiers?: MetaTrackingSnapshot
): void {
  if (!endpoint || typeof window === "undefined") return
  const params = new URLSearchParams(window.location.search)
  const tracking = identifiers || cookieMetaIdentifiers()
  void fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      session_id: getPurchaseSessionId(),
      client,
      event_source_url: window.location.href,
      fbp: tracking.fbp,
      fbc: tracking.fbc,
      fbclid: params.get("fbclid") || "",
      ...attribution(),
    }),
    keepalive: true,
  }).catch(() => {})
}

export function buildCheckoutUrl(
  baseUrl: string,
  identifiers?: MetaTrackingSnapshot
): string {
  try {
    const url = new URL(baseUrl)

    if (/(^|\.)kiwify\.com(\.br)?$/i.test(url.hostname)) {
      const tracking = identifiers || resolveMetaIdentifiers()
      if (tracking.fbp) url.searchParams.set("src", tracking.fbp)
      if (tracking.fbc) url.searchParams.set("sck", tracking.fbc)
      url.searchParams.set("s1", getPurchaseSessionId())
      for (const [key, value] of Object.entries(attribution())) {
        if (value) url.searchParams.set(key, value)
      }
      return url.toString()
    }

    if (/(^|\.)hotmart\.com$/i.test(url.hostname)) {
      // Preserve the exact legacy Hotmart attribution contract. Additional
      // parameters require proof from a real masked webhook before inclusion.
      const tracking = identifiers || cookieMetaIdentifiers()
      if (tracking.fbp) url.searchParams.set("src", tracking.fbp)
      if (tracking.fbc) url.searchParams.set("sck", tracking.fbc)
      return url.toString()
    }

    return baseUrl
  } catch {
    return baseUrl
  }
}

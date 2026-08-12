/// <reference lib="dom" />

import {
  buildCheckoutUrl,
  initializeMetaTracking,
  resolveMetaIdentifiers,
  resolveMetaIdentifiersAfterFbp,
} from "../src/lib/purchaseTracking.ts"

function assertEquals(actual: unknown, expected: unknown): void {
  if (actual !== expected) {
    throw new Error(`Expected ${String(expected)}, received ${String(actual)}`)
  }
}

function createStorage(): Storage {
  const values = new Map<string, string>()
  return {
    get length() {
      return values.size
    },
    clear() {
      values.clear()
    },
    getItem(key: string) {
      return values.get(key) ?? null
    },
    key(index: number) {
      return [...values.keys()][index] ?? null
    },
    removeItem(key: string) {
      values.delete(key)
    },
    setItem(key: string, value: string) {
      values.set(key, value)
    },
  }
}

function installBrowserState(search = ""): { setCookie(value: string): void } {
  const localStorage = createStorage()
  const sessionStorage = createStorage()
  let cookie = ""

  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      location: {
        href: `https://annaschossig.com/v2/${search}`,
        search,
      },
      localStorage,
      sessionStorage,
      setTimeout: (callback: TimerHandler, timeout?: number) =>
        globalThis.setTimeout(callback, timeout),
    },
  })
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: {
      get cookie() {
        return cookie
      },
    },
  })

  return {
    setCookie(value: string) {
      cookie = value
    },
  }
}

Deno.test("waits for the Meta Pixel to expose _fbp before building the checkout URL", async () => {
  const browser = installBrowserState()
  const expectedFbp = "fb.1.1780381651887.446288221811905838"
  setTimeout(() => browser.setCookie(`_fbp=${expectedFbp}`), 15)

  const identifiers = await resolveMetaIdentifiersAfterFbp(200, 5)
  const checkout = new URL(buildCheckoutUrl("https://pay.kiwify.com.br/UruirxE", identifiers))

  assertEquals(identifiers.fbp, expectedFbp)
  assertEquals(checkout.searchParams.get("src"), expectedFbp)
  assertEquals(Boolean(checkout.searchParams.get("s1")), true)
})

Deno.test("preserves a long case-sensitive fbclid exactly in fbc and sck", () => {
  const fbclid = `IwY2xJAW${"Ab_9-Z".repeat(80)}`
  installBrowserState(`?fbclid=${fbclid}`)

  initializeMetaTracking()
  const identifiers = resolveMetaIdentifiers()
  const checkout = new URL(buildCheckoutUrl("https://pay.kiwify.com.br/UruirxE", identifiers))

  assertEquals(identifiers.fbc.endsWith(`.${fbclid}`), true)
  assertEquals(checkout.searchParams.get("sck"), identifiers.fbc)
})

Deno.test("keeps an existing _fbc exactly and gives it priority over fbclid", () => {
  const browser = installBrowserState("?fbclid=DifferentClickId123")
  const expectedFbc = "fb.1.1786379940221.IwY2xJAW-AbC_9~CaseSensitive"
  browser.setCookie(`_fbc=${expectedFbc}; _fbp=fb.1.1780381651887.446288221811905838`)

  initializeMetaTracking()
  const identifiers = resolveMetaIdentifiers()
  const checkout = new URL(buildCheckoutUrl("https://pay.kiwify.com.br/UruirxE", identifiers))

  assertEquals(identifiers.fbc, expectedFbc)
  assertEquals(checkout.searchParams.get("sck"), expectedFbc)
})

Deno.test("does not invent fbc when the visit has neither _fbc nor fbclid", () => {
  const browser = installBrowserState()
  browser.setCookie("_fbp=fb.1.1780381651887.446288221811905838")

  const identifiers = resolveMetaIdentifiers()
  const checkout = new URL(buildCheckoutUrl("https://pay.kiwify.com.br/UruirxE", identifiers))

  assertEquals(identifiers.fbc, "")
  assertEquals(checkout.searchParams.has("sck"), false)
})

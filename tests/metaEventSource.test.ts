import { resolveBrowserEventSourceUrl } from "../functions/api/meta-event-source.ts";

function assertEquals(actual: unknown, expected: unknown): void {
  if (actual !== expected) {
    throw new Error(`Expected ${String(expected)}, received ${String(actual)}`);
  }
}

Deno.test("keeps the exact same-origin page URL and removes its fragment", () => {
  assertEquals(
    resolveBrowserEventSourceUrl(
      "https://annaschossig.com/api/meta-event",
      "https://annaschossig.com/?utm_source=meta#oferta",
      null,
    ),
    "https://annaschossig.com/?utm_source=meta",
  );
});

Deno.test("falls back to the same-origin Referer", () => {
  assertEquals(
    resolveBrowserEventSourceUrl(
      "https://annaschossig.com/api/meta-event",
      undefined,
      "https://annaschossig.com/es/?utm_campaign=guia",
    ),
    "https://annaschossig.com/es/?utm_campaign=guia",
  );
});

Deno.test("rejects a cross-origin event source URL", () => {
  assertEquals(
    resolveBrowserEventSourceUrl(
      "https://annaschossig.com/api/meta-event",
      "https://attacker.example/offer",
      null,
    ),
    null,
  );
});

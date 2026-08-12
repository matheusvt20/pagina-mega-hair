export function resolveBrowserEventSourceUrl(
  requestUrl: string,
  providedUrl: string | undefined,
  referer: string | null,
): string | null {
  const requestOrigin = new URL(requestUrl).origin;

  for (const candidate of [providedUrl, referer]) {
    if (!candidate) continue;

    try {
      const parsed = new URL(candidate);
      if (parsed.origin !== requestOrigin) continue;
      parsed.hash = "";
      return parsed.href;
    } catch {
      // Ignore malformed or cross-origin candidates.
    }
  }

  return null;
}

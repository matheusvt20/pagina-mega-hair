import {
  buildCheckoutUrl,
  getCookie,
  type MetaTrackingSnapshot,
} from "./purchaseTracking"

export { getCookie }

export function getCheckoutUrl(
  baseUrl: string,
  identifiers?: MetaTrackingSnapshot
): string {
  return buildCheckoutUrl(baseUrl, identifiers)
}

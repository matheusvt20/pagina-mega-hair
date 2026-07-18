import { buildCheckoutUrl, getCookie } from "./purchaseTracking"

export { getCookie }

export function getCheckoutUrl(baseUrl: string): string {
  return buildCheckoutUrl(baseUrl)
}

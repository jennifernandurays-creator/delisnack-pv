import settings from '@/data/settings'

/** Builds a wa.me link with an encoded message for the DeliSnack WhatsApp number. */
export function buildWhatsAppLink(message: string): string {
  const params = new URLSearchParams({ text: message })
  return `https://wa.me/${settings.whatsappNumber}?${params.toString()}`
}

export function productOrderMessage(productName: string): string {
  return `Hola, DeliSnack 💕 Me gustaría pedir ${productName}.`
}

export const generalOrderLink = () => buildWhatsAppLink(settings.whatsappDefaultMessage)
export const toppingsInquiryLink = () => buildWhatsAppLink(settings.whatsappToppingsMessage)
export const productOrderLink = (productName: string) =>
  buildWhatsAppLink(productOrderMessage(productName))

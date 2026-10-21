import { MessageCircle } from 'lucide-react'
import { generalOrderLink } from '@/lib/whatsapp'

export function WhatsAppFloatingButton() {
  return (
    <a
      href={generalOrderLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark sm:bottom-7 sm:right-7 relative"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping motion-reduce:hidden" />
    </a>
  )
}

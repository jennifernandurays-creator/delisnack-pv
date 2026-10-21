import { MessageCircle } from 'lucide-react'
import { generalOrderLink } from '@/lib/whatsapp'
import { Reveal } from '@/components/Reveal'
import { Sparkle } from '@/components/Decorative'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-ink text-cream">
      <div className="decorative-blob -top-20 right-10 h-72 w-72 bg-primary/30" style={{ filter: 'blur(70px)' }} />
      <div className="decorative-blob bottom-0 -left-16 h-64 w-64 bg-caramel/20" style={{ filter: 'blur(70px)' }} />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <Reveal>
          <Sparkle className="mx-auto h-8 w-8 text-primary-light" />
          <h2 className="font-display mt-4 text-3xl sm:text-5xl">¿Ya sabes cuál vas a probar?</h2>
          <p className="mt-4 text-lg text-cream/75">Escríbenos y prepara tu próximo antojo.</p>
        </Reveal>

        <Reveal delay={120}>
          <a
            href={generalOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Pedir por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}

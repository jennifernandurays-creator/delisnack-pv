import { ArrowRight, MessageCircle } from 'lucide-react'
import settings from '@/data/settings'
import { generalOrderLink } from '@/lib/whatsapp'
import { Heart, Sparkle, StarDot } from '@/components/Decorative'
import { Reveal } from '@/components/Reveal'

const PRODUCT_PILLS = ['Mini donas', 'Waffles', 'Churros', 'Postres en vasito', 'Horchata']

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        className="decorative-blob -top-24 -left-24 h-72 w-72 bg-primary-light/30"
        style={{ filter: 'blur(60px)' }}
      />
      <div
        className="decorative-blob top-1/3 -right-32 h-96 w-96 bg-sage/20"
        style={{ filter: 'blur(70px)' }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
          <div className="relative z-10 text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-dark ring-1 ring-primary-light/50">
                <Sparkle className="h-3.5 w-3.5" />
                {settings.tagline}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink">
                {settings.heroTitle}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 text-lg text-ink-soft max-w-xl mx-auto lg:mx-0">{settings.heroSubtitle}</p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
                {PRODUCT_PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-ink-soft shadow-sm ring-1 ring-black/5"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#menu"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  Ver menú
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                <a
                  href={generalOrderLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
                >
                  <MessageCircle className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                  Pedir por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative z-10">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <Heart className="absolute -top-6 left-6 h-7 w-7 text-primary-light/80 sm:-top-8 sm:left-10" />
              <StarDot className="absolute top-10 -right-2 h-3 w-3 text-caramel/60 sm:top-16 sm:-right-4" />
              <Sparkle className="absolute -bottom-4 left-1/3 h-6 w-6 text-sage/70" />

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 overflow-hidden rounded-[2rem] shadow-xl shadow-ink/10 ring-1 ring-black/5">
                  <img
                    src="/images/products/mini-donas.jpg"
                    alt="Mini donas de DeliSnack bañadas con chocolate, dulce de leche y galleta"
                    className="h-56 sm:h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.5rem] shadow-lg shadow-ink/10 ring-1 ring-black/5 -mt-6">
                  <img
                    src="/images/products/churros.jpg"
                    alt="Churros de DeliSnack bañados con chocolate"
                    className="h-32 sm:h-40 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.5rem] shadow-lg shadow-ink/10 ring-1 ring-black/5">
                  <img
                    src="/images/products/horchata-vaso.jpg"
                    alt="Horchata de DeliSnack servida en vaso con hielo"
                    className="h-32 sm:h-40 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

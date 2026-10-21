import settings from '@/data/settings'
import { Reveal } from '@/components/Reveal'
import { Heart } from '@/components/Decorative'

export function About() {
  return (
    <section id="sobre-nosotros" className="py-20 sm:py-28 bg-cream-soft/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-ink/10 ring-1 ring-black/5 rotate-[-2deg]">
                <img
                  src="/images/products/waffles.jpg"
                  alt="Waffles de DeliSnack con fruta fresca"
                  loading="lazy"
                  className="h-64 sm:h-80 w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 sm:w-48 overflow-hidden rounded-2xl shadow-lg shadow-ink/15 ring-4 ring-cream rotate-[4deg]">
                <img
                  src="/images/products/postres-vasito.jpg"
                  alt="Postre en vasito de DeliSnack"
                  loading="lazy"
                  className="h-28 sm:h-32 w-full object-cover"
                />
              </div>
              <Heart className="absolute -top-5 -left-3 h-8 w-8 text-primary-light/70" />
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-dark">
              Sobre DeliSnack
            </span>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl text-ink">{settings.aboutTitle}</h2>
            <p className="mt-5 text-ink-soft text-lg leading-relaxed">{settings.aboutText}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

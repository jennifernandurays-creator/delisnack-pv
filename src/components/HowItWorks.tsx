import { MessageCircleHeart, ShoppingBag, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const STEPS = [
  { number: '01', title: 'Elige tu antojo', icon: Sparkles },
  { number: '02', title: 'Haz tu pedido', icon: MessageCircleHeart },
  { number: '03', title: 'Disfrútalo', icon: ShoppingBag },
]

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-ink">Así de fácil es disfrutar DeliSnack</h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-10 sm:gap-6">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <Reveal key={step.number} delay={index * 100} className="relative">
                <div className="flex flex-col items-center">
                  <span className="font-display text-6xl sm:text-7xl text-primary-light/70">{step.number}</span>
                  <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream-soft text-primary-dark">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-3 font-display text-lg text-ink">{step.title}</p>
                </div>
                {index < STEPS.length - 1 && (
                  <span
                    className="hidden sm:block absolute top-8 left-full w-full border-t-2 border-dashed border-primary-light/40 -translate-x-1/2"
                    aria-hidden="true"
                  />
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

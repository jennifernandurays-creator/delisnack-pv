import { MessageCircle } from 'lucide-react'
import toppings from '@/data/toppings'
import { Reveal } from '@/components/Reveal'
import { toppingsInquiryLink } from '@/lib/whatsapp'

export function Toppings() {
  return (
    <section id="toppings" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-ink">Personaliza tu antojo</h2>
          <p className="mt-3 text-ink-soft max-w-lg mx-auto">
            Elige tus favoritos y dale tu toque especial a tus mini donas, waffles, churros o postre en vasito.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-8 sm:gap-x-6">
          {toppings.map((topping, index) => (
            <Reveal key={topping.id} delay={index * 50} className="flex flex-col items-center">
              <div className="group relative h-16 w-16 sm:h-24 sm:w-24 overflow-hidden rounded-full shadow-md shadow-ink/10 ring-2 ring-white transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg active:scale-95">
                <img
                  src={topping.image}
                  alt={topping.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {!topping.available && (
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/50 text-[10px] font-semibold text-white">
                    Agotado
                  </div>
                )}
              </div>
              <span className="mt-2.5 text-xs sm:text-sm font-medium text-ink-soft text-center leading-tight">
                {topping.name}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 mx-auto max-w-xl rounded-3xl bg-cream-soft p-6 sm:p-8">
          <p className="font-display text-lg text-ink">Todos los toppings tienen un costo adicional.</p>
          <p className="mt-2 text-sm text-ink-soft">
            Consulta los precios por WhatsApp. Escríbenos y te compartiremos los precios de los toppings disponibles.
          </p>
          <a
            href={toppingsInquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Consultar precios por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { MessageCircle, Sparkles } from 'lucide-react'
import categories from '@/data/products'
import { Reveal } from '@/components/Reveal'
import { productOrderLink } from '@/lib/whatsapp'
import { SELECT_CATEGORY_EVENT } from '@/components/CategoryTeasers'

export function Menu() {
  const [activeId, setActiveId] = useState(categories[0].id)

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail
      if (categories.some((category) => category.id === detail)) {
        setActiveId(detail)
      }
    }
    window.addEventListener(SELECT_CATEGORY_EVENT, handler)
    return () => window.removeEventListener(SELECT_CATEGORY_EVENT, handler)
  }, [])

  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0]

  return (
    <section id="menu" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">Nuestro menú</h2>
          <p className="mt-3 text-ink-soft">
            Explora cada categoría y pide directamente por WhatsApp en un par de toques.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Categorías del menú"
            className="mt-10 flex gap-2 overflow-x-auto no-scrollbar pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible"
          >
            {categories.map((category) => {
              const isActive = category.id === activeId
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(category.id)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-primary/25'
                      : 'bg-white text-ink-soft ring-1 ring-black/5 hover:bg-cream-soft'
                  }`}
                >
                  {category.shortLabel}
                </button>
              )
            })}
          </div>
        </Reveal>

        <p className="mt-6 text-center text-ink-soft max-w-xl mx-auto">{activeCategory.description}</p>

        <div
          role="tabpanel"
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeCategory.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg text-ink">{item.name}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft flex-1">{item.description}</p>

                  {item.customizable && (
                    <a
                      href="#toppings"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-caramel-dark hover:text-primary-dark w-fit"
                    >
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      Personalízalo con toppings
                    </a>
                  )}

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-ink-soft">
                      {item.price ? `$${item.price.toLocaleString()}` : 'Precio próximamente'}
                    </span>
                    <a
                      href={productOrderLink(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      Pedir
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

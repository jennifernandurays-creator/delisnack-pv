import categories from '@/data/products'
import { Reveal } from '@/components/Reveal'

export const SELECT_CATEGORY_EVENT = 'delisnack:select-category'

function goToCategory(categoryId: string) {
  window.dispatchEvent(new CustomEvent(SELECT_CATEGORY_EVENT, { detail: categoryId }))
}

export function CategoryTeasers() {
  return (
    <section className="py-20 sm:py-28 bg-cream-soft/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">¿Qué se te antoja?</h2>
          <p className="mt-3 text-ink-soft">
            Elige una categoría para saltar directo a esas opciones dentro del menú.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 60}>
              <a
                href="#menu"
                onClick={() => goToCategory(category.id)}
                className="group block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-3 text-center">
                  <span className="text-sm font-semibold text-ink">{category.shortLabel}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

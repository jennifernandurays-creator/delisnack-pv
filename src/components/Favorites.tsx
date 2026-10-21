import { MessageCircle } from 'lucide-react'
import { getFeaturedItems } from '@/data/products'
import { Reveal } from '@/components/Reveal'
import { productOrderLink } from '@/lib/whatsapp'

export function Favorites() {
  const favorites = getFeaturedItems().slice(0, 3)
  if (favorites.length === 0) return null

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-cream to-blush/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-dark">Recomendados</span>
          <h2 className="font-display mt-2 text-3xl sm:text-4xl text-ink">Los favoritos de DeliSnack</h2>
          <p className="mt-3 text-ink-soft">
            Si es tu primera vez con nosotros, estos son un excelente punto de partida.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-6 sm:gap-8">
          {favorites.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 100}
              className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
            >
              <article className="group relative h-full overflow-hidden rounded-[2rem] shadow-lg shadow-ink/10 ring-1 ring-black/5">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    index === 0 ? 'aspect-[6/5] sm:aspect-[16/11]' : 'aspect-[4/3]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                      {item.categoryName}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl text-white mt-1">{item.name}</h3>
                  </div>
                  <a
                    href={productOrderLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pedir ${item.name} por WhatsApp`}
                    className="shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white text-ink transition-transform hover:scale-105 hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

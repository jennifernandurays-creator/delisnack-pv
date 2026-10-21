import { Reveal } from '@/components/Reveal'

interface GalleryTile {
  image?: string
  alt?: string
  span: string
}

const TILES: Array<GalleryTile> = [
  { image: '/images/products/mini-donas.jpg', alt: 'Mini donas de DeliSnack', span: 'sm:col-span-2 sm:row-span-2' },
  { image: '/images/products/horchata-vaso.jpg', alt: 'Horchata de DeliSnack en vaso', span: '' },
  { span: '' },
  { image: '/images/products/waffles.jpg', alt: 'Waffles de DeliSnack', span: '' },
  { image: '/images/products/churros.jpg', alt: 'Churros de DeliSnack', span: 'sm:col-span-2' },
  { span: '' },
  { image: '/images/products/postres-vasito.jpg', alt: 'Postres en vasito de DeliSnack', span: '' },
  { image: '/images/products/horchata-bolsa.jpg', alt: 'Horchata en bolsa de DeliSnack', span: '' },
  { span: 'sm:col-span-2' },
]

export function Gallery() {
  return (
    <section className="py-20 sm:py-28 bg-cream-soft/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">Momentos DeliSnack</h2>
          <p className="mt-3 text-ink-soft">Un vistazo a los productos que salen de nuestra cocina.</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 auto-rows-[130px] sm:auto-rows-[150px] gap-3 sm:gap-4">
          {TILES.map((tile, index) => (
            <Reveal
              key={index}
              delay={(index % 6) * 60}
              className={`overflow-hidden rounded-2xl ${tile.span}`}
            >
              {tile.image ? (
                <img
                  src={tile.image}
                  alt={tile.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.06]"
                />
              ) : (
                <div className="h-full w-full rounded-2xl border border-dashed border-ink/15 bg-white/40" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

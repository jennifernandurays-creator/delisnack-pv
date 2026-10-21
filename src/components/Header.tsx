import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import settings from '@/data/settings'
import { generalOrderLink } from '@/lib/whatsapp'

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#menu', label: 'Menú' },
  { href: '#sobre-nosotros', label: 'Sobre nosotros' },
  { href: '#preguntas-frecuentes', label: 'Preguntas frecuentes' },
  { href: '#contacto', label: 'Contacto' },
]

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="font-display text-2xl leading-none tracking-tight select-none">
      <span className={light ? 'text-white' : 'text-ink'}>Deli</span>
      <span className={light ? 'text-primary-light' : 'text-primary'}>Snack</span>
    </span>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-[0_2px_20px_rgba(61,43,34,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 shrink-0" aria-label="DeliSnack, inicio">
            <Logo />
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-soft hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={generalOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Pedir por WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full text-ink hover:bg-cream-soft focus-visible:outline-2 focus-visible:outline-primary"
              aria-label="Abrir menú de navegación"
              aria-expanded={menuOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-ink/40" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-cream shadow-2xl flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between h-16 px-5 border-b border-black/5">
              <Logo />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center h-11 w-11 rounded-full text-ink hover:bg-cream-soft focus-visible:outline-2 focus-visible:outline-primary"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-5" aria-label="Navegación móvil">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-base font-medium text-ink hover:bg-cream-soft focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto p-5">
              <a
                href={generalOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-base font-semibold text-white shadow-md shadow-primary/25"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Pedir por WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-ink-soft">{settings.whatsappDisplay}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

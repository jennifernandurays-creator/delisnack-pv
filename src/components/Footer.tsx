import { Instagram, Facebook, Youtube, Mail } from 'lucide-react'
import settings from '@/data/settings'
import { Logo } from '@/components/Header'
import { TikTokIcon } from '@/components/TikTokIcon'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#menu', label: 'Menú' },
  { href: '#sobre-nosotros', label: 'Sobre nosotros' },
  { href: '#preguntas-frecuentes', label: 'Preguntas frecuentes' },
  { href: '#contacto', label: 'Contacto' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <Logo light />
            <p className="mt-3 text-sm text-cream/60 max-w-xs">{settings.footerNote}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de DeliSnack"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={settings.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de DeliSnack"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href={settings.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de DeliSnack"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={settings.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube de DeliSnack"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Enlaces del footer">
            <p className="text-sm font-semibold text-cream/50 uppercase tracking-wide">Explorar</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream/75 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-cream/50 uppercase tracking-wide">Contacto</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-cream/75">
              <span>{settings.whatsappDisplay}</span>
              <a href={`mailto:${settings.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {settings.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-cream/45">
          © {new Date().getFullYear()} DeliSnack. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

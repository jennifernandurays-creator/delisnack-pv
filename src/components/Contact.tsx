import { Instagram, Facebook, Youtube, Mail, MessageCircle } from 'lucide-react'
import settings from '@/data/settings'
import { generalOrderLink } from '@/lib/whatsapp'
import { Reveal } from '@/components/Reveal'
import { TikTokIcon } from '@/components/TikTokIcon'

const SOCIALS = [
  { label: 'Instagram', handle: settings.instagramHandle, href: settings.instagramUrl, Icon: Instagram },
  { label: 'TikTok', handle: settings.tiktokHandle, href: settings.tiktokUrl, Icon: TikTokIcon },
  { label: 'Facebook', handle: 'DeliSnack', href: settings.facebookUrl, Icon: Facebook },
  { label: 'YouTube', handle: 'DeliSnack', href: settings.youtubeUrl, Icon: Youtube },
]

export function Contact() {
  return (
    <section id="contacto" className="py-20 sm:py-28 bg-cream-soft/60">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">Hablemos</h2>
          <p className="mt-3 text-ink-soft">Escríbenos por el canal que prefieras.</p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Reveal className="lg:col-span-4 sm:col-span-2">
            <a
              href={generalOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl bg-primary p-6 text-white shadow-md shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-lg">WhatsApp</span>
                <span className="block text-sm text-white/85">{settings.whatsappDisplay}</span>
              </span>
            </a>
          </Reveal>

          {SOCIALS.map((social, index) => (
            <Reveal key={social.label} delay={80 + index * 60}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col items-center gap-3 rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-soft text-primary-dark">
                  <social.Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-medium text-ink">{social.label}</span>
                  <span className="block text-sm text-ink-soft">{social.handle}</span>
                </span>
              </a>
            </Reveal>
          ))}

          <Reveal delay={80 + SOCIALS.length * 60} className="lg:col-span-4">
            <a
              href={`mailto:${settings.email}`}
              className="flex items-center justify-center gap-3 rounded-3xl bg-white p-5 text-ink-soft shadow-sm ring-1 ring-black/5 transition-colors hover:text-primary-dark"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              {settings.email}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

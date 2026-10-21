interface IconProps {
  className?: string
}

export function TikTokIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82c-.9-.6-1.5-1.55-1.6-2.65h-3.03v13.2c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.28 0 .55.04.8.12v-3.1a5.83 5.83 0 0 0-.8-.06 5.83 5.83 0 1 0 5.83 5.83V9.4a8.4 8.4 0 0 0 4.72 1.44V7.8a5.4 5.4 0 0 1-3.2-1.98Z" />
    </svg>
  )
}

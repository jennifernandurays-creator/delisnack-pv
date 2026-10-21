interface IconProps {
  className?: string
}

export function Sparkle({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c.6 4.2 1.8 7 3.6 8.4C17.4 9.8 20 11 24 12c-4 1-6.6 2.2-8.4 3.6C13.8 17 12.6 19.8 12 24c-.6-4.2-1.8-7-3.6-8.4C6.6 14.2 4 13 0 12c4-1 6.6-2.2 8.4-3.6C10.2 7 11.4 4.2 12 0Z" />
    </svg>
  )
}

export function Heart({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21s-7.5-4.6-10.2-9.3C.2 8.7 1.6 5 5.2 4.2 7.6 3.7 9.9 4.8 12 7.4c2.1-2.6 4.4-3.7 6.8-3.2 3.6.8 5 4.5 3.4 7.5C19.5 16.4 12 21 12 21Z" />
    </svg>
  )
}

export function StarDot({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="6" />
    </svg>
  )
}

export function BlobShape({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M45.6 -60.1C58.9 -50.3 68.5 -35.6 72.2 -19.4C75.9 -3.2 73.7 14.5 65.4 29.4C57.1 44.4 42.7 56.5 26.6 63.1C10.5 69.7 -7.3 70.7 -23.9 65.7C-40.5 60.7 -55.9 49.7 -64.6 34.7C-73.3 19.7 -75.3 0.7 -70.9 -16.1C-66.5 -32.9 -55.7 -47.5 -41.7 -57.4C-27.7 -67.3 -10.5 -72.5 4.9 -70.9C20.3 -69.3 32.3 -69.9 45.6 -60.1Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

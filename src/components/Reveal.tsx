import { useEffect, useRef, useState } from 'react'
import type { ElementType, HTMLAttributes, ReactNode } from 'react'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ElementType
  delay?: number
}

/**
 * Fades + lifts children into place once they enter the viewport.
 * Falls back to always-visible when IntersectionObserver isn't available (SSR).
 */
export function Reveal({ children, as: Tag = 'div', delay = 0, className = '', style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Component = Tag as ElementType
  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Component>
  )
}

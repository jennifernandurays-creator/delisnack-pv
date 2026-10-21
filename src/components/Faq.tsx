import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import faqItems from '@/data/faq'
import { Reveal } from '@/components/Reveal'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="preguntas-frecuentes" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">Preguntas frecuentes</h2>
          <p className="mt-3 text-ink-soft">Todo lo que necesitas saber antes de pedir.</p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={item.question} delay={index * 40}>
                <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="font-medium text-ink">{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-ink-soft leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

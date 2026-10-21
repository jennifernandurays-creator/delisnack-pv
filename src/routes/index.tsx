import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { CategoryTeasers } from '@/components/CategoryTeasers'
import { Menu } from '@/components/Menu'
import { Favorites } from '@/components/Favorites'
import { HowItWorks } from '@/components/HowItWorks'
import { About } from '@/components/About'
import { Toppings } from '@/components/Toppings'
import { Gallery } from '@/components/Gallery'
import { Faq } from '@/components/Faq'
import { FinalCta } from '@/components/FinalCta'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryTeasers />
        <Menu />
        <Favorites />
        <Toppings />
        <HowItWorks />
        <About />
        <Gallery />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  )
}

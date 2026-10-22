import { Features } from './components/Features.tsx'
import { Marquee } from './components/Marquee.tsx'
import { FinalCta } from './components/FinalCta.tsx'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { SignupProvider } from './components/SignupDialog.tsx'
import { SmoothScroll } from './components/SmoothScroll.tsx'
import { HowItWorks } from './components/HowItWorks.tsx'
import { Showcase } from './components/Showcase.tsx'

export default function App() {
  return (
    <SignupProvider>
      <SmoothScroll />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <HowItWorks />
        <FinalCta />
      </main>
      <Marquee />
      <Footer />
    </SignupProvider>
  )
}

import AnimatedBackground from '@/components/GalaxyBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <WhatsAppButton />
    </main>
  )
}

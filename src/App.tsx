import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

import AboutSkillSection from './components/AboutSkillSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'
import './index.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--color-canvas)', color: 'var(--color-charcoal)' }}>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      <Navbar />
      <main>
        <HeroSection />

        <AboutSkillSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App

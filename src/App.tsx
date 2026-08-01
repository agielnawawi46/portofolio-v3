import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSkillSection from './components/AboutSkillSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-canvas)', color: 'var(--color-charcoal)' }}>
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
  )
}

export default App

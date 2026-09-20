import { useState } from 'react'
import Navbar from './components/Navbar'
import OpeningSection from './components/OpeningSection'
import ServicesSection from './components/ServicesSection'
import WhyUsSection from './components/WhyUsSection'
import WorkSection from './components/WorkSection'
import ProjectModal from './components/ProjectModal'
import AboutSection from './components/AboutSection'
import ProcessSection from './components/ProcessSection'
import CtaSection from './components/CtaSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="site-wrapper">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content">
        <OpeningSection />
        <ServicesSection />
        <WhyUsSection />
        <WorkSection onSelectProject={(project) => setSelectedProject(project)} />
        <AboutSection />
        <ProcessSection />
        <CtaSection />
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Concept Project Inspection Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default App

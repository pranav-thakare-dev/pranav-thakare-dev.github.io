import React, { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { ImpactMetrics } from '@/components/ImpactMetrics'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { EducationAchievements } from '@/components/EducationAchievements'
import { ContactModal } from '@/components/ContactModal'
import { ResumeModal } from '@/components/ResumeModal'
import { Footer } from '@/components/Footer'

export function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [contactOpen, setContactOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-blue-500/20 selection:text-blue-500">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenContact={() => setContactOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main>
        <Hero
          onOpenContact={() => setContactOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        <ImpactMetrics />

        <Experience />

        <Skills />

        <Projects />

        <EducationAchievements />
      </main>

      <Footer onOpenContact={() => setContactOpen(true)} />

      <ContactModal
        open={contactOpen}
        onOpenChange={setContactOpen}
      />

      <ResumeModal
        open={resumeOpen}
        onOpenChange={setResumeOpen}
      />
    </div>
  )
}

export default App

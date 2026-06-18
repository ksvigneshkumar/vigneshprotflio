'use client'

import Navbar from '../components/Navbar'
import ParticlesCanvas from '../components/ParticlesCanvas'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import CtaSection from '../components/CtaSection'
import ResumeSection from '../components/ResumeSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'
import ArticlesSection from '../components/ArticlesSection'
import CodingSection from '../components/CodingSection'
import SocialSection from '../components/SocialSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ParticlesCanvas />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CtaSection />
        <ResumeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <ArticlesSection />
        <CodingSection />
        <SocialSection />
      </main>
      <Footer />
      <BackToTop />
      <ScrollReveal />
    </>
  )
}

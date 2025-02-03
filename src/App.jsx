import './App.css'
import './index.css'
import { Fragment } from 'react'
import NavBar from './assets/components/NavBar'
import HeroSection from './assets/pages/home/hero.section.jsx'
import BlogSection from './assets/pages/home/blog.section.jsx'
import Footer from './assets/components/Footer'
import AboutSection from './assets/pages/home/about.section.jsx'
import ProjectSection from './assets/pages/home/project.section.jsx'
import SkillSection from './assets/pages/home/skill.section.jsx'
import FeatureSection from './assets/pages/home/feature.section.jsx'

function App() {

  return (
    <Fragment>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <SkillSection />
      <Footer />
    </Fragment>

  )
}

export default App

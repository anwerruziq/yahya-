import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SidebarPage from './components/SidebarPage'

function HomePage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Light spots for depth and digital identity */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-white rounded-full opacity-35 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full opacity-25 animate-pulse"></div>
      </div>
      
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="testimonials">
      
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sidebar" element={<SidebarPage />} />
      </Routes>
    </Router>
  )
}

export default App

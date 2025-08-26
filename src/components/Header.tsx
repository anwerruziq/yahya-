import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'عني', href: '#about' },
  
    { name: 'أعمالي', href: '#projects' },
   
    { name: 'تواصل', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false)
    
    // Small delay to ensure menu is closed before scrolling
    setTimeout(() => {
      // Remove the # from href to get the id
      const id = href.replace('#', '')
      const element = document.getElementById(id)
      
      if (element) {
        // Add offset for fixed header
        const headerHeight = 80
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      } else {
        console.log('Element not found:', id)
      }
    }, 300)
  }

  return (
    <>
      {/* Blur Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 h-20 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-effect border-b border-glass-border shadow-lg' 
            : 'bg-transparent'
        }`}
      >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 py-1">
        <div className="flex items-center justify-between">
          {/* Mobile Hamburger Button - Left */}
          <motion.button
            className="block md:hidden text-accent-blue z-50 p-3 rounded-lg glass-effect border border-glass-border hover:bg-accent-blue/10 transition-all duration-300"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="text-2xl font-bold">
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-accent-blue transition-colors duration-300"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
          
          {/* Logo - Right */}
          <motion.div 
            className="text-2xl font-bold text-accent-blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <img 
            src="https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/logos/logo1.png" 
            alt="logo" 
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
          </motion.div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-glass-border mt-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-right text-white hover:text-accent-blue transition-colors duration-300 py-2"
                whileHover={{ x: -5 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
    </>
  )
}

export default Header

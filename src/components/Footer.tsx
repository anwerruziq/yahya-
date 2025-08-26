import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'عني', href: '#about' },
    { name: 'أعمالي', href: '#projects' },
   
    { name: 'تواصل', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="py-16 px-6 relative border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo and Description */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-accent-blue mb-4">
              يحيى رزيق
            </h3>
            <p className="text-gray-400 leading-relaxed">
              إنشاء تجارب رقمية غامرة من خلال التصميم المبتكر والتقنيات المتطورة.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">روابط سريعة</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-accent-blue transition-colors duration-300 hover:glow-border"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">تواصل معي</h4>
            <div className="space-y-2 text-gray-400">
              <p>yahyeroziq@gmail.com</p>
              <p>776080001 967+ </p>
           
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-glass-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {currentYear} جميع الحقوق محفوضة  AR.Coder
            </p>
            <div className="flex items-center space-x-6 text-gray-400">
     
              <motion.div
                className="text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <i className="ph-heart-fill text-lg"></i>
              </motion.div>
        
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent blur-sm"></div>
    </footer>
  )
}

export default Footer

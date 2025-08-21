import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg/95 to-accent-blue/10"></div>
      
      {/* Spline 3D Model */}
      <motion.div
        className="relative z-10 w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <iframe 
          src='https://my.spline.design/blackabstractart-8qrAEUIticOzwS9JbOdzJpuA/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="3D Interactive Model"
        />
      </motion.div>
      
      {/* Floating text overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-Inter font-bold text-white mb-2 sm:mb-3 text-glow"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            YAHYA RUZAIQ
          </motion.h1>
          
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Inter font-bold text-accent-blue mb-3 sm:mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            Graphic Designer
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-accent-blue font-medium"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.1, duration: 1 }}
          >
            مصمم جرافيكس إبداعي ومبدع رقمي
          </motion.p>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-accent-blue rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-accent-blue rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

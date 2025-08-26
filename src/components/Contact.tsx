import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/yahye.raziq?mibextid=ZbWKwL', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/yahya_razaiq?igsh=cHdxanBpZTB6aWNo', color: 'hover:text-pink-500' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/967776080001', color: 'hover:text-green-500' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/yahya-ruziaq-173032366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'hover:text-blue-600' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 px-3 sm:px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            تواصل <span className="text-accent-blue">معي</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Social Icons */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                دعنا نتواصل
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                أنا دائمًا منفتح لمناقشة مشاريع جديدة وأفكار إبداعية أو فرص 
                للمشاركة في رؤيتك. لا تتردد في التواصل معي.
              </p>
            </div>

            {/* Social Icons */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-accent-blue mb-6">تابعني</h4>
              <div className="relative w-full h-96 overflow-hidden">
                {socialLinks.map((social, index) => {
                  const positions = [
                    { x: 60, y: 80 },
                    { x: 200, y: 120 },
                    { x: 160, y: 220 },
                    { x: 300, y: 80 }
                  ];
                  
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="absolute flex items-center justify-center p-4 rounded-xl transition-all duration-300 group"
                      style={{
                        left: `${positions[index].x}px`,
                        top: `${positions[index].y}px`
                      }}
                      whileHover={{ scale: 1.3, y: -10, rotate: 8 }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      animate={{
                        y: [0, -15, 10, -5, 0],
                        x: [0, 8, -6, 12, 0],
                        rotate: [0, 5, -3, 8, 0]
                      }}
                      transition={{
                        duration: 0.8, 
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 80,
                        y: {
                          duration: 6 + index * 0.8,
                          repeat: Infinity,
                          ease: "easeInOut"
                        },
                        x: {
                          duration: 5 + index * 0.6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        },
                        rotate: {
                          duration: 4 + index * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-accent-blue/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-sm">
                        <i className={`${social.icon} text-4xl text-accent-blue ${social.color} transition-colors duration-300`}></i>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-accent-blue mb-6">معلومات التواصل</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <i className="ph-envelope text-accent-blue text-xl"></i>
                  <span>yahyeroziq@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <i className="ph-phone text-accent-blue text-xl"></i>
                  <span>+967 776080001</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <i className="ph-map-pin text-accent-blue text-xl"></i>
                  <span>اليمن</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="glass-effect border border-glass-border rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              أرسل رسالة
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-glass-border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue/50 focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300"
                  placeholder="اسمك"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-glass-border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue/50 focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300"
                  placeholder="بريدك الإلكتروني"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-glass-border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue/50 focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 resize-none"
                  placeholder="أخبرني عن مشروعك..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-accent-blue/20 to-purple-500/20 border border-accent-blue/40 text-accent-blue font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(216,236,248,0.4)] hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="relative z-10">إرسال الرسالة</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className="ph-paper-plane mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

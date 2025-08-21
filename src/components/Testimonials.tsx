import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "أحمد محمد",
      title: "مدير التسويق، شركة الإبداع",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      review: "عمل يحيى استثنائي ومذهل. حول رؤيتنا إلى واقع رقمي رائع تجاوز جميع التوقعات."
    },
    {
      name: "فاطمة علي",
      title: "مديرة الإبداع، استوديو التصميم",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      review: "العمل مع يحيى كان تغييرًا جذريًا. انتباهه للتفاصيل ورؤيته الإبداعية أحييا مشروعنا بطرق لم نتخيلها."
    },
    {
      name: "محمد حسن",
      title: "مدير المنتج، شركة الابتكار",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      review: "الخبرة التقنية ليحيى ممزوجة بحساسيته الفنية خلقت تجربة يحبها مستخدمونا."
    },
    {
      name: "سارة أحمد",
      title: "مؤسسة، شركة ناشئة",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      review: "مستوى الابتكار والجودة الذي قدمه يحيى كان يتجاوز أي شيء رأيناه. عمل استثنائي حقًا."
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            آراء <span className="text-accent-blue">العملاء</span>
          </h2><br />
          <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Navigation arrows */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-effect border border-accent-blue/30 text-accent-blue hover:glow-border transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ph-caret-left text-xl"></i>
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-effect border border-accent-blue/30 text-accent-blue hover:glow-border transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ph-caret-right text-xl"></i>
          </motion.button>

          {/* Testimonial cards */}
          <div className="relative h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-2xl mx-auto text-center">
                  <motion.div
                    className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent-blue/30"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <motion.div
                    className="text-gray-300 text-lg leading-relaxed mb-6 italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    "{testimonials[currentIndex].review}"
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-accent-blue font-medium">
                      {testimonials[currentIndex].title}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent-blue scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

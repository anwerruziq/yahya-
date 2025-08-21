import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "تصميم شعار",
      category: "هوية بصرية"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      title: "بوستر إعلاني",
      category: "إعلانات"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
      title: "تصميم تطبيق",
      category: "واجهات مستخدم"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
      title: "تصميم موقع",
      category: "تصميم ويب"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      title: "هوية بصرية",
      category: "براندينج"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      title: "تصميم منتج",
      category: "تصميم صناعي"
    }
  ]

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
            معرض <span className="text-accent-blue">التصاميم</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
        </motion.div>

        {/* Horizontal Gallery */}
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex-shrink-0 w-80 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden rounded-2xl glass-effect border border-glass-border">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-accent-blue text-sm font-medium">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-blue/20 to-purple-500/20 blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fullscreen Preview Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[90vh] mx-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={selectedImage} 
                  alt="Gallery Preview"
                  className="w-full h-full object-contain rounded-2xl"
                />
                
                {/* Close button */}
                <motion.button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass-effect border border-glass-border text-white hover:text-accent-blue transition-colors duration-300"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="ph-x text-xl"></i>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery

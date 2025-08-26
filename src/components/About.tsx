import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    { name: 'Photoshop', image: 'https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/logos/Photoshop-logo-Adobe-symbol-digital-creativity-transparent-png-image-jpg.png' },
    { name: 'Illustrator', image: 'https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/logos/Adobe-Illustrator-2024-Logo-PNG-Transparent-Creative-and-Distinctive-Design-jpg-768x768.png' },
    { name: 'After Effects', image: 'https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/logos/adobe-after-effects-software-icon_539007-183.png' },
    { name: 'Blender', image: 'https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/logos/Blender-Logo-3D-Software.png' },
    { name: 'Figma', image: 'https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/logos/ekvife6ql3xc1.png' },
  ]

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
             <span className="text-accent-blue">من انا</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Glowing circular image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/30 to-purple-500/30 rounded-full blur-2xl scale-110 animate-pulse"></div>
              
              {/* Image container */}
              <motion.div
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-accent-blue/30"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(216, 236, 248, 0.6)"
                }}
                transition={{ duration: 0.3 }}
              ><img src="https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/logos/yahya.png" alt="" />
                {/* Placeholder image - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-purple-500/20 flex items-center justify-center">
                  <i className="ph-user text-8xl text-accent-blue/50"></i>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Bio and skills */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
              مصمم جرافيك ابداعي
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                أنا مصمم جرافيك شغوف بإنشاء تجارب بصرية غامرة ومبتكرة. 
                مع خبرة في التقنيات الحديثة للتصميم والرسوم ثلاثية الأبعاد، 
                أحول الأفكار إلى واقع من خلال الإبداع والتصميم. كل مشروع 
                هو فرصة لدفع الحدود وإنشاء شيء استثنائي.
              </p>
            </div>

            {/* Skills - marquee */}
            <div>
              <h4 className="text-xl font-semibold text-accent-blue mb-6">مهارات التصميم والرسوم ثلاثية الأبعاد</h4>
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {skills.map((skill, index) => {
                      const angle = (index * 360) / skills.length;
                      const radius = 80; // نصف قطر الدائرة
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;
                      
                      return (
                  <motion.div
                          key={`${skill.name}-${index}`}
                          className="absolute"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)'
                          }}
                          animate={{
                            rotate: [360, 0],
                            y: [0, -15, 10, -5, 0],
                            x: [0, 8, -6, 12, 0],
                            scale: [1, 1.1, 0.9, 1.05, 1]
                          }}
                          transition={{
                            rotate: {
                              duration: 25 + index * 2,
                              repeat: Infinity,
                              ease: "linear"
                            },
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
                            scale: {
                              duration: 4 + index * 0.4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-16 h-16 md:w-24 md:h-24 object-contain mix-blend-multiply drop-shadow-lg"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                    </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Full-width background image with transparency */}
      <div className="py-16">
        <div className="absolute left-1/2 -translate-x-1/2 w-screen h-64 md:h-80">
          <img 
            src="https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid-live/b-g.png"
            alt="خلفية تصميم"
            className="w-full h-full object-contain object-center opacity-40 pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  )
}

export default About

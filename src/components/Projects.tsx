import React from 'react'
import { motion } from 'framer-motion'

// Lazy-load video when it enters the viewport to improve performance, especially on mobile
const useInView = (options?: IntersectionObserverInit) => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = React.useState(false)

  React.useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}

type ThumbVideoProps = {
  src: string
  className?: string
  onClick?: () => void
}

const ThumbVideo: React.FC<ThumbVideoProps> = ({ src, className, onClick }) => {
  const { ref, inView } = useInView({ rootMargin: '200px' })
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  return (
    <div ref={ref} className={className} style={{ position: 'relative' }}>
      {inView ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
          muted
          loop
          playsInline
          preload="metadata"
          autoPlay={false}
          onClick={onClick}
          onLoadedMetadata={(e) => {
            const video = e.currentTarget as HTMLVideoElement
            try { video.currentTime = 0.05 } catch {}
          }}
          onMouseEnter={(e) => {
            const video = e.currentTarget as HTMLVideoElement
            video.currentTime = 0
            video.play()
          }}
          onMouseLeave={(e) => {
            const video = e.currentTarget as HTMLVideoElement
            video.pause()
            video.currentTime = 0
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full bg-gray-800/70" onClick={onClick} />
      )}
    </div>
  )
}

// Generate a low-res preview URL for Supabase-hosted images
const getLowResImage = (url: string, quality: number = 35) => {
  try {
    const isSupabase = url.includes('/storage/v1/object/public/')
    if (!isSupabase) return url
    const transformed = url.replace('/storage/v1/object/public/', '/storage/v1/render/image/public/')
    const hasQuery = transformed.includes('?')
    return transformed + (hasQuery ? `&quality=${quality}` : `?quality=${quality}`)
  } catch {
    return url
  }
}

const Projects = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null)
  const projects3D = [
    {
      title: "تصميم 3D احترافي",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-videos/imagd%20(1).jpg"
    },
    {
      title: "مشروع 3D متقدم",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-videos/imagd%20(1).png"
    },
    {
      title: "تصميم ثلاثي الأبعاد",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-videos/imagd%20(2).jpg"
    },
    {
      title: "مشروع 3D عالي الجودة",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-videos/noar.png"
    }
  ]

  const projects2D = [
    {
      title: "تصميم احترافي",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-2d-img/2021_Januari_71.jpg1.jpg"
    },
    {
      title: "تصميم شعار متقدم",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-2d-img/U2%20copy.jpg"
    },
    {
      title: "تصميم منتج عالي الجودة",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-2d-img/u3%20copy.jpg"
    },
    {
      title: "تصميم فني متقدم",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-2d-img/winges.jpg"
    }
  ]

  const projectsAI = [
    {
      title: "صورة AI فنية",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/main-ai/main-ai-img/Image_fx%20(26).jpg"
    },
    {
      title: "تصميم AI",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/main-ai/main-ai-img/Whisk_a5bb872349.jpg"
    },
    {
      title: "صورة خيالية",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/main-ai/main-ai-img/Whisk_storyboard3858f782366941a3b2b74993.jpg"
    },
    {
      title: "عالم افتراضي",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/main-ai/main-ai-img/Whisk_storyboardd41ff3eb5733497ab32b9859.jpg"
    }
  ]

  const videos3D = [
    {
      title: "فيديو 3D - شاي الشاعر",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-3d-vid-y/cans.mp4"
    },
    {
      title: "فيديو 3D - مشروع متقدم",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-3d-vid-y/3d%20show_low.mp4"
    },
    {
      title: "فيديو 3D - معطر الجو",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-3d-vid-y/677.mp4"
    },
    {
      title: "فيديو 3D - الكهف مع خلفية",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-3d-vid-y/student.mp4"
    },
    {
      title: "فيديو 3D - مشروع إبداعي",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-videos-x/oyu.mp4"
    },
    {
      title: "فيديو 3D - تصميم احترافي",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-videos-x/2car.mp4"
    },
    {
      title: "فيديو 3D - مشروع عالي الجودة",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-videos-x/3d%20ad%2023.mp4"
    },
    {
      title: "فيديو 3D - تصميم متطور",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-videos-x/new4.mp4"
    },
    {
      title: "فيديو 3D - تصميم متطور",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/yahey/main-videos-x/3d678.mp4"
    }
  ]

  const videosAI = [
    {
      title: "مشروع كوبيكو 4K",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/main-ai/main-ai-vid/A_closeup_3d_202507210120%20(1).mp4"
    },
    {
      title: "تصميم شاي الشاعر",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/main-ai/main-ai-vid/A_graceful_woman_202508040703.mp4"
    },
    {
      title: "مشروع مياه عدن",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/main-ai/main-ai-vid/A_minimal_highfashion_202508060749.mp4"
    },
    {
      title: "تصميم مياه صنعاء",
      video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid-live/vid-3d%20(1).mp4"
    }
  ]

  const ProjectSection = ({ title, items, isVideo = false }) => (
    <section className="py-16 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-accent-blue mb-4">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-accent-blue/50 mx-auto rounded-full"></div>
        </motion.div>

                <div className={`${title === "فيديوهات 3D" ? 'space-y-6 mb-8' : 'flex gap-2 mb-8 overflow-x-auto pb-4'}`}>
            {title === "فيديوهات 3D" ? (
              <>
                {/* أول 4 فيديوهات في صف أفقي */}
                <div className="flex gap-2 overflow-x-auto pb-4">
                  {items.slice(0, 4).map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="group flex-shrink-0"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="relative overflow-hidden rounded-xl bg-gray-800">
                        {(() => {
                          const mediaUrl = (item.video || item.image) as string
                          const looksLikeVideo = isVideo || (typeof mediaUrl === 'string' && mediaUrl.toLowerCase().endsWith('.mp4'))
                          if (looksLikeVideo) {
                            return (
                              <ThumbVideo
                                src={mediaUrl}
                                className="w-64 h-48 md:w-80 md:h-60"
                                onClick={() => setSelectedVideo(mediaUrl)}
                              />
                            )
                          }
                          return (
                            <img
                              src={getLowResImage(mediaUrl)}
                              alt={item.title}
                              loading="lazy"
                              className="w-64 h-48 md:w-80 md:h-60 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                              onClick={() => setSelectedImage(mediaUrl)}
                            />
                          )
                        })()}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* الخمسة فيديوهات الأخرى في صف أفقي منفصل */}
                <div className="flex gap-2 overflow-x-auto pb-4">
                  {items.slice(4, 9).map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="group flex-shrink-0"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="relative overflow-hidden rounded-xl bg-gray-800">
                        {(() => {
                          const mediaUrl = (item.video || item.image) as string
                          const looksLikeVideo = isVideo || (typeof mediaUrl === 'string' && mediaUrl.toLowerCase().endsWith('.mp4'))
                          if (looksLikeVideo) {
                            return (
                              <ThumbVideo
                                src={mediaUrl}
                                className="w-48 h-80 md:w-64 md:h-[360px]"
                                onClick={() => setSelectedVideo(mediaUrl)}
                              />
                            )
                          }
                          return (
                            <img
                              src={getLowResImage(mediaUrl)}
                              alt={item.title}
                              loading="lazy"
                              className="w-48 h-80 md:w-64 md:h-[360px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                              onClick={() => setSelectedImage(mediaUrl)}
                            />
                          )
                        })()}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              items.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-800">
                    {(() => {
                      const mediaUrl = (item.video || item.image) as string
                      const looksLikeVideo = isVideo || (typeof mediaUrl === 'string' && mediaUrl.toLowerCase().endsWith('.mp4'))
                      if (looksLikeVideo) {
                        return (
                          <ThumbVideo
                            src={mediaUrl}
                            className="w-64 h-48 md:w-80 md:h-60"
                            onClick={() => setSelectedVideo(mediaUrl)}
                          />
                        )
                      }
                      return (
                        <img
                          src={getLowResImage(mediaUrl)}
                          alt={item.title}
                          loading="lazy"
                          className="w-64 h-48 md:w-80 md:h-60 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                          onClick={() => setSelectedImage(mediaUrl)}
                        />
                      )
                    })()}
                  </div>
                </motion.div>
              ))
            )}
          </div>

        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button 
            onClick={() => {
              const sidebarUrl = `/sidebar?category=${encodeURIComponent(title.trim())}`
              console.log('Opening sidebar with URL:', sidebarUrl)
              window.location.href = sidebarUrl
            }}
            className="flex items-center gap-3 px-6 py-4 text-accent-blue hover:text-white  hover:scale-105 rounded-full transition-all duration-300 group font-semibold text-lg"
          >
            <span className="font-Inter">عرض المزيد</span>
            <svg 
              className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )

  return (
    <div id="projects" className="relative">
      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          />
          
          {/* Image container */}
          <motion.div
            className="relative z-10 max-w-2xl max-h-[80vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={selectedImage}
              alt="صورة مكبرة"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          />
          
          {/* Video container */}
          <motion.div
            className="relative z-10 max-w-4xl max-h-[80vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            >
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      )}
      {/* Main Title */}
      <motion.div
        className="text-center py-20 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            أعمالي
          </h1>
          <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
        </div>
      </motion.div>

      <ProjectSection title="صور 3D" items={projects3D} />
      <ProjectSection title="فيديوهات 3D" items={videos3D} isVideo={true} />
      <ProjectSection title="صور 2D" items={projects2D} />
      <ProjectSection title="صور AI" items={projectsAI} />
      <ProjectSection title="فيديوهات AI" items={videosAI} isVideo={true} />
    </div>
  )
}

export default Projects

import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const [selectedImage, setSelectedImage] = React.useState(null)
  const [selectedVideo, setSelectedVideo] = React.useState(null)
  const projects3D = [
    {
      title: "تصميم 3D احترافي",
      image: "/3d img/23522 (1).png"
    },
    {
      title: "مشروع 3D متقدم",
      image: "/3d img/4hn.jpg"
    },
    {
      title: "تصميم ثلاثي الأبعاد",
      image: "/3d img/2f.jpg"
    },
    {
      title: "مشروع 3D عالي الجودة",
      image: "/3d img/2D copy.jpg"
    }
  ]

  const projects2D = [
    {
      title: "تصميم احترافي",
      image: "/2dimg/Untitled-2.jpg"
    },
    {
      title: "تصميم شعار متقدم",
      image: "/2dimg/Logo_Mockup_070.jpg"
    },
    {
      title: "تصميم منتج عالي الجودة",
      image: "/2dimg/fggh.jpg"
    },
    {
      title: "تصميم فني متقدم",
      image: "/2dimg/2021_Januari_71.jpg1.jpg"
    }
  ]

  const projectsAI = [
    {
      title: "صورة AI فنية",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop"
    },
    {
      title: "تصميم AI",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop"
    },
    {
      title: "صورة خيالية",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
    },
    {
      title: "عالم افتراضي",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
    }
  ]

  const videos3D = [
    {
      title: "شاي الشاعر",
      video: "/3dviduos/شاي الشاعر تعديل 6.mp4"
    },
    {
      title: "مشروع 3D متقدم",
      video: "/3dviduos/lv_0_٢٠٢٥٠٤٢٣٢١٢٥٢٧.mp4"
    },
    {
      title: "معطر الجو",
      video: "/3dviduos/6معطر الجوتعديل.mp4"
    },
    {
      title: "الكهف مع خلفية",
      video: "/3dviduos/الكهف مع خلفيه .mp4"
    }
  ]

  const videosAI = [
    {
      title: "مشروع كوبيكو 4K",
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    },
    {
      title: "تصميم شاي الشاعر",
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    },
    {
      title: "مشروع مياه عدن",
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    },
    {
      title: "تصميم مياه صنعاء",
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    }
  ]

  const ProjectSection = ({ title, items, isVideo = false }) => (
    <section className="py-16 px-6">
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

                <div className="flex gap-2 mb-8 overflow-x-auto pb-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="group flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800">
                {isVideo ? (
                  <video
                    className="w-64 h-48 md:w-80 md:h-60 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                    muted
                    loop
                    autoPlay
                    onClick={() => setSelectedVideo(item.video)}
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-64 h-48 md:w-80 md:h-60 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => setSelectedImage(item.image)}
                  />
                )}
                </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="p-3 text-accent-blue hover:text-white hover:bg-accent-blue rounded-full transition-all duration-300 group">
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

      <ProjectSection title=" صور 3D " items={projects3D} />
      <ProjectSection title="صور 2D " items={projects2D} />
      <ProjectSection title="صور AI " items={projectsAI} />
      <ProjectSection title=" فيديوهات 3D " items={videos3D} isVideo={true} />
      <ProjectSection title="فيديوهات AI " items={videosAI} isVideo={true} />
    </div>
  )
}

export default Projects

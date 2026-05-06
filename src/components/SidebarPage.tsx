import React from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'

// Generate a low-res preview URL for Supabase-hosted images
const getLowResImage = (url: string, quality: number = 35) => {
  try {
    const trimmed = (url || '').trim()
    const encoded = encodeURI(trimmed)
    const isSupabase = encoded.includes('/storage/v1/object/public/')
    if (!isSupabase) return encoded
    const transformed = encoded.replace('/storage/v1/object/public/', '/storage/v1/render/image/public/')
    const hasQuery = transformed.includes('?')
    return transformed + (hasQuery ? `&quality=${quality}` : `?quality=${quality}`)
  } catch {
    return url
  }
}

// Generate a low-res preview URL for Supabase-hosted videos
const getLowResVideo = (url: string, quality: number = 35) => {
  try {
    const trimmed = (url || '').trim()
    const encoded = encodeURI(trimmed)
    const isSupabase = encoded.includes('/storage/v1/object/public/')
    if (!isSupabase) return encoded
    // For videos, we can use a lower resolution by adding width/height parameters
    const transformed = encoded.replace('/storage/v1/object/public/', '/storage/v1/render/video/public/')
    const hasQuery = transformed.includes('?')
    const baseUrl = transformed + (hasQuery ? '&' : '?')
    return baseUrl + `width=480&height=270&quality=${quality}`
  } catch {
    return url
  }
}

// Trim and normalize media URLs (handles accidental spaces)
const normalizeMediaUrl = (url?: string) => {
  if (!url) return ''
  const trimmed = url.trim()
  // Convert Windows backslashes to forward slashes
  let normalized = trimmed.replace(/\\/g, '/')
  // Remove an accidental leading 'public/' if someone included it
  normalized = normalized.replace(/^public\//i, '')
  // If it's not an absolute URL and doesn't start with '/', make it root-relative
  if (!/^https?:\/\//i.test(normalized) && !normalized.startsWith('/')) {
    normalized = '/' + normalized
  }
  return normalized
}

// Loading spinner component
const LoadingSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
    <div className="relative w-16 h-16">
      {/* Outer ring */}
      <div className="absolute inset-0 border-4 border-gray-600 rounded-full"></div>
      {/* Spinning ring */}
      <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
      {/* Inner dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
)

// Optimized video component with lazy loading
const ThumbVideo = ({ src, onClick, className, onMouseEnter, onMouseLeave }: {
  src: string
  onClick: () => void
  className: string
  onMouseEnter: (e: React.MouseEvent<HTMLVideoElement>) => void
  onMouseLeave: (e: React.MouseEvent<HTMLVideoElement>) => void
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <div className="relative">
      {isLoading && <LoadingSpinner />}
      <video
        ref={videoRef}
        className={className}
        muted
        loop
        playsInline
        preload={isVisible ? "metadata" : "none"}
        autoPlay={false}
        onClick={onClick}
        onLoadedMetadata={(e) => {
          if (isVisible) {
            const video = e.currentTarget as HTMLVideoElement
            try { 
              video.currentTime = 0.05 
              console.log('Video loaded, seeking to 0.05s:', src)
            } catch (error) {
              console.error('Error seeking video:', error)
            }
          }
        }}
        onCanPlay={(e) => {
          if (isVisible) {
            const video = e.currentTarget as HTMLVideoElement
            try { 
              video.currentTime = 0.05 
              console.log('Video can play, seeking to 0.05s:', src)
              setIsLoading(false)
            } catch (error) {
              console.error('Error seeking video on canplay:', error)
            }
          }
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onError={(e) => {
          console.error('Video error:', e, 'for video:', src)
          setIsLoading(false)
        }}
      >
        {isVisible && <source src={getLowResVideo(normalizeMediaUrl(src), 35)} type="video/mp4" />}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white">
          <span>فيديو غير متاح</span>
        </div>
      </video>
    </div>
  )
}

const SidebarPage = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || ''
  const [visibleVideos, setVisibleVideos] = React.useState<Set<number>>(new Set())

  const allProjects = {
    "صور 3D": [
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/0019%20copy%20-%20Copy.jpg "
      },
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/0098%20copy%20-%20Copy.jpg "
      },
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: " https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/0199%20copy%20-%20Copy.jpg"
      },
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/0210%20copy.jpg "
      },
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/0422%20copy.jpg "
      },
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/45TGGGJJ%20-%20Copy.png "
      },
     
      {
        
        title: "تصميم 3D احترافي - مشروع 1",
        image: " https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/g3.png"
      },
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/g5.png "
      },
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/ghy1.png "
      },
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/HGU88.png "
      },
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/nenen2.jpg "
      },
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/ucdgyyntitled.png "
      },
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: " https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/untitl4RTed.png"
      },
      {
        title: "تصميم 3D احترافي - مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/untitle54465d.png "
      },
      {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/untitled.png "
    },
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/untitled21.png "
    },
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: " https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-img/img/untitled9.png"
    }
    ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(1).jpg "
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(1).png "
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(2).jpg "
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: " https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(2).png"
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: " https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(3).jpg"
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(3).png "
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(4).jpg "
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: " https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(4).png"
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(5).jpg "
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(5).png "
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(6).jpg "
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(6).png "
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(7).jpg "
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: " https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(7).png"
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: " https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(8).png"
    } ,
    {
      title: "تصميم 3D احترافي - مشروع 1",
      image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/imge%20(9).png "
    }
   
     
     
     
    ],
    "فيديوهات 3D": [
     
      {
        title: "فيديو 3D - مشروع 1",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(1).mp4"
      },
      {
        title: "فيديو 3D - مشروع 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(2).mp4"
      },
      {
        title: "فيديو 3D - مشروع 3",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(3).mp4"
      },
      {
        title: "فيديو 3D - مشروع 4",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(4).mp4"
      },
      {
        title: "فيديو 3D - مشروع 5",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(5).mp4"
      },
      {
        title: "فيديو 3D - مشروع 6",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(6).mp4"
      },
      {
        title: "فيديو 3D - مشروع 7",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(7).mp4"
      },
      {
        title: "فيديو 3D - مشروع 8",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(8).mp4"
      },
      {
        title: "فيديو 3D - مشروع 9",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(9).mp4"
      },
      {
        title: "فيديو 3D - مشروع 10",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(10).mp4"
      },
      {
        title: "فيديو 3D - مشروع 11",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(11).mp4"
      },
      {
        title: "فيديو 3D - مشروع 12",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(12).mp4"
      },
      {
        title: "فيديو 3D - مشروع 13",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid3d%20(13).mp4"
      }
     
    ],
    "صور 2D": [
      {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (1).jpg"
      },    {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (2).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (3).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (4).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (5).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (6).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (7).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (8).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (9).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (10).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (11).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (12).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (13).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (14).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (15).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (16).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (17).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (18).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (19).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (20).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (21).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (22).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (23).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (24).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (25).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (26).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (27).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (28).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (29).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (30).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (31).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (32).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (33).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (34).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (35).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (36).jpg"
      },  {
        title: "تصميم 2D - مشروع 1",
        image: "/2d/m (37).jpg"
      },
      
    ],
         "صور AI": [
       {
         title: "صورة AI - مشروع 1",
            image: "/ai/daf938cc50cbce37001f52a238882fbb.jpg"
       },
       {
         title: "صورة AI - مشروع 2",
            image: "/ai/FB_IMG_1751754764977.jpg"
       },
       {
         title: "صورة AI - مشروع 3",
            image: "/ai/Image_fx (29).jpg"
       },
       {
         title: "صورة AI - مشروع 4",
            image: "/ai/Image_fx (33).jpg"
       },
       {
         title: "صورة AI - مشروع 5",
            image: "/ai/Image_fx (37).jpg"
       },
       {
         title: "صورة AI - مشروع 6",
            image: "/ai/Image_fx (42).jpg"
       },
       {
         title: "صورة AI - مشروع 7",
            image: "/ai/image_fx_ - 2024-08-18T025740.387.jpg"
       },
       {
         title: "صورة AI - مشروع 8",
            image: "/ai/image_fx_ - 2024-08-18T035641.750.jpg"
       },
       {
        title: "صورة AI - مشروع 2",
            image: "/ai/image_fx_ - 2024-08-18T040021.549.jpg"
      },
      {
        title: "صورة AI - مشروع 3",
            image: "/ai/image_fx_ (2).jpg"
      },
      {
        title: "صورة AI - مشروع 4",
            image: "/ai/image_fx_ (5).jpg"
      },
   
      {
        title: "صورة AI - مشروع 6",
            image: "/ai/image_fx_ (13).jpg"
      },
      {
        title: "صورة AI - مشروع 7",
            image: "/ai/image_fx_ (14).jpg"
      },
      {
        title: "صورة AI - مشروع 8",
            image: "/ai/image_fx_ (17).jpg"
     }
     ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/image_fx_ (18).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/image_fx_ (23).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/image_fx_ (31).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/image_fx_ (46).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/image_fx_ (47).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/image_fx_ (65).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/image_fx_ (69).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/image_fx_ (96).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/image_fx_ (98).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/IMG_20240816_233233_450.webp"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/IMG_20240818_161045_611.jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/Whisk_1a60bf7e42.jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/Whisk_4e3fdc242d.jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/Whisk_4178aef133.jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
           image: "/ai/Whisk_b2c13beff7.jpg"
      }
       
     ],
    "فيديوهات AI": [
      {
        title: "فيديو AI - مشروع كوبيكو 1",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-vid/A_cinematic_closeup_202508040627%20(1).mp4"
      },
      {
        title: "فيديو AI - تصميم شاي 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-vid/A_graceful_woman_202508040656.mp4"
      },
      {
        title: "فيديو AI - مشروع 3 عدن",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-vid/Inside_a_traditional_202505250626.mp4"
      },
      {
        title: "فيديو AI - تصميم 4 صنعاء",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-vid/Inside_a_traditional_202505250635%20(1).mp4"
      },
     
    ]
  }

    const [selectedMedia, setSelectedMedia] = React.useState<string | null>(null)
  const projects = allProjects[category as keyof typeof allProjects] || []

  // Debug: Log the category and projects
  console.log('Category:', category)
  console.log('Projects:', projects)
  console.log('Available categories:', Object.keys(allProjects))

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Header */}
      <div className="sticky top-0 bg-dark-bg/95 backdrop-blur-sm border-b border-accent-blue/20 p-6 z-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-accent-blue">
            {category || 'جميع الأعمال'} 
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-3 px-6 py-4 text-accent-blue hover:text-white  hover:scale-105 rounded-full transition-all duration-300 group font-semibold text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>العودة</span>
            </button>
          </div>
        </div>
      </div>

             {/* Content */}
       <div className="p-6">
         {projects.length === 0 ? (
           <div className="text-center py-20">
             <h3 className="text-2xl font-bold text-accent-blue mb-4">
               لا توجد مشاريع في هذا القسم
             </h3>
             <p className="text-gray-400 mb-6">
               القسم المحدد: {category || 'غير محدد'}
             </p>
             <button
               onClick={() => window.location.href = '/'}
               className="px-6 py-3 bg-accent-blue text-white rounded-full hover:bg-blue-600 transition-all duration-300"
             >
               العودة للصفحة الرئيسية
             </button>
           </div>
         ) : (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedMedia(normalizeMediaUrl(project.video || project.image))}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800">
                {project.video ? (
                  <ThumbVideo
                    src={project.video}
                    className="w-full h-60 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                    onClick={() => setSelectedMedia(normalizeMediaUrl(project.video || project.image))}
                    onMouseEnter={(e) => {
                      const video = e.target as HTMLVideoElement
                      video.currentTime = 0
                      video.play()
                    }}
                    onMouseLeave={(e) => {
                      const video = e.target as HTMLVideoElement
                      video.pause()
                      video.currentTime = 0
                    }}
                  />
                ) : (
                  <img
                    src={getLowResImage(normalizeMediaUrl(project.image))}
                    alt=""
                    loading="lazy"
                    className="w-full h-60 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 pointer-events-none" />
              </div>
                         </motion.div>
           ))}
           </div>
         )}
       </div>

      {/* Media Modal */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-60 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative z-10 max-w-4xl max-h-[80vh]"
          >
            {selectedMedia.endsWith('.mp4') ? (
              <video
                src={normalizeMediaUrl(selectedMedia)}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              >
                <source src={normalizeMediaUrl(selectedMedia)} type="video/mp4" />
                <p className="text-white text-center p-4">متصفحك لا يدعم تشغيل الفيديو</p>
              </video>
            ) : (
              <img
                src={normalizeMediaUrl(selectedMedia)}
                alt="صورة مكبرة"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default SidebarPage

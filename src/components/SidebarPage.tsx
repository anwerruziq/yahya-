import React from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'

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

// Trim and normalize media URLs (handles accidental spaces)
const normalizeMediaUrl = (url?: string) => {
  if (!url) return ''
  return url.trim()
}

const SidebarPage = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || ''

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
        title: "فيديو 3D - مشروع 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid/vid3d%20(10).mp4"
      },
      {
        title: "فيديو 3D - مشروع 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid/vid3d%20(11).mp4"
      },
      {
        title: "فيديو 3D - مشروع 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid/vid3d%20(12)%20(1).mp4"
      },
      {
        title: "فيديو 3D - مشروع 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid/vid3d%20(13).mp4"
      },
      {
        title: "فيديو 3D - مشروع 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid/vid3d%20(2).mp4"
      },
      {
        title: "فيديو 3D - مشروع 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid/vid3d%20(3).mp4"
      },
      {
        title: "فيديو 3D - مشروع 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid/vid3d%20(4).mp4"
      },
      {
        title: "فيديو 3D - مشروع 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid/vid3d%20(5).mp4"
      },
      {
        title: "فيديو 3D - مشروع 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid/vid3d%20(7).mp4"
      },
      {
        title: "فيديو 3D - مشروع 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid/vid3d%20(8).mp4"
      },
      {
        title: "فيديو 3D - مشروع 2",
        video: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/3d-vid/vid/vid3d%20(9).mp4"
      }
     
    ],
    "صور 2D": [
      {
        title: "تصميم 2D - مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/u7.jpg"
      },
      {
        title: "تصميم 2D - مشروع 2",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/IMG-20230328-WA0001.jpg"
      }, {
        title: "تصميم 2D - مشروع 3",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(9).jpg"
      }, {
        title: "تصميم 2D - مشروع 4",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(8).jpg"
      }, {
        title: "تصميم 2D - مشروع 5",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(7).jpg"
      }, {
        title: "تصميم 2D - مشروع 6",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(6).jpg"
      }, {
        title: "تصميم 2D - مشروع 7",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(5).jpg"
      }, {
        title: "تصميم 2D - مشروع 8",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(4).jpg"
      }, {
        title: "تصميم 2D - مشروع 9",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(3).jpg"
      }, {
        title: "تصميم 2D - مشروع 10",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(2).jpg"
      }, {
        title: "تصميم 2D - مشروع 11",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(17).jpg"
      },
      {
        title: "تصميم 2D - مشروع 12",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(16).jpg"
      },
      {
        title: "تصميم 2D - مشروع 13",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(15).jpg"
      },
      {
        title: "تصميم 2D - مشروع 14",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(14).jpg"
      },
      {
        title: "تصميم 2D - مشروع 15",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(13).jpg"
      },
      {
        title: "تصميم 2D - مشروع 16",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(12).jpg"
      },
      {
        title: "تصميم 2D - مشروع 17",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(11).jpg"
      },
      {
        title: "تصميم 2D - مشروع 18",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(10).jpg"
      },
      {
        title: "تصميم 2D - مشروع 19",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/image2d%20(1).jpg"
      },
      {
        title: "تصميم 2D - مشروع 20",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/hqpn.jpg"
      },
      {
        title: "تصميم 2D - 2مشروع 1",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/fdt.jpg"
      },
      {
        title: "تصميم 2D - مشروع 22",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/ett.jpg"
      },
      {
        title: "تصميم 2D - مشروع 23",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/ddg.jpg"
      },
      {
        title: "تصميم 2D - مشروع 24",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/danci9.jpg"
      },
      
      {
        title: "تصميم 2D - مشروع 25",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/danci8.jpg"
      },
       {
        title: "تصميم 2D - مشروع 26",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/danci6.jpg"
      },
      {
        title: "تصميم 2D - مشروع 26",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/danci5.jpg"
      },
      {
        title: "تصميم 2D - مشروع 27",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/danci4.jpg"
      },
      {
        title: "تصميم 2D - مشروع 28",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/danci1.jpg"
      },
      {
        title: "تصميم 2D - مشروع 29",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/danc10.jpg"
      },
      
      {
        title: "تصميم 2D - مشروع 30",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/cocc.jpg"
      },
      {
        title: "تصميم 2D - مشروع 31",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/342.jpg"
      },
      {
        title: "تصميم 2D - مشروع32",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/2ngm%20copy.jpg"
      },
      {
        title: "تصميم 2D - مشروع 33",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/2d-img/img%202/2.jpg"
      },
    ],
         "صور AI": [
       {
         title: "صورة AI - مشروع 1",
         image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_storyboard4ee7e5162ea54eb5a1cc689d.png"
       },
       {
         title: "صورة AI - مشروع 2",
         image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_exmdkzmwm3.jpg"
       },
       {
         title: "صورة AI - مشروع 3",
         image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_bedb4f5e50.jpg"
       },
       {
         title: "صورة AI - مشروع 4",
         image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_b2c13beff7.jpg"
       },
       {
         title: "صورة AI - مشروع 5",
         image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_98a3dde07e.jpg"
       },
       {
         title: "صورة AI - مشروع 6",
         image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_4e64a435d2.jpg"
       },
       {
         title: "صورة AI - مشروع 7",
         image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_4e3fdc242d.jpg"
       },
       {
         title: "صورة AI - مشروع 8",
         image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_4178aef133.jpg"
       },
       {
        title: "صورة AI - مشروع 2",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_3a6fcab51c.jpg"
      },
      {
        title: "صورة AI - مشروع 3",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_34b2a61c61.jpg"
      },
      {
        title: "صورة AI - مشروع 4",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_253cf6753e.jpg"
      },
      {
        title: "صورة AI - مشروع 5",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_113440dc8f.jpg"
      },
      {
        title: "صورة AI - مشروع 6",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_09ed53c42f.jpg"
      },
      {
        title: "صورة AI - مشروع 7",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_04cf5eb107.jpg"
      },
      {
        title: "صورة AI - مشروع 8",
        image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img/Whisk_03f3ed2ba9.jpg"
     }
     ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(1).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(1).webp"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(10).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(12).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(13).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(14).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(16).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(19).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(2)%20(1).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(23).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(24).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(25).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(3).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(8).jpg"
     } ,
     {
       title: "صورة AI - مشروع 1",
       image: "https://vzezgikywxmxmntbxczg.supabase.co/storage/v1/object/public/ai-img/img2/img%20(9).jpg"
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
                  <video
                    className="w-full h-60 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    autoPlay={false}
                    onLoadedMetadata={(e) => {
                      const video = e.currentTarget as HTMLVideoElement
                      try { video.currentTime = 0.05 } catch {}
                    }}
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
                  >
                    <source src={normalizeMediaUrl(project.video)} type="video/mp4" />
                  </video>
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

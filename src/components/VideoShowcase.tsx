import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, ChevronLeft, ChevronRight, Youtube, Pause, PauseCircle, PlayCircle } from 'lucide-react'
import { PillBadge } from './ui/PillBadge'

// Add your YouTube video links here
const videos = [
  {
    id: 'video1',
    videoId: '8U5l0u4QZPk', 
    title: 'SH MW01FS Sit-Stand Mobile Workstation Presentation Video',
    thumbnail: 'https://img.youtube.com/vi/8U5l0u4QZPk/maxresdefault.jpg',
    description: 'Professional TV wall mounting service in Dubai'
  },
  {
    id: 'video2',
    videoId: '_NK4GSZseck',
    title: 'SH MW01FS Sit-Stand Mobile Workstation Installation Animation',
    thumbnail: 'https://img.youtube.com/vi/_NK4GSZseck/maxresdefault.jpg',
    description: 'Experience smooth motorized movement'
  },
  {
    id: 'video3',
    videoId: 'kJce5c7EGW0',
    title: 'SH 449P Extra Long Arm-Motion TV Wall Mount Presentation Animation',
    thumbnail: 'https://img.youtube.com/vi/kJce5c7EGW0/maxresdefault.jpg',
    description: 'Large format display installation for retail'
  },
  {
    id: 'video4',
    videoId: '_5M8EwKIKWg',
    title: 'SH32 T01 Single Screen Freestanding Pro Gaming Monitor Arm Stand With Headphone Holder Installation',
    thumbnail: 'https://img.youtube.com/vi/_5M8EwKIKWg/maxresdefault.jpg',
    description: 'Complete gaming desk and mount setup'
  },
  {
    id: 'video5',
    videoId: '_5felLTeZEU',
    title: 'SH PAD06 Height Adjustable Universal Anti-Theft Tablet Floor Stand Installation Animation',
    thumbnail: 'https://img.youtube.com/vi/_5felLTeZEU/maxresdefault.jpg',
    description: 'Ergonomic monitor mounts for office'
  },
  {
    id: 'video6',
    videoId: 'CjBvXoujH4s',
    title: 'SVW01 46T Landscape/Portrait Pop-Out Video Wall Mount Installation Animation',
    thumbnail: 'https://img.youtube.com/vi/CjBvXoujH4s/maxresdefault.jpg',
    description: 'Space-saving ceiling mount solutions'
  }
]

// Duplicate videos for infinite scroll effect
const duplicatedVideos = [...videos, ...videos, ...videos]

export function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const scrollContainerRef = useRef(null)
  const autoScrollIntervalRef = useRef(null)

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.children[0]?.offsetWidth || 320
      const gap = 20 // gap-5 = 20px
      const scrollPosition = index * (cardWidth + gap)
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }

  const nextVideo = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1
      // Reset to middle section for infinite feel
      if (newIndex >= videos.length * 2) {
        const resetIndex = videos.length
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current
          const cardWidth = container.children[0]?.offsetWidth || 320
          const gap = 20
          const scrollPosition = resetIndex * (cardWidth + gap)
          container.scrollTo({
            left: scrollPosition,
            behavior: 'auto'
          })
        }
        return resetIndex + 1
      }
      return newIndex
    })
  }

  const prevVideo = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1
      if (newIndex < videos.length) {
        const resetIndex = videos.length * 2 - 1
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current
          const cardWidth = container.children[0]?.offsetWidth || 320
          const gap = 20
          const scrollPosition = resetIndex * (cardWidth + gap)
          container.scrollTo({
            left: scrollPosition,
            behavior: 'auto'
          })
        }
        return resetIndex - 1
      }
      return newIndex
    })
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollIntervalRef.current = setInterval(() => {
        nextVideo()
      }, 4000) // Change video every 4 seconds
    }
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [isAutoScrolling])

  // Update scroll position when index changes
  useEffect(() => {
    scrollToIndex(currentIndex)
  }, [currentIndex])

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling)
  }

  const openVideo = (videoId) => {
    setIsAutoScrolling(false)
    setSelectedVideo(videoId)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
    setIsAutoScrolling(true)
  }

  // Get current video for display
  const currentVideo = duplicatedVideos[currentIndex]

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-navy to-[#1a2c4e] relative overflow-hidden">
      {/* ambient glow */}
      <motion.div
        aria-hidden
        className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-pink-accent/15 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-8">
          <PillBadge text="Watch Our Work" className="mb-2" />
          <h2 className="text-2xl md:text-3xl font-bold ">
            See <span className="text-pink-accent">Skill Tech</span> in Action
          </h2>
          <p className=" mt-2 max-w-2xl text-sm">
            Browse our latest installations, product demos, and expert mounting techniques
          </p>
        </div>

        {/* Main Featured Video - Full Width */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <motion.div
            key={currentVideo?.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => openVideo(currentVideo?.videoId)}
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
          >
            <img
              src={currentVideo?.thumbnail}
              alt={currentVideo?.title}
              className="w-full h-[300px] md:h-[450px] object-cover"
              onError={(e) => {
                e.target.src = `https://img.youtube.com/vi/${currentVideo?.videoId}/hqdefault.jpg`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                {currentVideo?.title}
              </h3>
              <p className="text-gray-200 text-sm line-clamp-2">
                {currentVideo?.description}
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-pink-accent rounded-full flex items-center justify-center shadow-2xl">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-black/60 px-3 py-1.5 rounded-full text-xs text-white flex items-center gap-1">
              <Youtube className="w-3 h-3" />
              YouTube
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={() => { prevVideo(); setIsAutoScrolling(false); setTimeout(() => setIsAutoScrolling(true), 5000); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-pink-accent transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => { nextVideo(); setIsAutoScrolling(false); setTimeout(() => setIsAutoScrolling(true), 5000); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-pink-accent transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Auto-scroll Toggle & Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/50 backdrop-blur px-4 py-2 rounded-full">
            <button
              onClick={toggleAutoScroll}
              className="text-white text-xs flex items-center gap-1 hover:text-pink-accent transition-colors"
            >
              {isAutoScrolling ? (
                <><PauseCircle/> </>
              ) : (
                <><PlayCircle/></>
              )}
            </button>
            <div className="flex gap-1">
              {videos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx + videos.length)
                    setIsAutoScrolling(false)
                    setTimeout(() => setIsAutoScrolling(true), 5000)
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    (currentIndex % videos.length) === idx 
                      ? 'w-6 bg-pink-accent' 
                      : 'w-1.5 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="relative">
          <div className="flex gap-3 justify-center flex-wrap">
            {videos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => {
                  setCurrentIndex(idx + videos.length)
                  setIsAutoScrolling(false)
                  setTimeout(() => setIsAutoScrolling(true), 5000)
                }}
                className={`relative w-24 md:w-32 rounded-lg overflow-hidden cursor-pointer transition-all ${
                  (currentIndex % videos.length) === idx 
                    ? 'ring-2 ring-pink-accent scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-14 md:h-20 object-cover"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
                  }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View More Videos Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@skilltech710/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full transition-colors"
          >
            <Youtube className="w-5 h-5" />
            View All Videos on YouTube
          </a>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <button
              aria-label="Close video"
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-pink-accent transition-colors z-20"
              onClick={closeVideo}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
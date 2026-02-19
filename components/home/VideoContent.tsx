'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPause } from 'react-icons/fa'

export default function VideoContent() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="bg-gray-50 section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Video - First on mobile, Left on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer" onClick={togglePlay}>
            <video
              ref={videoRef}
              src="/videos/ad-video.webm"
              className="w-full h-full object-cover"
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className={`bg-black/50 rounded-full p-6 transition-opacity duration-300 ${
                isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              }`}>
                {isPlaying ? (
                  <FaPause className="text-white text-4xl" />
                ) : (
                  <FaPlay className="text-white text-4xl ml-1" />
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content - Second on mobile, Right on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Crafting Quality Since Years
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              At Real Creators, we combine traditional craftsmanship with modern manufacturing techniques to produce premium jute bags that stand the test of time.
            </p>
            <p>
              Our state-of-the-art facility ensures consistent quality, while our experienced team brings creativity and precision to every custom order.
            </p>
            <p>
              From concept to delivery, we work closely with our clients to bring their vision to life with eco-friendly, sustainable packaging solutions.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-primary-600">5+</div>
              <div className="text-sm text-gray-600 mt-1">Years Experience</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-primary-600">50K+</div>
              <div className="text-sm text-gray-600 mt-1">Bags Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

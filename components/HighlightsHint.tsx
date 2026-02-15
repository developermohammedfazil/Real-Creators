'use client'

import Link from 'next/link'
import { FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function HighlightsHint() {
  return (
    <Link href="/#highlights">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-24 right-6 z-40 group"
      >
        <div className="relative">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-110 cursor-pointer">
            <FaStar size={24} className="animate-pulse" />
          </div>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            View Our Highlights ✨
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

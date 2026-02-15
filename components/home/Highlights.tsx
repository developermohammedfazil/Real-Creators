'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { HiX } from 'react-icons/hi'

const highlights = [
  { 
    id: 1, 
    title: 'Custom Prints', 
    images: [
      '/images/highlights/1.webp',
      '/images/highlights/2.webp',
      '/images/highlights/3.webp',
      '/images/highlights/4.webp',
      '/images/highlights/5.webp',
      '/images/highlights/jute1.webp',
      '/images/highlights/jute2.webp',
      '/images/highlights/jute3.webp',
      '/images/highlights/jute4.webp',
      '/images/highlights/jute5.webp'
    ]
  },
  { 
    id: 2, 
    title: 'Eco Friendly', 
    images: [
      '/images/highlights/eco-1.webp',
      '/images/highlights/eco-2.webp',
      '/images/highlights/eco-3.webp',
      '/images/highlights/eco-4.webp'
    ]
  },
  { 
    id: 3, 
    title: 'Premium Quality', 
    images: [
      '/images/highlights/pq-1.webp',
      '/images/highlights/pq-2.webp',
      '/images/highlights/pq-3.webp',
      '/images/highlights/pq-4.webp'
    ]
  },
  { 
    id: 4, 
    title: 'Client Reviews', 
    images: [
      '/images/highlights/rv-1.webp',
      '/images/highlights/rv-2.webp'
    ]
  },
  { id: 5, title: 'Manufacturing', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=500&fit=crop&q=75' },
  { id: 6, title: 'Packaging', image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=300&h=500&fit=crop&q=75' },
]

export default function Highlights() {
  const [selectedHighlight, setSelectedHighlight] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <section id="highlights" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Highlights
          </h2>
          <p className="text-gray-600 text-lg">
            Discover what makes us special
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide md:flex md:justify-center md:flex-wrap md:max-w-4xl md:mx-auto md:overflow-visible md:gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className={`flex-shrink-0 ${index >= 3 ? 'md:block' : 'block'}`}
              >
                <button
                  onClick={() => {
                    setSelectedHighlight(index)
                    setCurrentImageIndex(0)
                  }}
                  className="group flex flex-col items-center gap-4 focus:outline-none"
                >
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-1 bg-gradient-to-r from-pink-400 via-red-500 to-purple-500 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:scale-110">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                      <Image
                        src={highlight.images ? highlight.images[0] : highlight.image}
                        alt={highlight.title}
                        fill
                        className="object-cover rounded-full"
                        sizes="112px"
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center w-24 md:w-28">
                    {highlight.title}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedHighlight !== null && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={() => setSelectedHighlight(null)}
        >
          <button
            onClick={() => setSelectedHighlight(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Close"
          >
            <HiX size={32} />
          </button>

          <CustomPrintsModal 
            highlight={highlights[selectedHighlight]} 
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

function CustomPrintsModal({ highlight, currentImageIndex, setCurrentImageIndex }: {
  highlight: any
  currentImageIndex: number
  setCurrentImageIndex: (value: number | ((prev: number) => number)) => void
}) {
  const nextImage = useCallback(() => {
    if (highlight?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % highlight.images.length)
    }
  }, [highlight, setCurrentImageIndex])

  const prevImage = useCallback(() => {
    if (highlight?.images) {
      setCurrentImageIndex((prev) => prev > 0 ? prev - 1 : highlight.images.length - 1)
    }
  }, [highlight, setCurrentImageIndex])

  useEffect(() => {
    if (!highlight?.images) return
    
    const interval = setInterval(nextImage, 3000)
    return () => clearInterval(interval)
  }, [highlight, nextImage])

  if (!highlight?.images) {
    return (
      <div
        className="relative w-full max-w-md h-[80vh] md:h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={highlight?.image || ''}
          alt={highlight?.title || ''}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 448px"
        />
      </div>
    )
  }

  return (
    <div
      className="relative w-full max-w-md h-[80vh] md:h-[85vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={highlight.images[currentImageIndex]}
        alt={`${highlight.title} ${currentImageIndex + 1}`}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 448px"
        priority
      />
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation()
            prevImage()
          }}
          className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full backdrop-blur-sm transition-all duration-150"
        >
          Previous
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            nextImage()
          }}
          className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full backdrop-blur-sm transition-all duration-150"
        >
          Next
        </button>
      </div>
      
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentImageIndex + 1} / {highlight.images.length}
      </div>
    </div>
  )
}
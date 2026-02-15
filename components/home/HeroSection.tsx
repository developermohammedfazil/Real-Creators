'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'

// Import only required Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const heroSlides = [
  {
    image: '/images/hero/slide1.webp',
    alt: 'Premium Jute Bags Collection',
  },
  {
    image: '/images/hero/slide2.webp',
    alt: 'Custom Printed Jute Bags',
  },
  {
    image: '/images/hero/slide3.webp',
    alt: 'Eco-Friendly Packaging Solutions',
  },
  {
    image: '/images/hero/slide4.webp',
    alt: 'Bulk Jute Bag Manufacturing',
  },
  {
    image: '/images/hero/slide5.webp',
    alt: 'Real Creators Jute Products',
  },
]

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/70',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
        }}
        loop={true}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Centered Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Real Creators
          </h1>
          <p className="text-white text-lg md:text-2xl mb-8 drop-shadow-md">
            Premium eco-friendly jute bags with custom printing solutions for your brand
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-2xl hover:shadow-primary-600/50 hover:scale-105 active:scale-95"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 30px !important;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px !important;
        }
      `}</style>
    </section>
  )
}

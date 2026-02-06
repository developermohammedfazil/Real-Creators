import dynamic from 'next/dynamic'
import HeroSection from '@/components/home/HeroSection'

// Lazy load components below the fold
const ProductCategories = dynamic(() => import('@/components/home/ProductCategories'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
})
const VideoContent = dynamic(() => import('@/components/home/VideoContent'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
})
const Highlights = dynamic(() => import('@/components/home/Highlights'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
})
const TeamTrust = dynamic(() => import('@/components/home/TeamTrust'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
})

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCategories />
      <VideoContent />
      <Highlights />
      <TeamTrust />
    </>
  )
}

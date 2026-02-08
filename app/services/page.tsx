import { Suspense } from 'react'
import ProductsClient from '@/components/services/ProductsClient'

export const metadata = {
  title: 'Our Services - Jute Bags Collection | Real Creators',
  description: 'Browse our extensive collection of eco-friendly jute bags. Custom printing and bulk orders available. Filter by category, color, size, and price.',
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-xl">Loading...</div></div>}>
      <ProductsClient />
    </Suspense>
  )
}

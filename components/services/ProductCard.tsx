'use client'

import Image from 'next/image'
import { Product } from '@/lib/products'
import { motion } from 'framer-motion'

interface ProductCardProps {
  product: Product
  onViewDetails: () => void
  onAddToReference: () => void
  isInReference: boolean
}

export default function ProductCard({ product, onViewDetails, onAddToReference, isInReference }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-64 cursor-pointer group" onClick={onViewDetails}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        
        <div className="flex items-center justify-between mb-6">
          <div className="text-center w-full">
            <div className="text-xs text-gray-500 mb-1">Customized</div>
            <div className="text-sm font-medium text-gray-700">Colors, Design & Size</div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onViewDetails}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-md"
          >
            View Details
          </button>
          <button
            onClick={onAddToReference}
            disabled={isInReference}
            className={`flex-1 font-semibold py-3 px-4 rounded-lg transition-all duration-200 ${
              isInReference
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700 text-white hover:shadow-lg'
            }`}
          >
            {isInReference ? 'Added' : 'Add to Card'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

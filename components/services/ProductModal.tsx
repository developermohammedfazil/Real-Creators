'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Product } from '@/lib/products'
import { HiX } from 'react-icons/hi'
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'

interface ProductModalProps {
  product: Product
  onClose: () => void
  onAddToReference: () => void
  isInReference: boolean
}

export default function ProductModal({ product, onClose, onAddToReference, isInReference }: ProductModalProps) {
  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${product.name} (${product.id}). Price: ₹${product.price}`
    window.open(`https://wa.me/917358906378?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleEnquiry = () => {
    window.location.href = `/contact?product=${product.id}`
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={onAddToReference}
                disabled={isInReference}
                className={`font-semibold py-2 px-6 rounded-lg transition-colors ${
                  isInReference
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                }`}
              >
                {isInReference ? 'Added' : 'Add to Card'}
              </button>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <HiX size={28} />
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Details */}
              <div>
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Premium quality jute bag designed for durability and style. Perfect for retail, promotional events, and everyday use. Fully customizable with your brand logo and design.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Customization Options</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-primary-600 font-semibold mb-1">Colors</div>
                      <div className="text-sm text-gray-600">Customized</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-primary-600 font-semibold mb-1">Design</div>
                      <div className="text-sm text-gray-600">Customized</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-primary-600 font-semibold mb-1">Size</div>
                      <div className="text-sm text-gray-600">Customized</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8 bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span>High-strength jute fabric for long-lasting durability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span>100% eco-friendly and biodegradable material</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span>Custom printing available for branding and logos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span>Suitable for retail, gifting, and promotional use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span>Bulk orders available with competitive pricing</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    <FaWhatsapp size={20} />
                    WhatsApp Enquiry
                  </button>
                  
                  <button
                    onClick={() => window.location.href = 'tel:+917358906378'}
                    className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    <FaPhone size={16} />
                    Call Now
                  </button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Product ID: {product.id}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

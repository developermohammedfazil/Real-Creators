'use client'

import { useState } from 'react'
import { Product } from '@/lib/products'
import { FaWhatsapp, FaTimes, FaShoppingCart } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

interface ReferenceCartProps {
  products: Product[]
  onRemove: (productId: string) => void
}

export default function ReferenceCart({ products, onRemove }: ReferenceCartProps) {
  const [isOpen, setIsOpen] = useState(false)

  const sendToWhatsApp = () => {
    const productList = products.map((p, i) => 
      `${i + 1}. ${p.name} (${p.id}) - ₹${p.price}`
    ).join('%0A')
    
    const message = `Hi, I'm interested in the following products:%0A%0A${productList}%0A%0APlease provide more details.`
    window.open(`https://wa.me/917358906378?text=${message}`, '_blank')
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-2xl z-[60] flex items-center gap-2"
      >
        <FaShoppingCart size={24} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
          {products.length}
        </span>
      </motion.button>

      {/* Cart Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[55]"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[60] flex flex-col"
            >
              {/* Header */}
              <div className="bg-primary-600 text-white p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Reference Card</h2>
                  <p className="text-sm text-primary-100">{products.length} products selected</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Products List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-50 rounded-lg p-4 flex justify-between items-start"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600">ID: {product.id}</p>
                      <p className="text-lg font-bold text-primary-600 mt-1">₹{product.price}</p>
                    </div>
                    <button
                      onClick={() => onRemove(product.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      <FaTimes size={20} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t p-6 space-y-3">
                <button
                  onClick={sendToWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition-colors"
                >
                  <FaWhatsapp size={22} />
                  Send to WhatsApp
                </button>
                <p className="text-xs text-center text-gray-500">
                  This will send your selected products to our WhatsApp for quotation
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

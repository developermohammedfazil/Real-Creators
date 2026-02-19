'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { products, categories, Product } from '@/lib/products'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import ReferenceCart from './ReferenceCart'
import { FaWhatsapp, FaFilter } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'

export default function ProductsClient() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [referenceProducts, setReferenceProducts] = useState<any[]>([])
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })

  const addToReference = (product: Product) => {
    if (!referenceProducts.find(p => p.id === product.id)) {
      setReferenceProducts([...referenceProducts, product])
    }
  }

  const removeFromReference = (productId: string) => {
    setReferenceProducts(referenceProducts.filter(p => p.id !== productId))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div 
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: 'url(/images/service-banner.webp)' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-lg">
              <span className="font-semibold">Customized prints and clothing services available</span>
            </p>
            <a
              href="https://wa.me/c/917358906378"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-all w-fit"
            >
              <FaWhatsapp size={20} />
              View Catalog
            </a>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-base"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            <FaFilter size={16} />
            <span className="hidden xs:inline">Filters</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Filters</h2>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-primary-600 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Modal */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setShowFilters(false)}>
              <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button onClick={() => setShowFilters(false)} className="text-gray-500 hover:text-gray-700">
                      <HiX size={24} />
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.id)
                            setShowFilters(false)
                          }}
                          className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                            selectedCategory === cat.id
                              ? 'bg-primary-600 text-white'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <main className="flex-1">
            <div className="mb-4 text-gray-600">
              Showing {filteredProducts.length} products
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">No products found matching your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={() => setSelectedProduct(product)}
                    onAddToReference={() => addToReference(product)}
                    isInReference={referenceProducts.some(p => p.id === product.id)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToReference={() => addToReference(selectedProduct)}
          isInReference={referenceProducts.some(p => p.id === selectedProduct.id)}
        />
      )}

      {/* Reference Cart */}
      {referenceProducts.length > 0 && (
        <ReferenceCart
          products={referenceProducts}
          onRemove={removeFromReference}
        />
      )}
    </div>
  )
}

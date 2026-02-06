'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { products, categories } from '@/lib/products'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import ReferenceCart from './ReferenceCart'
import { FaWhatsapp } from 'react-icons/fa'

export default function ProductsClient() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [referenceProducts, setReferenceProducts] = useState<any[]>([])

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
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1920&h=600&fit=crop&q=80)' }}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-lg"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
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

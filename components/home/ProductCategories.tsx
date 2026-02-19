'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  {
    id: 'grocery-bags',
    name: 'Grocery Jute Bags',
    image: '/images/products/grocery-bag.webp',
    description: 'Durable bags for grocery shopping',
  },
  {
    id: 'gift-bags',
    name: 'Jute Gift Bags',
    image: '/images/products/gift-bag.webp',
    description: 'Premium packaging for special occasions',
  },
  {
    id: 'promotional-bags',
    name: 'Promotional Jute Bags',
    image: '/images/products/promotional-bags.webp',
    description: 'Custom branded bags for marketing',
  },
  {
    id: 'custom-bags',
    name: 'Custom Printed Jute Bags',
    image: '/images/products/customize-jute-bags.webp',
    description: 'Fully customizable to your needs',
  },
  {
    id: 'shopping-bags',
    name: 'Jute Shopping Bags',
    image: '/images/categories/jutebag-1.webp',
    description: 'Eco-friendly shopping bags for daily use',
  },
  {
    id: 'tamboolam-bags',
    name: 'Tamboolam Bags',
    image: '/images/products/tamboolam-bags.webp',
    description: 'Traditional bags for weddings and ceremonies',
  },
]

export default function ProductCategories() {
  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Product Categories
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our wide range of eco-friendly jute bags designed for every need
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/services?category=${category.id}`}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="relative h-64 w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    priority={index < 3}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-200">{category.description}</p>
                </div>

                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Products →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export interface Product {
  id: string
  name: string
  category: string
  price: number
  colors: string[]
  sizes: string[]
  image: string
  description: string
}

export const products: Product[] = [
  {
    id: 'rjgb-001',
    name: 'Grocery Jute Bags',
    category: 'grocery-bags',
    price: 35,
    colors: ['Natural', 'Brown'],
    sizes: ['Large'],
    image: '/images/products/grocery-bag.webp',
    description: 'Strong reusable jute grocery bags for shopping',
  },
  {
    id: 'jgb-001',
    name: 'Jute Gift Bags',
    category: 'gift-bags',
    price: 35,
    colors: ['Natural', 'Brown'],
    sizes: ['Small', 'Medium'],
    image: '/images/products/gift-bag.webp',
    description: 'Elegant jute gift bags for special occasions',
  },
  {
    id: 'jcb-001',
    name: 'Jute Cosmetic Bags',
    category: 'cosmetic-bags',
    price: 25,
    colors: ['Natural', 'Brown', 'Black'],
    sizes: ['Small'],
    image: '/images/products/jute-cosmetic-bag.webp',
    description: 'Compact jute cosmetic bags for travel and daily use',
  },
  {
    id: 'pjb-001',
    name: 'Promotional Jute Bags',
    category: 'promotional-bags',
    price: 30,
    colors: ['Natural', 'Brown', 'Black'],
    sizes: ['Small', 'Medium'],
    image: '/images/products/promotional-bags.webp',
    description: 'Cost-effective promotional jute bags for marketing campaigns',
  },
  {
    id: 'cpjb-001',
    name: 'Custom Printed Jute Bags',
    category: 'custom-bags',
    price: 65,
    colors: ['Natural', 'Brown', 'Black'],
    sizes: ['Medium', 'Large'],
    image: '/images/products/customize-jute-bags.webp',
    description: 'Custom printed jute bags with your logo and design',
  },
  {
    id: 'rjgb-002',
    name: 'Eco Grocery Bags',
    category: 'grocery-bags',
    price: 40,
    colors: ['Natural', 'Brown'],
    sizes: ['Large'],
    image: '/images/products/jute4.webp',
    description: 'Premium eco-friendly grocery bags for daily shopping',
  },
  {
    id: 'jgb-002',
    name: 'Premium Gift Bags',
    category: 'gift-bags',
    price: 45,
    colors: ['Natural', 'Brown'],
    sizes: ['Medium', 'Large'],
    image: '/images/products/customize-jute-bags.webp',
    description: 'Premium quality gift bags for corporate gifting',
  },
  {
    id: 'jcb-002',
    name: 'Travel Cosmetic Bags',
    category: 'cosmetic-bags',
    price: 30,
    colors: ['Natural', 'Brown'],
    sizes: ['Small', 'Medium'],
    image: '/images/products/promotional-bags.webp',
    description: 'Stylish cosmetic bags perfect for travel',
  },
  {
    id: 'pjb-002',
    name: 'Corporate Promotional Bags',
    category: 'promotional-bags',
    price: 35,
    colors: ['Natural', 'Brown', 'Black'],
    sizes: ['Medium'],
    image: '/images/products/grocery-bag.webp',
    description: 'Professional promotional bags for corporate events',
  },
  {
    id: 'cpjb-002',
    name: 'Designer Custom Bags',
    category: 'custom-bags',
    price: 75,
    colors: ['Natural', 'Brown', 'Black'],
    sizes: ['Medium', 'Large'],
    image: '/images/products/gift-bag.webp',
    description: 'Designer custom bags with premium printing quality',
  },
  {
    id: 'jtb-001',
    name: 'Jute Tamboolam Bags',
    category: 'tamboolam-bags',
    price: 30,
    colors: ['Natural', 'Brown', 'Red'],
    sizes: ['Small', 'Medium'],
    image: '/images/products/gift-bag.webp',
    description: 'Traditional jute tamboolam bags for weddings and ceremonies',
  },
]

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'grocery-bags', name: 'Grocery Bags' },
  { id: 'gift-bags', name: 'Gift Bags' },
  { id: 'cosmetic-bags', name: 'Cosmetic Bags' },
  { id: 'promotional-bags', name: 'Promotional Bags' },
  { id: 'custom-bags', name: 'Custom Printed Bags' },
  { id: 'tamboolam-bags', name: 'Tamboolam Bags' },
]

export const colors = ['Natural', 'Brown', 'Black', 'Green']
export const sizes = ['Small', 'Medium', 'Large', 'Extra Large']

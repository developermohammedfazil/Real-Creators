import Image from 'next/image'
import Link from 'next/link'
import { FaLeaf, FaAward, FaUsers, FaHandshake } from 'react-icons/fa'

export const metadata = {
  title: 'About Us - Real Creators | Leading Jute Bag Manufacturer',
  description: 'Learn about Real Creators, a trusted jute bag manufacturer with 15+ years of experience in eco-friendly packaging solutions.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/about-banner.webp)' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Real Creators</h1>
            <p className="text-xl">Crafting Sustainable Solutions Since 2019</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-96 w-full rounded-xl overflow-hidden">
            <Image
              src="/images/about/aboutimage.webp"
              alt="Real Creators Manufacturing"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Real Creators was founded in 2019 with a vision to provide eco-friendly packaging solutions 
                that don't compromise on quality or style. What started as a small workshop in Coimbatore 
                has grown into a leading manufacturer of premium jute bags.
              </p>
              <p>
                With over 5 years of experience, we've served more than 500 satisfied clients across India, 
                delivering over 50,000 custom jute bags. Our commitment to sustainability and craftsmanship 
                has made us a trusted partner for businesses looking to make an environmental impact.
              </p>
              <p>
                Today, we operate from our state-of-the-art facility in Gandhipuram, Coimbatore, where our 
                skilled team combines traditional jute weaving techniques with modern printing technology to 
                create bags that are both beautiful and durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-gray-600 text-lg">What drives us every day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
              <FaLeaf size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
            <p className="text-gray-600">
              Committed to eco-friendly practices and reducing environmental impact
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
              <FaAward size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
            <p className="text-gray-600">
              Premium materials and craftsmanship in every product we create
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
              <FaUsers size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority, from design to delivery
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
              <FaHandshake size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability</h3>
            <p className="text-gray-600">
              Consistent quality and on-time delivery you can count on
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Strength */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">5000+</div>
            <div className="text-gray-700 font-medium">Bags per Month Capacity</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Skilled Craftsmen</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">₹5Cr+</div>
            <div className="text-gray-700 font-medium">Annual Turnover</div>
          </div>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Real Creators?</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold text-xl">✓</span>
              <span>5+ years of industry experience and expertise</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold text-xl">✓</span>
              <span>Custom printing and branding services with advanced technology</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold text-xl">✓</span>
              <span>Flexible order quantities - from small batches to bulk orders</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold text-xl">✓</span>
              <span>Competitive pricing without compromising on quality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold text-xl">✓</span>
              <span>Fast turnaround times and reliable delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold text-xl">✓</span>
              <span>Dedicated customer support throughout your order journey</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1920&h=600&fit=crop&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto text-center px-4 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8">
            Explore our products or get in touch to discuss your custom requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              View Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg border-2 border-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

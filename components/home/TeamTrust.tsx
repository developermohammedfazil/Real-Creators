'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'

const teamMembers = [
  { name: 'Team Member 1', role: 'Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&q=75' },
  { name: 'Team Member 2', role: 'Production Head', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=75' },
  { name: 'Team Member 3', role: 'Design Lead', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=75' },
]

export default function TeamTrust() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/917358906378?text=Hi, I would like to know more about your jute bags', '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+917358906378'
  }

  const handleEnquiry = () => {
    window.location.href = '/contact'
  }

  return (
    <section className="section-container bg-gradient-to-br from-primary-50 to-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Dedicated professionals committed to delivering excellence in every bag we create
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-primary-600 font-medium">{member.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-700 font-medium">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-700 font-medium">Satisfied Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">₹5Cr+</div>
            <div className="text-gray-700 font-medium">Annual Turnover</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Start Your Order?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto"
            >
              <FaWhatsapp size={20} />
              WhatsApp Us
            </button>
            <button
              onClick={handleCall}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto"
            >
              <FaPhone size={18} />
              Call Now
            </button>
            <button
              onClick={handleEnquiry}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto"
            >
              <FaEnvelope size={18} />
              Quick Enquiry
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

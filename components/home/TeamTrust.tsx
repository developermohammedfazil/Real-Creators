'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'

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
      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">5+</div>
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
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto"
            >
              <FaWhatsapp size={20} />
              WhatsApp Us
            </button>
            <button
              onClick={handleCall}
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto"
            >
              <FaPhone size={18} className="rotate-90" />
              Call Now
            </button>
            <button
              onClick={handleEnquiry}
              className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto"
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

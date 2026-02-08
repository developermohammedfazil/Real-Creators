import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Service', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Real Creators</h3>
            <p className="text-sm mb-4">
              Leading manufacturer of premium eco-friendly jute bags with custom printing and branding solutions.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>First Floor, Sathyam Towers, 291/3, 2nd St, Cross Cut, Gandhipuram, Coimbatore, Tamil Nadu 641012</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a href="tel:+917358906378" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                <FaPhone className="rotate-90" />
                <span>+91 73589 06378</span>
              </a>
              <a href="mailto:realcreators319@gmail.com" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                <FaEnvelope />
                <span>realcreators319@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Real Creators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

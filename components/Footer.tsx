import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt, FaStore, FaBook } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Service', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Our Highlights', href: '/#highlights' },
]

const businessLinks = [
  { name: 'IndiaMART', href: 'https://www.indiamart.com/real-creators/profile.html?srsltid=AfmBOoonbpOi0Nd5j3IBlCbYpp3FjSiAt8NC3O4cw8vLrDMOPdVqCH1k', icon: FaStore },
  { name: 'JustDial', href: 'https://www.justdial.com/Coimbatore/REAL-CREATORS-Ganapathy/0422PX422-X422-230614174837-P2U3_BZDET?srcterm=REAL%2520CREATORS&predocid=0422PX422.X422.181231120338.D1B2', icon: FaBook },
  { name: 'LikeMe', href: 'https://www.likeme.co.in/coimbatore/real-creators/first-floor-sathyam-towers-291-3-2nd-st-cross-cut-gandhipuram/000436375', icon: FaExternalLinkAlt },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-white text-xl font-bold mb-4">Real Creators</h4>
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
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
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
            <h4 className="text-white text-lg font-semibold mb-4">Get In Touch</h4>
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

          {/* Business Directories */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Find Us On</h4>
            <div className="space-y-3">
              {businessLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                >
                  <link.icon size={18} />
                  <span>{link.name}</span>
                </a>
              ))}
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

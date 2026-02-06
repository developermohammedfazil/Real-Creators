'use client'

import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'

const socialLinks = [
  { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
  { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:text-red-600' },
  { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
]

export default function SocialSidebar() {
  return (
    <div className="hidden lg:fixed lg:flex flex-col left-6 top-1/2 -translate-y-1/2 z-40 space-y-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-600 ${social.color} transition-all duration-300 hover:scale-110`}
          aria-label={social.label}
        >
          <social.icon size={28} />
        </a>
      ))}
    </div>
  )
}

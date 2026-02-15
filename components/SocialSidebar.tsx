'use client'

import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/realcreators319/', label: 'Instagram', bgColor: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500', hoverColor: 'hover:from-purple-700 hover:via-pink-700 hover:to-orange-600' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@realcreators319', label: 'YouTube', bgColor: 'bg-red-600', hoverColor: 'hover:bg-red-700' },
  { icon: FaFacebook, href: 'https://www.facebook.com/real.creators.600435/', label: 'Facebook', bgColor: 'bg-blue-600', hoverColor: 'hover:bg-blue-700' },
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
          className={`${social.bgColor} ${social.hoverColor} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
          aria-label={social.label}
        >
          <social.icon size={24} />
        </a>
      ))}
    </div>
  )
}

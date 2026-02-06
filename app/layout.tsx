import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SocialSidebar from '@/components/SocialSidebar'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Real Creators - Premium Jute Bags Manufacturer | Eco-Friendly Packaging Solutions',
  description: 'Leading jute bags manufacturer offering customized eco-friendly packaging solutions for B2B and B2C. Premium quality jute bags with custom prints and branding services.',
  keywords: 'jute bags, eco-friendly bags, custom jute bags, jute bag manufacturer, sustainable packaging, branded jute bags, bulk jute bags',
  authors: [{ name: 'Real Creators' }],
  openGraph: {
    title: 'Real Creators - Premium Jute Bags Manufacturer',
    description: 'Leading jute bags manufacturer offering customized eco-friendly packaging solutions',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <SocialSidebar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

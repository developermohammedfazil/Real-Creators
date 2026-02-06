# Real Creators Website

A modern, high-performance website for Real Creators - a premium jute bags manufacturer. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Mobile-First Design** - Optimized for all devices
- **SEO Optimized** - Server-side rendering with Next.js
- **High Performance** - Optimized images, minimal JavaScript
- **Product Catalog** - Advanced filtering and search
- **Reference Cart System** - Unique product reference system for B2B
- **Blog System** - SEO-friendly blog with dynamic routing
- **Contact Form** - EmailJS integration
- **Smooth Animations** - Framer Motion for delightful UX

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Git

## 🛠️ Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "d:\Freelance\RealCreator - 01\real-creators-website"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   # EmailJS Configuration (Get from https://www.emailjs.com/)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Add your images:**
   Place your images in the following directories:
   - `/public/images/hero/` - Hero slider images (slide1.jpg to slide4.jpg)
   - `/public/images/products/` - Product category and individual product images
   - `/public/images/team/` - Team member photos
   - `/public/images/highlights/` - Instagram-style highlights
   - `/public/images/blog/` - Blog post featured images
   - `/public/images/about/` - About page images
   - `/public/images/contact-bg.jpg` - Contact page background

## 🎨 Customization

### Update Company Information

1. **Contact Details** - Update in:
   - `components/Footer.tsx`
   - `app/contact/page.tsx`
   - `components/home/TeamTrust.tsx`

2. **Social Media Links** - Update in:
   - `components/Navbar.tsx`
   - `components/SocialSidebar.tsx`

3. **WhatsApp Number** - Replace `919876543210` throughout the project

4. **Google Maps** - Update the iframe src in `app/contact/page.tsx` with your location

### Customize Products

Edit `lib/products.ts` to add/modify products:
```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  category: 'category-slug',
  price: 150,
  colors: ['Natural', 'Brown'],
  sizes: ['Small', 'Medium'],
  image: '/images/products/product.jpg',
  description: 'Product description',
}
```

### Customize Blog Posts

Edit `lib/blog.ts` to add/modify blog posts.

### Theme Colors

Modify `tailwind.config.js` to change brand colors:
```javascript
colors: {
  primary: { /* Your brand colors */ },
  accent: { /* Accent colors */ },
}
```

## 🏃 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Build

Create a production build:

```bash
npm run build
```

Test the production build locally:

```bash
npm start
```

## 📱 EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `from_name`, `from_email`, `phone`, `message`
4. Get your Service ID, Template ID, and Public Key
5. Update `.env.local` with your credentials
6. Uncomment EmailJS code in `app/contact/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the .next folder
```

**Traditional Hosting:**
```bash
npm run build
npm start
# Use PM2 or similar for process management
```

## 📊 Performance Optimization

The site is already optimized with:
- Next.js Image Optimization
- Automatic code splitting
- Font optimization
- Lazy loading
- Minimal JavaScript

### Further Optimizations:

1. **Compress Images:**
   - Use WebP/AVIF formats
   - Optimize with tools like TinyPNG

2. **Enable Caching:**
   - Configure CDN caching headers
   - Use Vercel Edge Network

3. **Monitor Performance:**
   - Use Lighthouse
   - Check Core Web Vitals

## 🎯 SEO Checklist

- [x] Meta tags configured
- [x] Open Graph tags
- [x] Semantic HTML
- [x] Image alt texts
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics
- [ ] Set up Google Search Console
- [ ] Add structured data (JSON-LD)

## 📁 Project Structure

```
real-creators-website/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── services/          # Services/Products page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── home/             # Home page components
│   ├── services/         # Services page components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ...
├── lib/                   # Data and utilities
│   ├── products.ts       # Product data
│   └── blog.ts           # Blog posts data
├── public/               # Static assets
│   └── images/          # Image files
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies
```

## 🐛 Troubleshooting

**Images not loading:**
- Ensure images are in the correct `/public/images/` directories
- Check file names match exactly (case-sensitive)

**Build errors:**
- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder: `rm -rf .next` (or `rmdir /s .next` on Windows)

**EmailJS not working:**
- Verify environment variables are set
- Check EmailJS dashboard for API limits
- Ensure template variables match

## 📞 Support

For issues or questions:
- Check the Next.js documentation: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- EmailJS docs: https://www.emailjs.com/docs/

## 📄 License

This project is proprietary and confidential.

---

Built with ❤️ for Real Creators

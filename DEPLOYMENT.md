# Deployment Guide - Real Creators Website

## Pre-Deployment Checklist

- [ ] All images added and optimized
- [ ] Contact information updated (phone, email, address)
- [ ] Social media links updated
- [ ] WhatsApp number configured
- [ ] Google Maps location updated
- [ ] EmailJS configured and tested
- [ ] Products data customized
- [ ] Blog posts reviewed
- [ ] Test on mobile devices
- [ ] Run production build locally (`npm run build`)
- [ ] Check for console errors
- [ ] Test all forms
- [ ] Verify all links work

## Option 1: Vercel (Recommended - Easiest)

### Why Vercel?
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier available
- Automatic deployments from Git

### Steps:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Configure:
     - Framework Preset: Next.js (auto-detected)
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `.next`
   
3. **Add Environment Variables:**
   - In Vercel dashboard → Settings → Environment Variables
   - Add your EmailJS credentials:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
     ```

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live!

5. **Custom Domain (Optional):**
   - Go to Settings → Domains
   - Add your domain (e.g., realcreators.com)
   - Update DNS records as instructed
   - Vercel handles SSL automatically

### Automatic Deployments:
Every push to `main` branch automatically deploys!

---

## Option 2: Netlify

### Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to https://netlify.com
   - Drag and drop the `.next` folder
   - Or connect to GitHub for automatic deployments

3. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variables in Site Settings

---

## Option 3: Traditional Hosting (cPanel/VPS)

### Requirements:
- Node.js 18+ installed on server
- PM2 for process management
- Nginx as reverse proxy

### Steps:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload to server:**
   ```bash
   # Using SCP
   scp -r ./* user@your-server:/var/www/realcreators/
   
   # Or use FTP client like FileZilla
   ```

3. **Install dependencies on server:**
   ```bash
   ssh user@your-server
   cd /var/www/realcreators
   npm install --production
   ```

4. **Set up PM2:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "realcreators" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name realcreators.com www.realcreators.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Enable SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d realcreators.com -d www.realcreators.com
   ```

---

## Option 4: Docker Deployment

### Dockerfile:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

### Deploy:
```bash
docker build -t realcreators .
docker run -p 3000:3000 realcreators
```

---

## Post-Deployment Tasks

### 1. Set Up Google Search Console
- Go to https://search.google.com/search-console
- Add your property
- Verify ownership
- Submit sitemap: `https://yoursite.com/sitemap.xml`

### 2. Set Up Google Analytics (Optional)
```javascript
// Add to app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

### 3. Test Everything
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Forms submit successfully
- [ ] WhatsApp links work
- [ ] Phone links work on mobile
- [ ] Google Maps loads
- [ ] Mobile responsiveness
- [ ] Page speed (use PageSpeed Insights)

### 4. Monitor Performance
- Use Vercel Analytics (if on Vercel)
- Set up Google Analytics
- Monitor Core Web Vitals
- Check error logs regularly

### 5. SEO Optimization
- Submit to Google Search Console
- Submit to Bing Webmaster Tools
- Create and submit sitemap
- Set up Google My Business
- Get listed in business directories

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Check image paths are correct
- Ensure images are in `/public/images/`
- Verify file names match exactly (case-sensitive)

### Environment Variables Not Working
- Ensure they start with `NEXT_PUBLIC_` for client-side access
- Restart dev server after adding new variables
- Check they're added in deployment platform

### Slow Performance
- Optimize images (compress, use WebP)
- Enable CDN caching
- Check for console errors
- Use Lighthouse for diagnostics

---

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit
npm audit fix
```

### Backup
- Regular database backups (if using one)
- Keep Git repository updated
- Export environment variables

### Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Monitor error logs
- Check analytics regularly

---

## Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Support:** https://vercel.com/support
- **Netlify Docs:** https://docs.netlify.com
- **EmailJS Docs:** https://www.emailjs.com/docs

---

## Quick Commands Reference

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint

# Update dependencies
npm update

# Check for issues
npm audit
```

---

**Need Help?** Refer to README.md for detailed setup instructions.

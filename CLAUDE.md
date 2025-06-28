# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13.5.6 website for StayCool Airco's Brunssum branch, an air conditioning installation company serving Limburg, Netherlands. The site uses App Router, TypeScript, Tailwind CSS, and shadcn/ui components.

## Essential Commands

```bash
# Development
npm run dev                  # Start development server on localhost:3000

# Building & Deployment
npm run build               # Build for production (includes sitemap generation)
npm run start               # Start production server

# Code Quality
npm run lint                # Run ESLint
npx tsc --noEmit           # TypeScript type checking

# Sitemap Management
npm run generate-sitemaps   # Generate fresh sitemaps
npm run update-sitemaps     # Update existing sitemaps
```

## Architecture & Structure

### App Router Pages
- **Dynamic routes**: 
  - `/diensten/[slug]/[city]` - Service pages with city combinations
  - `/steden/[city]` - City-specific landing pages  
  - `/kennisbank/[slug]` - Knowledge base articles
  - `/merken/[slug]` - Brand information pages
- **Static pages**: Contact, FAQ, Privacy, Terms, etc.
- **API routes**: `/api/generate-sitemaps` for sitemap generation

### Component Organization
- `/components/sections/` - Major page sections (hero-optimized, services-optimized, etc.)
- `/components/forms/` - Form components with EmailJS integration
- `/components/layout/` - Header and footer (use *-optimized versions)
- `/components/ui/` - shadcn/ui components library

### Data Management
All content is managed through JSON files in `/data/`:
- `diensten.json` - Services with pricing and features
- `steden.json` - City information and service areas
- `kennisbank.json` - Knowledge base articles
- `brands.json` - Air conditioning brand information

### Key Technical Decisions
1. **EmailJS** for contact forms (credentials in env vars)
2. **Static generation** with dynamic sitemap creation
3. **SEO-first approach** with structured data and city landing pages
4. **StayCool design system** - Orange (#F97316) and blue color scheme with Inter font

## Environment Variables

Required for production:
```
NEXT_PUBLIC_SITE_URL=https://aircoinstallatiebrunssum.nl
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_1rruujp
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_rkcpzhg  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=[check .env.production]
NEXT_PUBLIC_GA_ID=[Google Analytics ID]
```

## Critical Implementation Notes

### Contact Forms
- All forms use EmailJS and redirect to `/bedankt` on success
- Form validation with React Hook Form + Zod
- The public key must match the EmailJS dashboard

### SEO & Sitemaps
- Sitemaps are pre-generated during build via `prebuild-sitemaps.js`
- City and service pages are dynamically generated from data files
- Each page needs proper metadata export

### Styling Guidelines
- Use Tailwind utilities first, custom CSS only when necessary
- Follow StayCool brand colors: primary orange `#F97316`, secondary blues
- Components should use the optimized versions when available

### Performance Considerations
- Images use Next.js Image component with blur placeholders
- Keep bundle size minimal - check before adding new dependencies
- Static generation preferred over server-side rendering

## Common Tasks

### Adding a New City
1. Add city to `/data/steden.json`
2. Run `npm run generate-sitemaps`
3. Deploy changes

### Creating New Service Pages
1. Update `/data/diensten.json` with service details
2. Service pages auto-generate from slug
3. Regenerate sitemaps before deployment

### Updating Contact Information
- Phone: 046 202 1430 (used throughout the site)
- Email: info@staycoolairco.nl
- Update in components directly, no central config
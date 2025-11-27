# AI Website Builder

## Overview
A modern AI-powered website builder built with Next.js 15, TypeScript, and Google Gemini 2.5. Users can describe their desired website in natural language, select a template, and watch as AI generates clean, responsive HTML with Tailwind CSS styling in real-time.

## Features
- **AI-Powered Generation**: Uses Google Gemini 2.5 Flash to generate complete websites from text descriptions
- **Template Selection**: Choose from landing page, portfolio, blog, business, or custom templates
- **Real-Time Preview**: Instantly see your generated website in a split-screen interface
- **Code Export**: Copy or download the generated HTML code
- **Responsive Design**: All generated websites are mobile-friendly with Tailwind CSS
- **Modern UI**: Clean, intuitive builder interface with custom color scheme
- **User Authentication**: Secure sign-in/sign-up with Clerk authentication
- **Protected Routes**: Only authenticated users can access the builder
- **Premium Tier Support**: Free and premium feature tiers with Clerk metadata-based access control
- **Dashboard**: Personalized user dashboard showing logged-in user's first name
- **Editor Tools Showcase**: Dedicated `/editor` route displaying free and premium editor capabilities

## Project Architecture
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini 2.5 Flash API
- **API Routes**: `/api/generate` - Handles AI website generation requests

## File Structure
```
src/
├── app/
│   ├── api/
│   │   ├── generate/
│   │   │   └── route.ts               # Advanced AI generation API (multi-step, validated)
│   │   └── razorpay/
│   │       └── route.ts               # Razorpay payment processing
│   ├── auth/
│   │   ├── sign-in/[[...sign-in]]/
│   │   │   └── page.tsx               # Clerk sign-in page
│   │   └── sign-up/[[...sign-up]]/
│   │       └── page.tsx               # Clerk sign-up page
│   ├── dashboard/
│   │   └── page.tsx                   # User dashboard (server-side authenticated)
│   ├── editor/
│   │   └── page.tsx                   # Editor tools showcase (free & premium)
│   ├── globals.css                    # Global styles with Tailwind
│   ├── layout.tsx                     # Root layout with ClerkProvider
│   ├── page.tsx                       # Main builder interface (authenticated)
│   ├── preview/
│   │   └── page.tsx                   # Preview page with iframe + export
│   ├── upgrade/
│   │   └── page.tsx                   # Premium upgrade page with Razorpay
│   └── style-guide/
│       └── page.tsx                   # Typography and color palette guide
├── components/
│   ├── editor/
│   │   ├── BuilderInterface.tsx       # Main builder container
│   │   ├── PromptPanel.tsx            # Left panel with prompt input and templates
│   │   ├── PreviewPanel.tsx           # Right panel with preview/code view
│   │   ├── PremiumTools.tsx           # Premium tools (server-side)
│   │   ├── FreeTools.tsx              # Free editor tools showcase
│   │   └── index.ts                   # Barrel export (excludes PremiumTools)
│   ├── RazorpayButton.tsx             # Razorpay payment button
│   ├── MotionWrapper.tsx              # Framer Motion wrapper for animations
│   └── ScrollReveal.tsx               # Scroll reveal animations
├── lib/
│   ├── gemini.ts                      # Google Gemini client configuration
│   └── htmlGenerator.ts               # Advanced HTML generation engine with templates & validation
└── middleware.ts                      # Clerk route protection middleware
```

## Recent Changes
- **2025-11-27**: PRODUCTION REBUILD: Completely rebuilt HTML generation system
  - Created advanced `htmlGenerator.ts` with professional fallback templates (landing, portfolio, business)
  - Implemented sophisticated validation pipeline that checks HTML structure
  - Added fallback mechanism: if Gemini generation fails, system uses pre-built templates
  - Rebuilt `/api/generate` with multi-step generation and guaranteed valid output
  - Added HTML output cleaning to remove markdown formatting from Gemini responses
  - System now ALWAYS returns valid, responsive HTML - never broken or incomplete code
  - Templates are production-ready and fully styled with Tailwind + custom color scheme
  - Validation ensures all tags properly closed, structure complete, Tailwind classes valid
- **2025-11-26**: Integrated Framer Motion animations (fade + slide) throughout app
- **2025-11-26**: Created MotionWrapper component for reusable entrance animations
- **2025-11-26**: Added HeroSection component with animated staggered text
- **2025-11-26**: Applied animations to landing page, showcase cards, and buttons
- **2025-11-25**: Updated premium pricing to ₹600/month
- **2025-11-25**: Migrated payment processing from Stripe to Razorpay
- **2025-11-25**: Created `/upgrade` page with premium pricing (₹600/month)
- **2025-11-25**: Implemented RazorpayButton component for secure payment checkout
- **2025-11-25**: Created `/api/razorpay` endpoint for order creation
- **2025-11-25**: Created `/editor` route with FreeTools and PremiumTools showcase
- **2025-11-25**: Implemented premium tier gating with Clerk user metadata checks
- **2025-11-25**: Fixed server-side component import patterns (PremiumTools imported directly, not via barrel)
- **2025-11-25**: Reorganized components into `src/components/editor/` with barrel exports (excluding PremiumTools)
- **2025-11-25**: Created PremiumTools.tsx and FreeTools.tsx components for feature showcase
- **2025-11-25**: Added server-side dashboard route with Clerk authentication
- **2025-11-25**: Updated layout.tsx to use client component pattern for Clerk compatibility
- **2025-11-25**: Added Clerk authentication with Sign In/Sign Up pages and protected routes
- **2025-11-25**: Updated color scheme to modern theme (#999999, #3d4c41, #e6e6e6)
- **2025-11-25**: Rebranded to "METRIXLAB CREATION" across all interfaces
- **2025-11-25**: Switched from OpenAI to Google Gemini 2.5 Flash for free AI generation
- **2025-11-24**: Initial project setup with Next.js, TypeScript, and Tailwind CSS

## Environment Variables & Secrets
- `GEMINI_API_KEY`: Required for AI website generation (free from Google AI Studio)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk public key for authentication
- `CLERK_SECRET_KEY`: Clerk secret key for authentication backend
- `RAZORPAY_KEY_ID`: Razorpay key ID for payment processing
- `RAZORPAY_KEY_SECRET`: Razorpay key secret for payment processing
- `NEXT_PUBLIC_RAZORPAY_KEY_ID`: Razorpay public key ID for frontend checkout

## Routes
- `/` - Landing page with Sign In/Sign Up (unauthenticated) or AI builder (authenticated)
- `/auth/sign-in` - Clerk sign-in page
- `/auth/sign-up` - Clerk sign-up page
- `/dashboard` - User dashboard (authenticated, server-side)
- `/editor` - Editor tools showcase with free and premium features (authenticated)
- `/upgrade` - Premium upgrade page with pricing and Razorpay checkout
- `/style-guide` - Typography and color palette style guide
- `/api/generate` - AI website generation endpoint
- `/api/razorpay` - Razorpay order creation endpoint for premium subscriptions

## Development
- Run development server: `npm run dev` (runs on port 5000)
- Build for production: `npm run build`
- Start production server: `npm start`

## Important Notes
- **PremiumTools Component**: Must be imported directly, not via barrel export (server-side component constraint)
- **FreeTools Component**: Can be imported via barrel export from `@/components/editor`
- **Upgrade Route**: `/upgrade` is referenced but not yet implemented (add when implementing payments)
- **Premium Metadata**: Users marked with `isPremium: true` in Clerk publicMetadata will see premium tools

## User Preferences
- **Branding**: "METRIXLAB CREATION"
- **Color Scheme**: 
  - Primary: #999999 (Gray)
  - Secondary: #3d4c41 (Dark Green)
  - Tertiary: #e6e6e6 (Light Gray)
- **AI Model**: Google Gemini 2.5 Flash (free tier with 1M tokens/min)
- **Authentication**: Clerk for user management with server-side and client-side auth patterns
- **Code Organization**: Editor components organized in `src/components/editor/` with barrel exports
- **Component Structure**: Using both client and server components appropriately for performance

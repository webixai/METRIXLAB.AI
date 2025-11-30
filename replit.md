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
│   ├── billing/
│   │   └── page.tsx                   # Razorpay subscription payment page (₹249/month)
│   ├── dashboard/
│   │   └── page.tsx                   # User dashboard (server-side authenticated)
│   ├── editor/
│   │   └── page.tsx                   # Editor tools showcase (free & premium)
│   ├── globals.css                    # Global styles with Tailwind
│   ├── layout.tsx                     # Root layout with ClerkProvider
│   ├── page.tsx                       # Main builder interface (authenticated)
│   ├── preview/
│   │   └── page.tsx                   # Preview page with iframe + export
│   ├── success/
│   │   └── page.tsx                   # Payment success confirmation page
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
│   ├── NavBar.tsx                     # Navigation bar with glassmorphic design & Clerk logout
│   ├── LoadingScreen.tsx              # 2.5s animated loading screen with shimmer text
│   ├── EditButton.tsx                 # Floating edit button with purple pencil icon
│   ├── EditPanel.tsx                  # Slide-in editor sidebar with color/font/spacing controls
│   ├── PreviewArea.tsx                # Live preview of edited website
│   ├── RazorpayButton.tsx             # Razorpay payment button
│   ├── MotionWrapper.tsx              # Framer Motion wrapper for animations
│   └── ScrollReveal.tsx               # Scroll reveal animations
├── store/
│   └── useEditorStore.ts              # Zustand store for editor theme & layout state
├── lib/
│   ├── gemini.ts                      # Google Gemini client configuration
│   └── htmlGenerator.ts               # Advanced HTML generation engine with templates & validation
└── middleware.ts                      # Clerk route protection middleware
```

## Recent Changes
- **2025-11-30**: Complete Builder Interface Implementation
  - Implemented fully functional home page (`page.tsx`) with prompt input interface
  - Created prompt textarea with placeholder for website descriptions
  - Added Generate button with purple→cyan gradient and hover effects
  - Implemented 2-second loading animation with spinning loader
  - Created Live Preview section showing generated website
  - Added Edit button (absolute positioned) for editing generated sites
  - Updated `layout.tsx` to use server-side rendering with Clerk provider
  - Updated `globals.css` with dark gradient background (Navy → Purple → Teal)
  - Enhanced NavBar with fixed positioning and fully functional dropdown menu
  - All components integrated and working seamlessly
- **2025-11-30**: Enhanced NavBar with Fixed Positioning & Dropdown Menu
  - Updated `NavBar.tsx` with fixed positioning (top-0, z-50) to stay visible while scrolling
  - Added hamburger menu icon with dropdown navigation (Dashboard, Editor, Billing, Logout)
  - Implemented gradient text for brand name (cyan #00E5FF to purple #7C3AED)
  - Enhanced design: dark semi-transparent background with backdrop-blur-lg
  - Added cyan accent border with Clerk logout button in pink (#FF4B91)
  - Updated `layout.tsx` to add pt-20 padding-top to prevent content overlap with fixed navbar
- **2025-11-28**: UI Polish & NavBar Redesign
  - Completely rebuilt `layout.tsx` with animated loading screen (2.5s shimmer effect)
  - Implemented staggered animations: loading screen (0s) → navbar (0.3s) → content (0.6s)
  - Created new `NavBar.tsx` component with glassmorphic design (rgba + backdrop-blur)
  - NavBar features: Menu icon, brand name with Clash Display font, Logout button with Clerk integration
  - Added glass-effect styling to navbar and main content containers
  - Removed old Navbar.tsx file to fix webpack casing conflict
  - Updated page.tsx imports to use NavBar (capitalized)
  - Fixed file structure: NavBar.tsx properly cased for consistency
  - All animations use Framer Motion with easeOut timing functions
- **2025-11-28**: Live Editor & Premium Tier Enhancements
  - Created EditButton component with floating purple pencil icon
  - Implemented EditPanel sidebar with color picker (background, text, accent) and font/spacing controls
  - Added PreviewArea component for real-time live preview of edits
  - Expanded font library to 100+ fonts across Sans Serif, Serif, Display, Monospace categories
  - Implemented Zustand store with light theme defaults (white bg, black text)
  - Added premium tier system: 70% fonts for free users, 100% for premium
  - Created visual lock overlays with "Upgrade Now" buttons for premium-only features
  - Implemented unsafeMetadata for persistent preference storage via Clerk
  - Created `/billing` page for ₹249/month Razorpay subscription
  - Created `/success` page for payment confirmation
  - Enhanced EditPanel with PremiumLock component showing Lock icon overlay
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
- `/billing` - Razorpay subscription payment page (₹249/month)
- `/dashboard` - User dashboard (authenticated, server-side)
- `/editor` - Editor tools showcase with free and premium features (authenticated)
- `/success` - Payment success confirmation page (redirects after Razorpay checkout)
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
- **Branding**: "MetrixLab AI" / "MetrixLab Plus" (for premium)
- **Color Scheme**: 
  - Primary: #7C3AED (Purple)
  - Accent: #00E5FF (Cyan)
  - Secondary: #FF4B91 (Pink - logout)
  - Background: Gradient animated (120deg, purple-teal-green, 18s loop)
  - Text: Light (white/gray)
- **Theme**: Dark mode with animated gradient + glassmorphism effects
- **Design Pattern**: Glassmorphic (rgba backgrounds with backdrop-blur-lg)
- **Animations**: Framer Motion with staggered entrance animations and smooth transitions
- **Loading UX**: 2.5s animated loading screen with shimmer text effect before app loads
- **Pricing**: ₹249/month auto-renewing premium tier
- **AI Model**: Google Gemini 2.5 Flash (free tier with 1M tokens/min)
- **Authentication**: Clerk for user management with useClerk hook for logout integration
- **Payment Processing**: Razorpay for subscription billing
- **Code Organization**: Editor components organized in `src/components/editor/` with barrel exports
- **Component Structure**: Using both client and server components appropriately for performance
- **Live Editing**: Real-time preview of color, font, and spacing changes in editor panel
- **Navigation**: Fixed navbar with gradient text, hamburger dropdown menu (Dashboard, Editor, Billing, Logout)

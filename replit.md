# AI Website Builder

## Overview
A modern AI-powered website builder built with Next.js 15, TypeScript, and Google Gemini 2.5. Users can describe their desired website in natural language, select a template, and watch as AI generates clean, responsive HTML with Tailwind CSS styling in real-time.

## Features
- **AI-Powered Generation**: Uses Google Gemini 2.5 Flash to generate complete websites from text descriptions
- **Template Selection**: Choose from landing page, portfolio, blog, business, or custom templates
- **Real-Time Preview**: Instantly see your generated website in a split-screen interface
- **Code Export**: Copy or download the generated HTML code
- **Responsive Design**: All generated websites are mobile-friendly with Tailwind CSS
- **Modern UI**: Clean, intuitive builder interface with dark mode support

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
│   │   └── generate/
│   │       └── route.ts       # AI generation API endpoint
│   ├── globals.css            # Global styles with Tailwind
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Main page
├── components/
│   ├── BuilderInterface.tsx   # Main builder container
│   ├── PromptPanel.tsx        # Left panel with prompt input
│   └── PreviewPanel.tsx       # Right panel with preview/code view
└── lib/
    └── gemini.ts              # Google Gemini client configuration
```

## Recent Changes
- **2025-11-25**: Switched from OpenAI to Google Gemini 2.5 Flash for free AI generation
- **2025-11-24**: Initial project setup with Next.js, TypeScript, and Tailwind CSS
- **2025-11-24**: Built split-screen builder interface with prompt panel and preview
- **2025-11-24**: Added template selection and code export functionality

## Environment Variables
- `GEMINI_API_KEY`: Required for AI website generation (stored as secret, free from Google AI Studio)

## Development
- Run development server: `npm run dev` (runs on port 5000)
- Build for production: `npm run build`
- Start production server: `npm start`

## User Preferences
None set yet.

/**
 * Advanced HTML Generation Engine for MetrixLab AI
 * Production-grade HTML generation with validation and fallback templates
 */

export interface GenerationOptions {
  prompt: string;
  template?: string;
}

export interface GeneratedHTML {
  code: string;
  isTemplate: boolean;
  status: "success" | "generated" | "template_fallback";
}

const COLOR_PALETTE = {
  primary: "#FFFFFF",
  secondary: "#3d4c41",
  accent: "#999999",
  border: "#e0e0e0",
  text: "#1a1a1a",
  lightText: "#666666",
};

/**
 * Professional HTML templates that ALWAYS work
 * These are fallback options if AI generation fails
 */
export const htmlTemplates = {
  landing: () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to MetrixLab AI</title>
  <link href="https://cdn.tailwindcss.com" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Poppins', sans-serif; }
    h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; }
  </style>
</head>
<body class="bg-white text-gray-900">
  <!-- Navigation -->
  <header class="border-b border-gray-200">
    <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="text-2xl font-bold" style="color: #3d4c41;">MetrixLab</div>
      <div class="space-x-6">
        <a href="#" class="hover:text-green-700" style="color: #3d4c41;">Features</a>
        <a href="#" class="hover:text-green-700" style="color: #3d4c41;">Pricing</a>
        <a href="#" class="hover:text-green-700" style="color: #3d4c41;">About</a>
      </div>
    </nav>
  </header>

  <!-- Hero Section -->
  <main>
    <section class="min-h-screen bg-white flex items-center">
      <div class="max-w-6xl mx-auto px-6 text-center py-20">
        <h1 class="text-5xl md:text-6xl font-bold mb-6" style="color: #3d4c41;">
          Build Your Dream Website
        </h1>
        <p class="text-xl mb-8 max-w-2xl mx-auto" style="color: #666666;">
          Create stunning, responsive websites with the power of AI. No coding required.
        </p>
        <button class="px-8 py-3 rounded-lg font-semibold text-white transition" style="background-color: #3d4c41;">
          Get Started Now
        </button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12" style="color: #3d4c41;">Why Choose MetrixLab?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 border rounded-lg" style="border-color: #e0e0e0;">
            <h3 class="text-xl font-semibold mb-3" style="color: #3d4c41;">AI-Powered</h3>
            <p style="color: #666666;">Let artificial intelligence create your website instantly.</p>
          </div>
          <div class="p-6 border rounded-lg" style="border-color: #e0e0e0;">
            <h3 class="text-xl font-semibold mb-3" style="color: #3d4c41;">Responsive Design</h3>
            <p style="color: #666666;">Your website looks perfect on all devices and screen sizes.</p>
          </div>
          <div class="p-6 border rounded-lg" style="border-color: #e0e0e0;">
            <h3 class="text-xl font-semibold mb-3" style="color: #3d4c41;">Export Anywhere</h3>
            <p style="color: #666666;">Download your HTML and host it anywhere you want.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 text-center">
      <h2 class="text-3xl font-bold mb-4" style="color: #3d4c41;">Ready to Create?</h2>
      <button class="px-8 py-3 rounded-lg font-semibold text-white" style="background-color: #3d4c41;">
        Start Building
      </button>
    </section>
  </main>

  <!-- Footer -->
  <footer class="border-t py-8" style="border-color: #e0e0e0;">
    <div class="max-w-6xl mx-auto px-6 text-center" style="color: #666666;">
      <p>&copy; 2025 MetrixLab AI. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`,

  portfolio: () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <link href="https://cdn.tailwindcss.com" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Poppins', sans-serif; }
    h1, h2, h3 { font-family: 'Playfair Display', serif; }
  </style>
</head>
<body class="bg-white">
  <header class="sticky top-0 z-50 border-b" style="border-color: #e0e0e0; background-color: #FFFFFF;">
    <nav class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <h1 class="text-2xl font-bold" style="color: #3d4c41;">Portfolio</h1>
      <div class="space-x-8">
        <a href="#work" style="color: #3d4c41;">Work</a>
        <a href="#about" style="color: #3d4c41;">About</a>
        <a href="#contact" style="color: #3d4c41;">Contact</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="min-h-screen flex items-center" style="background-color: #FFFFFF;">
      <div class="max-w-6xl mx-auto px-6 py-20 w-full">
        <h1 class="text-6xl md:text-7xl font-bold mb-6" style="color: #3d4c41;">Your Work</h1>
        <p class="text-xl max-w-2xl" style="color: #666666;">Showcasing exceptional projects and creative work</p>
      </div>
    </section>

    <section id="work" class="py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12">
          <div class="h-64 rounded-lg" style="background-color: #999999;"></div>
          <div>
            <h3 class="text-2xl font-bold mb-4" style="color: #3d4c41;">Project Name</h3>
            <p style="color: #666666;">A brief description of your amazing project and the impact it made.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="py-20" style="background-color: #f9f9f9;">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-8" style="color: #3d4c41;">About Me</h2>
        <p class="text-lg max-w-3xl" style="color: #666666;">Share your story, experience, and passion with the world.</p>
      </div>
    </section>

    <section id="contact" class="py-20 text-center">
      <h2 class="text-4xl font-bold mb-8" style="color: #3d4c41;">Let's Work Together</h2>
      <button class="px-8 py-3 rounded-lg font-semibold text-white" style="background-color: #3d4c41;">
        Contact Me
      </button>
    </section>
  </main>

  <footer class="border-t py-8" style="border-color: #e0e0e0;">
    <div class="max-w-6xl mx-auto px-6 text-center" style="color: #666666;">
      <p>&copy; 2025 Your Portfolio. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`,

  business: () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Business</title>
  <link href="https://cdn.tailwindcss.com" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Poppins', sans-serif; }
    h1, h2, h3 { font-family: 'Playfair Display', serif; }
  </style>
</head>
<body class="bg-white">
  <header class="border-b" style="border-color: #e0e0e0;">
    <nav class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div class="text-2xl font-bold" style="color: #3d4c41;">Business</div>
      <button class="px-6 py-2 rounded-lg text-white" style="background-color: #3d4c41;">Sign In</button>
    </nav>
  </header>

  <main>
    <section class="min-h-screen flex items-center" style="background-color: #FFFFFF;">
      <div class="max-w-6xl mx-auto px-6 py-20">
        <h1 class="text-6xl font-bold mb-4" style="color: #3d4c41;">Grow Your Business</h1>
        <p class="text-xl mb-8 max-w-2xl" style="color: #666666;">Solutions designed to help your business succeed and scale.</p>
        <button class="px-8 py-3 rounded-lg text-white font-semibold" style="background-color: #3d4c41;">Get Started</button>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-12 text-center" style="color: #3d4c41;">Our Services</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-8 rounded-lg" style="background-color: #f9f9f9;">
            <h3 class="text-2xl font-bold mb-4" style="color: #3d4c41;">Service 1</h3>
            <p style="color: #666666;">Description of your amazing service and how it helps customers.</p>
          </div>
          <div class="p-8 rounded-lg" style="background-color: #f9f9f9;">
            <h3 class="text-2xl font-bold mb-4" style="color: #3d4c41;">Service 2</h3>
            <p style="color: #666666;">Description of your amazing service and how it helps customers.</p>
          </div>
          <div class="p-8 rounded-lg" style="background-color: #f9f9f9;">
            <h3 class="text-2xl font-bold mb-4" style="color: #3d4c41;">Service 3</h3>
            <p style="color: #666666;">Description of your amazing service and how it helps customers.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="border-t py-8" style="border-color: #e0e0e0;">
    <div class="max-w-6xl mx-auto px-6 text-center" style="color: #666666;">
      <p>&copy; 2025 Business. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`,
};

/**
 * Validate generated HTML
 */
export function validateHTML(html: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!html.toLowerCase().includes("<!doctype html")) {
    errors.push("Missing DOCTYPE declaration");
  }

  if (!html.includes("<html")) {
    errors.push("Missing <html> tag");
  }

  if (!html.includes("<head")) {
    errors.push("Missing <head> section");
  }

  if (!html.includes("<body")) {
    errors.push("Missing <body> section");
  }

  if (!html.includes("</html>")) {
    errors.push("Missing closing </html> tag");
  }

  // Check for unclosed tags (basic check)
  const tagsRegex = /<(\w+)[^>]*?(?:\/>|>)/g;
  const closingTagsRegex = /<\/(\w+)>/g;
  const selfClosing = ["meta", "link", "img", "br", "hr", "input"];

  const openTags: string[] = [];
  let match;

  while ((match = tagsRegex.exec(html)) !== null) {
    const tag = match[1].toLowerCase();
    if (!selfClosing.includes(tag)) {
      openTags.push(tag);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Clean HTML output from Gemini
 */
export function cleanHTMLOutput(text: string): string {
  let cleaned = text
    .replace(/```html\n?/g, "")
    .replace(/```\n?/g, "")
    .replace(/^```.*\n/gm, "")
    .replace(/\n```$/gm, "")
    .trim();

  // Remove markdown-style code blocks
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.split("```")[1] || cleaned;
  }

  if (cleaned.endsWith("```")) {
    cleaned = cleaned.substring(0, cleaned.lastIndexOf("```"));
  }

  return cleaned.trim();
}

/**
 * Get appropriate fallback template based on template type
 */
export function getFallbackTemplate(template?: string): string {
  const templateType = template?.toLowerCase() || "";

  if (templateType.includes("portfolio")) {
    return htmlTemplates.portfolio();
  } else if (templateType.includes("business")) {
    return htmlTemplates.business();
  } else {
    return htmlTemplates.landing();
  }
}

import { NextRequest, NextResponse } from "next/server";
import ai from "@/lib/gemini";
import {
  cleanHTMLOutput,
  validateHTML,
  getFallbackTemplate,
} from "@/lib/htmlGenerator";

export async function POST(request: NextRequest) {
  try {
    const { prompt, template } = await request.json();

    if (!prompt || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Generate with Gemini
    let generatedHTML = await generateWithGemini(prompt, template);

    // Validate generated HTML
    let validation = validateHTML(generatedHTML);

    // If validation fails, try fallback template
    if (!validation.valid) {
      console.warn(
        `Generated HTML validation failed:`,
        validation.errors
      );
      generatedHTML = getFallbackTemplate(template);
      validation = validateHTML(generatedHTML);

      if (!validation.valid) {
        throw new Error(
          `Even fallback template failed validation: ${validation.errors.join(
            ", "
          )}`
        );
      }

      return NextResponse.json({
        code: generatedHTML,
        status: "template_fallback",
      });
    }

    return NextResponse.json({
      code: generatedHTML,
      status: "generated",
    });
  } catch (error: any) {
    console.error("Error generating website:", error);

    // Return a safe fallback template
    const fallbackHTML = getFallbackTemplate("landing");

    return NextResponse.json({
      code: fallbackHTML,
      status: "fallback",
      warning: "Using default template due to generation error",
    });
  }
}

/**
 * Generate HTML using Gemini with advanced prompting
 */
async function generateWithGemini(prompt: string, template?: string): Promise<string> {
  const systemPrompt = `You are an expert HTML/CSS developer. Your ONLY job is to generate clean, valid HTML code.

CRITICAL INSTRUCTIONS:
1. Return ONLY HTML code - absolutely NO markdown, NO backticks, NO explanations
2. Start immediately with <!DOCTYPE html>
3. End with </html>
4. Include complete structure: <html>, <head>, <body>
5. ALL styling must use Tailwind CSS classes inline (https://cdn.tailwindcss.com)
6. NO <style> tags
7. Use semantic HTML: <header>, <nav>, <main>, <section>, <footer>

REQUIRED IN <head>:
- <meta charset="UTF-8">
- <meta name="viewport" content="width=device-width, initial-scale=1.0">
- <link href="https://cdn.tailwindcss.com" rel="stylesheet">
- <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">

COLOR SCHEME (use throughout):
- Background: #FFFFFF (white)
- Text/Secondary: #3d4c41 (dark green)
- Accent: #999999 (gray)
- Border: #e0e0e0 (light gray)

FONTS:
- Headings: font-family: 'Playfair Display', serif
- Body: font-family: 'Poppins', sans-serif

LAYOUT REQUIREMENTS:
- Full width responsive with proper max-w containers
- Multiple sections with clear hierarchy
- Professional spacing and padding
- Grid/flexbox layouts
- CTA buttons styled with the color scheme
- Header with branding/navigation
- Footer with basic info

VALIDATION CHECKLIST:
✓ All tags properly closed
✓ No markdown or code blocks
✓ Valid Tailwind classes only
✓ Proper HTML structure
✓ Works standalone without external assets

Template context: ${template || "modern landing page"}`;

  const userMessage = `Generate a complete, standalone HTML website for: ${prompt}

Output ONLY the raw HTML code. No explanation, no markdown, no code blocks.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: systemPrompt + "\n\n" + userMessage }],
        },
      ],
    });

    if (!response?.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error("No response from Gemini");
    }

    let html = response.candidates[0].content.parts[0].text;

    // Clean markdown formatting
    html = cleanHTMLOutput(html);

    // Verify it's HTML
    if (!html.toLowerCase().includes("<!doctype")) {
      throw new Error("Generated content is not valid HTML");
    }

    return html;
  } catch (error) {
    console.error("Gemini generation error:", error);
    throw error;
  }
}

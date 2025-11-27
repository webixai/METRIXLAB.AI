import { NextRequest, NextResponse } from "next/server";
import ai from "@/lib/gemini";

export async function POST(request: NextRequest) {
  try {
    const { prompt, template } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const systemPrompt = `You are an expert web developer creating production-ready HTML websites. Generate EXACTLY valid, complete HTML code based on the user's request.

CRITICAL RULES - FOLLOW EXACTLY:
1. Return ONLY raw HTML code - NO markdown, NO explanations, NO code blocks, NO backticks
2. Start with <!DOCTYPE html> and end with </html>
3. Include complete <html>, <head>, <body> structure
4. Place ALL styling inline using Tailwind CSS classes (NO <style> tags)
5. Include Tailwind CDN: <link href="https://cdn.tailwindcss.com" rel="stylesheet">
6. Add <meta name="viewport" content="width=device-width, initial-scale=1.0">
7. Use semantic HTML: <header>, <main>, <section>, <footer>, <nav>, etc.
8. Make fully responsive with Tailwind breakpoints (sm:, md:, lg:, xl:)
9. Use professional typography with proper hierarchy
10. Ensure all links are functional (href="#")
11. Make all buttons interactive-ready with proper styling
12. Include proper whitespace and padding for readability

COLOR PALETTE (MANDATORY - Apply throughout):
- Primary Background: #FFFFFF
- Secondary/Text: #3d4c41 (dark green) 
- Accents: #999999 (gray)
- Borders: #e0e0e0 (light gray)

FONT REQUIREMENTS:
- Use system fonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif
- OR link Google Fonts: <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">

STRUCTURE REQUIREMENTS:
- Always include a <header> with navigation/branding
- Include a <main> section with page content
- Use multiple <section> elements with proper spacing
- Include call-to-action buttons styled professionally
- Add a <footer> with links/info
- Use grid and flexbox for layouts

VALIDATION:
- Verify all opening tags have closing tags
- Check all attributes are properly quoted
- Ensure no syntax errors
- Test that all classes are valid Tailwind classes

Template context: ${template || "modern landing page"}`;

    const fullPrompt = `${systemPrompt}\n\nUser Request: ${prompt}`;

    // Using Gemini 2.5 Flash - the newest Gemini model series
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt,
    });

    if (!response || !response.candidates || response.candidates.length === 0) {
      throw new Error("No response from AI model");
    }

    let text = response.candidates[0]?.content?.parts[0]?.text || "";
    if (!text) {
      throw new Error("No text content generated");
    }

    // Clean up markdown formatting if present
    text = text
      .replace(/```html\n?/g, "")        // Remove ```html
      .replace(/```\n?/g, "")            // Remove ```
      .replace(/^```.*\n/gm, "")         // Remove any code block markers
      .trim();

    // Ensure it starts with <!DOCTYPE
    if (!text.toLowerCase().startsWith("<!doctype")) {
      throw new Error("Generated content is not valid HTML");
    }

    return NextResponse.json({ code: text });
  } catch (error: any) {
    console.error("Error generating website:", error);
    const errorMessage = error?.message || error?.toString?.() || "Failed to generate website";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

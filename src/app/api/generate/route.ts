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

    const systemPrompt = `You are an expert web developer and designer. Generate clean, modern, and responsive HTML code based on the user's request.

IMPORTANT RULES:
1. Return ONLY the HTML code, no explanations or markdown
2. Include inline Tailwind CSS classes for styling
3. Make it fully responsive and mobile-friendly
4. Use modern design principles with good spacing, typography, and colors
5. Include the full HTML structure with <!DOCTYPE html>, <html>, <head>, and <body> tags
6. Add a <meta name="viewport"> tag for mobile responsiveness
7. Include a CDN link to Tailwind CSS in the <head>
8. Make it visually appealing and professional
9. Use semantic HTML elements

COLOR PALETTE (MANDATORY - use these colors throughout):
- Primary Green: #A3A86D
- Warm Beige: #E1D5B8
- Soft Sand: #D6C7A7

Use these colors for backgrounds, text, accents, and buttons. Create a harmonious design with this earthy, sophisticated palette.

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

    const text = response.candidates[0]?.content?.parts[0]?.text;
    if (!text) {
      throw new Error("No text content generated");
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

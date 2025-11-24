import { NextRequest, NextResponse } from "next/server";
import openai from "@/lib/openai";

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

Template context: ${template || "modern landing page"}`;

    // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      max_completion_tokens: 4096,
    });

    const generatedCode = response.choices[0].message.content;

    return NextResponse.json({ code: generatedCode });
  } catch (error: any) {
    console.error("Error generating website:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate website" },
      { status: 500 }
    );
  }
}

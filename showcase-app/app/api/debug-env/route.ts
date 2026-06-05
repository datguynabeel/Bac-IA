import { NextResponse } from "next/server";

export async function GET() {
  const orKey = process.env.OPENROUTER_API_KEY || "";
  const geminiKey = process.env.GEMINI_API_KEY || "";
  return NextResponse.json({
    hasOpenRouter: !!orKey,
    openRouterLength: orKey.length,
    openRouterPrefix: orKey ? orKey.slice(0, 8) : "none",
    hasGemini: !!geminiKey,
    geminiLength: geminiKey.length,
    geminiPrefix: geminiKey ? geminiKey.slice(0, 8) : "none",
  });
}

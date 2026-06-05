import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "No OPENROUTER_API_KEY set" }, { status: 500 });
  }

  const models = [
    "meta-llama/llama-3.3-70b-instruct:free",
    "google/gemma-4-31b-it:free",
    "z-ai/glm-4.5-air:free"
  ];

  const results: Record<string, any> = {};

  for (const model of models) {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://siraj-three.vercel.app",
          "X-Title": "SIRAJ",
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: "Say 'OK'" }],
          temperature: 0.7,
          max_tokens: 10,
        }),
      });

      const status = response.status;
      const body = await response.text();

      results[model] = {
        status,
        body: body.slice(0, 500),
      };
    } catch (err: any) {
      results[model] = {
        error: err.message,
      };
    }
  }

  return NextResponse.json(results);
}

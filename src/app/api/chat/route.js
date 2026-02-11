export const runtime = "nodejs";

import Groq from "groq-sdk";
import { NextResponse } from "next/server";

/* ================= RATE LIMIT (in-memory) ================= */
const requests = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const windowTime = 60 * 1000; // 1 minute
  const limit = 10;

  if (!requests.has(ip)) {
    requests.set(ip, []);
  }

  const timestamps = requests.get(ip).filter((t) => now - t < windowTime);

  if (timestamps.length >= limit) return false;

  timestamps.push(now);
  requests.set(ip, timestamps);
  return true;
}

/* ================= POST: CHAT ================= */
export async function POST(req) {
  try {
    /* ---------- Rate limit ---------- */
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    /* ---------- Parse body ---------- */
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const cleanMessage = message.trim();

    if (!cleanMessage) {
      return NextResponse.json({ error: "Empty message" }, { status: 400 });
    }

    if (cleanMessage.length > 500) {
      return NextResponse.json(
        { error: "Message too long (max 500 characters)" },
        { status: 400 }
      );
    }

    /* ---------- Init Groq at runtime (CRITICAL FIX) ---------- */
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    /* ---------- Groq completion ---------- */
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0.5,
      max_tokens: 200,
      messages: [
        {
          role: "system",
          content: `
You are an AI assistant for Kaif Khan’s developer portfolio.

ABOUT KAIF:
- Full-stack developer skilled in React, Next.js, Node.js, MongoDB
- Strong in Data Structures & Algorithms and competitive programming
- Builds AI-integrated, production-ready web applications

RULES:
- Reply in 2–3 concise sentences
- Be professional, friendly, and recruiter-focused
- Encourage exploring projects or contacting Kaif
- If unrelated → politely say you don’t know
`,
        },
        {
          role: "user",
          content: cleanMessage,
        },
      ],
    });

    /* ---------- Safe reply extraction ---------- */
    const reply =
      completion?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I couldn't generate a response right now.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("❌ Chat API error:", error);

    return NextResponse.json(
      { error: "AI service unavailable. Please try again later." },
      { status: 500 }
    );
  }
}

/* ================= GET: HEALTH CHECK ================= */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Chat API is running",
    timestamp: new Date().toISOString(),
  });
}



// import Groq from "groq-sdk";
// import { NextResponse } from "next/server";

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });

// export async function POST(req) {
//   try {
//     const { message } = await req.json();

//     if (!message) {
//       return NextResponse.json({ error: "Message required" }, { status: 400 });
//     }

//     const completion = await groq.chat.completions.create({
//       model: "llama-3.1-8b-instant", // ✅ working free model
//       temperature: 0.5,
//       max_tokens: 200,
//       messages: [
//         {
//           role: "system",
//           content: `
// You are an AI assistant for Kaif Khan's developer portfolio.

// Rules:
// - Be concise (2-3 sentences max)
// - Highlight Kaif’s skills in React, Next.js, Node.js, DSA, and AI
// - Encourage recruiters to view projects or contact section
// - If question unrelated to portfolio → say politely you don’t know
//           `,
//         },
//         {
//           role: "user",
//           content: message,
//         },
//       ],
//     });

//     return NextResponse.json({
//       reply: completion.choices[0].message.content,
//     });
//   } catch (error) {
//     console.error("Chat API error:", error);

//     return NextResponse.json(
//       { error: "AI service unavailable" },
//       { status: 500 }
//     );
//   }
// }

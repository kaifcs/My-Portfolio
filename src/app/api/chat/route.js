import Groq from "groq-sdk";
import fs from "fs/promises";
import path from "path";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    // 1️⃣ Parse request body
    const { message } = await req.json();

    // 2️⃣ Validate input
    if (!message || typeof message !== "string") {
      return new Response(
        JSON.stringify({ error: "Message is required." }),
        { status: 400 }
      );
    }

    // 3️⃣ Read resume content safely (async)
    const resumePath = path.join(process.cwd(), "src", "data", "resume.md");
    const resumeText = await fs.readFile(resumePath, "utf-8");

    // 4️⃣ Create Groq chat completion
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content: `
You are Kaif Khan's portfolio assistant.

Rules:
- Answer ONLY using the resume content below.
- If the answer is not present in the resume but is related to Kaif's profile, answer professionally.
- Otherwise reply: "Sorry, I do not have information about that."
- Keep responses concise, friendly, and professional.

Resume:
${resumeText}
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    // 5️⃣ Safe reply extraction
    const reply =
      completion?.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    // 6️⃣ Return response
    return new Response(JSON.stringify({ reply }), { status: 200 });
  } catch (error) {
    console.error("Chat API error:", error);

    return new Response(
      JSON.stringify({ error: "Failed to generate response." }),
      { status: 500 }
    );
  }
}

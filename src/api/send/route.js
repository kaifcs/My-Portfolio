import { createElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function ContactEmail({ name, email, message }) {
  return (
    <div>
      <h2>New Portfolio Contact Message</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Message:</strong>
      </p>

      <p>{message}</p>
    </div>
  );
}

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["kk.kaifkhan05@gmail.com"],
      subject: `New message from ${name}`,
      react: createElement(ContactEmail, {
        name,
        email,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({
      success: true,
      data,
    });
  } catch {
    return Response.json(
      {
        error: "Something went wrong while sending email.",
      },
      {
        status: 500,
      }
    );
  }
}
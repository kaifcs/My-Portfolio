import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // 1️⃣ Get data from request body
    const { name, email, message } = await req.json();

    // 2️⃣ Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // 3️⃣ Send email
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // must be verified sender
      to: ["kaif.khan.28.05.2005@gmail.com"], // your email
      subject: `New message from ${name}`,
      react: (
        <div>
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Message:</strong></p>
          <p>{message}</p>
        </div>
      ),
    });

    // 4️⃣ Handle error
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    // 5️⃣ Success response
    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { error: "Something went wrong while sending email." },
      { status: 500 }
    );
  }
}

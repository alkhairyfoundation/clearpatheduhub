type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
  interest?: string | null;
};

export async function sendContactNotification(payload: ContactPayload) {
  const { name, phone, email, message, interest } = payload;

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const adminEmail = process.env.ADMIN_EMAIL || "cpcibadan@gmail.com";

  if (!host || !user || !pass) {
    console.log("Email not sent — SMTP not configured");
    console.log("Would notify:", { adminEmail, name, phone, email, interest });
    return;
  }

  const nodemailer = await import("nodemailer");

  const transporter = nodemailer.default.createTransport({
    host,
    port: Number(port) || 587,
    secure: Number(port) === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"ClearPath Contact" <${user}>`,
    to: adminEmail,
    subject: `New Contact Form Submission from ${name}`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Interest: ${interest || "Not specified"}`,
      `Message: ${message}`,
    ].join("\n"),
  });
}

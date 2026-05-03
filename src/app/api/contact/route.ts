import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message, interest } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Name, phone, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Store submission in database
    const submission = await db.contactSubmission.create({
      data: {
        name,
        phone,
        email,
        message,
        interest: interest || null,
      },
    });

    // Log the submission
    console.log("Contact form submission stored:", {
      id: submission.id,
      name,
      phone,
      email,
      interest: interest || "Not specified",
      timestamp: submission.createdAt.toISOString(),
    });

    // TODO: In production, also send email notification:
    // - Admin notification email
    // - Auto-reply to the enquirer
    // Uncomment and configure when email service is set up:
    //
    // await sendNotificationEmail({ name, phone, email, message, interest });
    // await sendAutoReplyEmail({ name, email });

    return NextResponse.json(
      { success: true, message: "Thank you for your message. We will get back to you within one business day." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

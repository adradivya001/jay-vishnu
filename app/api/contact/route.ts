import { NextResponse } from 'next/server';
import { validatePhone, validateEmail } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, subject, message } = body;

    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name.";
    }

    if (!phone || !validatePhone(phone)) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (email && !validateEmail(email)) {
      errors.email = "Please provide a valid email address.";
    }

    if (!subject || subject.trim().length < 3) {
      errors.subject = "Please enter an enquiry subject.";
    }

    if (!message || message.trim().length < 10) {
      errors.message = "Please enter your message (at least 10 characters).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, message: "Please check the highlighted details.", errors },
        { status: 400 }
      );
    }

    console.log("[Hospital Contact Enquiry Received]:", {
      fullName,
      phone,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. Our reception team will review your enquiry and contact you promptly.",
      data: {
        enquiryId: `ENQ-${Date.now().toString().slice(-6)}`
      }
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "We encountered an issue submitting your enquiry. Please reach our reception at +91 97032 15567." },
      { status: 500 }
    );
  }
}

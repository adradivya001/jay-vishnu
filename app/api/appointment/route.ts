import { NextResponse } from 'next/server';
import { validatePhone, validateEmail } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, speciality, doctor, preferredDate, preferredTime, message } = body;

    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      errors.fullName = "Please enter patient name.";
    }

    if (!phone || !validatePhone(phone)) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (email && !validateEmail(email)) {
      errors.email = "Please provide a valid email address.";
    }

    if (!speciality) {
      errors.speciality = "Please select a preferred speciality (Neurology or Ophthalmology).";
    }

    if (!preferredDate) {
      errors.preferredDate = "Please choose a preferred consultation date.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, message: "Please correct the highlighted fields.", errors },
        { status: 400 }
      );
    }

    console.log("[Jay Vishnu Hospital Appointment Enquiry]:", {
      fullName,
      phone,
      email,
      speciality,
      doctor,
      preferredDate,
      preferredTime,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting Jay Vishnu Hospital. Your appointment request has been received. Our team will contact you to confirm availability.",
      data: {
        referenceId: `JVH-${Date.now().toString().slice(-6)}`,
        patientName: fullName
      }
    });
  } catch (error) {
    console.error("Appointment API error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while processing your request. Please call +91 97032 15567 directly." },
      { status: 500 }
    );
  }
}

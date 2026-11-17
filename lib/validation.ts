export interface AppointmentSubmission {
  fullName: string;
  phone: string;
  email?: string;
  department: string;
  doctor?: string;
  preferredDate: string;
  preferredTime: string;
  reason?: string;
}

export interface ContactSubmission {
  fullName: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}

// Client-side validation helpers
export function validatePhone(phone: string): boolean {
  // Indian 10-digit mobile number or with +91
  const cleaned = phone.replace(/[\s-]/g, '');
  const indianMobileRegex = /^(\+91)?[6-9]\d{9}$/;
  return indianMobileRegex.test(cleaned);
}

export function validateEmail(email: string): boolean {
  if (!email) return true; // Optional in many forms
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

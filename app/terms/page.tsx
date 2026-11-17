import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { HOSPITAL_DATA } from '@/data/hospital';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms of Use and website disclaimer for Jay Vishnu Hospital in Anantapur, Andhra Pradesh.'
};

export default function TermsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Terms and Conditions' }]} />

      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#713F83] bg-[#F4EDF7] px-2.5 py-1 rounded-full">
              Legal & Disclaimers
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Effective Date: November 2026 • Jay Vishnu Hospital, Anantapur
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by the following Terms and Conditions of use. If you do not agree with these terms, please refrain from using this website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">2. Medical Disclaimer</h2>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
              <strong>CRITICAL NOTICE:</strong> The content on this website—including text, descriptions of conditions, doctor profiles, and general medical discussions—is provided for general informational and educational purposes only. It does NOT constitute formal medical advice, clinical diagnosis, or individualized treatment plans.
            </div>
            <p>
              Always seek the advice of your qualified physician or healthcare specialist regarding any medical condition. Never disregard professional medical guidance or delay seeking care because of information read on this website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">3. Appointment Requests & Cancellations</h2>
            <p>
              Submitting an online appointment enquiry via this website does not guarantee an immediate confirmed booking or guaranteed consultation slot. Appointments are confirmed only when hospital reception staff contacts the patient by telephone or SMS to confirm doctor availability and allocate a token number.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">4. Emergency Situations</h2>
            <p>
              This website and its digital forms are NOT monitored for real-time medical emergencies. If you are experiencing a medical emergency, acute chest pain, sudden paralysis, severe trauma, or loss of consciousness, you must immediately call 108 or go to the nearest emergency healthcare department.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">5. Limitation of Liability</h2>
            <p>
              {HOSPITAL_DATA.name} and its healthcare staff shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the information, forms, or navigation links contained on this website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">6. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts in Anantapur, Andhra Pradesh.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

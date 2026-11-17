import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { HOSPITAL_DATA } from '@/data/hospital';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and patient health data protection practices at Jay Vishnu Hospital in Anantapur.'
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#713F83] bg-[#F4EDF7] px-2.5 py-1 rounded-full">
              Legal & Data Protection
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Last updated: November 2026 • Jay Vishnu Hospital, Anantapur
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
            <p>
              At <strong>{HOSPITAL_DATA.name}</strong> ("we," "our," or "hospital"), we respect the privacy of our patients, visitors, and users of our website. This Privacy Policy outlines our procedures regarding the collection, use, and safeguarding of information gathered via our digital platform.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide when using our website services:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
              <li><strong>Contact Information:</strong> Full name, phone number, and optional email address submitted via appointment or enquiry forms.</li>
              <li><strong>Appointment Preferences:</strong> Preferred consultation date, department, doctor, and general symptoms or reason for visit.</li>
              <li><strong>Technical Logs:</strong> Standard web analytics information such as browser type, device information, and IP address for security and performance optimisation.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">3. Purpose of Processing</h2>
            <p>
              Information collected through this website is strictly utilized to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
              <li>Coordinate and confirm outpatient doctor consultations and tokens.</li>
              <li>Respond directly to medical or administrative enquiries submitted by patients or their families.</li>
              <li>Maintain patient communication and verify appointment schedules via phone call or SMS.</li>
              <li>Comply with applicable healthcare regulations and administrative requirements in India.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">4. Medical Confidentiality & Security</h2>
            <p>
              We treat all patient communication with strict medical confidentiality. We do not sell, rent, or trade your personal or health contact information to commercial third parties or external marketing agencies. Data submitted through our forms is processed securely for appointment coordination purposes only.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">5. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding our privacy practices, you may reach our administration team at:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm">
              <p><strong>{HOSPITAL_DATA.name}</strong></p>
              <p>{HOSPITAL_DATA.address}</p>
              <p>Phone: {HOSPITAL_DATA.displayPhone}</p>
              <p>Email: {HOSPITAL_DATA.email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

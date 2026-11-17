import type { Metadata } from 'next';
import { Suspense } from 'react';
import { 
  Phone, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AppointmentForm from '@/components/shared/AppointmentForm';
import { HOSPITAL_DATA } from '@/data/hospital';
import { ScrollReveal, HeadingReveal, HoverCard } from '@/components/motion/MotionReveal';

export const metadata: Metadata = {
  title: 'Request an Appointment | Jay Vishnu Hospital',
  description: 'Request a medical consultation in Neurology or Ophthalmology at Jay Vishnu Hospital in Sai Nagar, Anantapur.'
};

import PageBanner from '@/components/shared/PageBanner';

export default function AppointmentPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Request an Appointment' }]} />

      {/* Standard Centered Page Banner */}
      <PageBanner
        eyebrow="Consultation Enquiries"
        title="Request an Appointment"
        subtitle="Plan your visit to Jay Vishnu Hospital by submitting an appointment enquiry for Neurology or Ophthalmology. Our hospital reception will coordinate doctor availability and contact you with confirmation."
      />

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left" delay={0.1} amount={0.2}>
                <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading form...</div>}>
                  <AppointmentForm />
                </Suspense>
              </ScrollReveal>
            </div>

            {/* Sidebar / Instructions Column */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal direction="right" delay={0.15} amount={0.2}>
                
                {/* How it works */}
                <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#713F83]" />
                    <span>Appointment Request Process</span>
                  </h3>

                  <ol className="space-y-4 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#F4EDF7] text-[#713F83] font-bold text-xs flex items-center justify-center shrink-0">
                        1
                      </span>
                      <div>
                        <strong className="block text-slate-900">Submit Your Enquiry:</strong>
                        Choose your preferred speciality (Neurology or Ophthalmology), preferred doctor, and date.
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#F4EDF7] text-[#713F83] font-bold text-xs flex items-center justify-center shrink-0">
                        2
                      </span>
                      <div>
                        <strong className="block text-slate-900">Hospital Verification:</strong>
                        Hospital staff will review doctor availability for your chosen date.
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#F4EDF7] text-[#713F83] font-bold text-xs flex items-center justify-center shrink-0">
                        3
                      </span>
                      <div>
                        <strong className="block text-slate-900">Confirmation Call:</strong>
                        Our team will contact you to confirm the consultation timing and arrangements.
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#F4EDF7] text-[#713F83] font-bold text-xs flex items-center justify-center shrink-0">
                        4
                      </span>
                      <div>
                        <strong className="block text-slate-900">Hospital Visit:</strong>
                        Visit Jay Vishnu Hospital in Sai Nagar, Anantapur for your consultation.
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Direct Call */}
                <div className="mt-6">
                  <HoverCard lift={-4}>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                      <h4 className="font-bold text-slate-900 text-sm">
                        Enquire Over Phone
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        For current doctor availability and appointment enquiries, you can also reach our reception desk directly.
                      </p>
                      <div className="pt-1">
                        <a
                          href={`tel:${HOSPITAL_DATA.phone}`}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#398EB8]" />
                          <span>Call: {HOSPITAL_DATA.displayPhone}</span>
                        </a>
                      </div>
                    </div>
                  </HoverCard>
                </div>

                {/* Emergency Condition Alert */}
                <div className="mt-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Medical Emergency?</strong> Submitting this online enquiry is not intended for emergency situations. Please seek emergency medical care immediately or call 108.
                  </span>
                </div>

              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

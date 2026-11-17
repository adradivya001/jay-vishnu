'use client';

import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import { HOSPITAL_DATA } from '@/data/hospital';
import { ScrollReveal, HeadingReveal } from '@/components/motion/MotionReveal';

export default function AppointmentCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#713F83] via-[#5C326B] to-[#398EB8] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60" />

      <div className="w-full px-4 sm:px-8 lg:px-12 text-center relative z-10 space-y-6">
        
        <ScrollReveal direction="down" delay={0.05} amount={0.2}>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-[#DDEEF6] text-xs font-semibold border border-white/20">
            Jay Vishnu Hospital
          </span>
        </ScrollReveal>

        <HeadingReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            Looking for a Medical Consultation?
          </h2>
        </HeadingReveal>

        <ScrollReveal direction="up" delay={0.15} amount={0.2}>
          <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed">
            Contact Jay Vishnu Hospital to enquire about available doctors, consultation services, and appointment arrangements in Sai Nagar, Anantapur.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} amount={0.2}>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#713F83] font-bold hover:bg-[#FAF8FC] shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-[#713F83]" />
              <span>Request Appointment</span>
            </Link>

            <a
              href={`tel:${HOSPITAL_DATA.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/30 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[#DDEEF6]" />
              <span>Call Hospital: {HOSPITAL_DATA.displayPhone}</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

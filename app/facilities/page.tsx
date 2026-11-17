import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Calendar, 
  Phone, 
  AlertCircle 
} from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SectionHeading from '@/components/shared/SectionHeading';
import { FACILITIES_DATA, HOSPITAL_DATA } from '@/data/hospital';
import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem, HoverCard } from '@/components/motion/MotionReveal';

export const metadata: Metadata = {
  title: 'Hospital Services and Facilities | Jay Vishnu Hospital',
  description: 'Explore the hospital environment, consultation areas, diagnostic services, and general operation theatre facilities at Jay Vishnu Hospital in Anantapur.'
};

import PageBanner from '@/components/shared/PageBanner';

export default function FacilitiesPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Facilities' }]} />

      {/* Standard Centered Page Banner */}
      <PageBanner
        eyebrow="Hospital Infrastructure"
        title="Our Hospital Facilities"
        subtitle="We provide a clean, supportive, and compassionate environment for patients and their accompanying families in Sai Nagar, Anantapur."
      />

      {/* 4 Confirmed Facility Sections */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <SectionHeading
            badge="Hospital Facilities"
            badgeColor="teal"
            title="Hospital Setting & Patient Care Areas"
            description="Our hospital setting, consultation areas, diagnostic services, and general OT facilities as stated in our official hospital profile."
          />

          <StaggerContainer delayChildren={0.1} staggerChildren={0.12} amount={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {FACILITIES_DATA.map((facility) => (
                <StaggerItem key={facility.id} direction="up">
                  <HoverCard lift={-6} className="h-full">
                    <div className="h-full bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                      <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                        <img
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-800 shadow-sm">
                          {facility.category}
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">
                            {facility.title}
                          </h3>
                          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                            {facility.fullDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Verification & Information Notice */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-16 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 max-w-4xl mx-auto flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#713F83] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-1">Hospital Services Confirmation:</strong>
                <span>
                  The facilities and services displayed reflect those listed in Jay Vishnu Hospital's public business description. For specific enquiries regarding surgical arrangements, diagnostic investigations, or consultation timings, please contact the hospital directly at {HOSPITAL_DATA.displayPhone}.
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <div className="mt-12 text-center">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#713F83] hover:bg-[#5C326B] text-white font-semibold text-sm transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Request an Appointment</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

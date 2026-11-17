'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import DoctorCard from '@/components/shared/DoctorCard';
import { DOCTORS_DATA } from '@/data/hospital';
import { StaggerContainer, StaggerItem, ScrollReveal } from '@/components/motion/MotionReveal';

export default function DoctorsPreview() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#E8E3EC]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Hospital Doctors"
            badgeColor="purple"
            title="Our Doctors"
            description="Consultations led by acclaimed neurologist Dr. Bharat Vishnu Reddy and ophthalmologist Dr. Leela Padmini."
            center={false}
          />
          <ScrollReveal direction="left" delay={0.15}>
            <div className="mt-4 md:mt-0 mb-6 md:mb-12">
              <Link
                href="/doctors"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#713F83] hover:text-[#398EB8] transition-colors"
              >
                <span>View Doctor Profiles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <StaggerContainer delayChildren={0.1} staggerChildren={0.15} amount={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {DOCTORS_DATA.map((doctor) => (
              <StaggerItem key={doctor.id} direction="up">
                <DoctorCard doctor={doctor} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

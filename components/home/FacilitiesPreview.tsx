'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import FacilityCard from '@/components/shared/FacilityCard';
import { FACILITIES_DATA } from '@/data/hospital';
import { StaggerContainer, StaggerItem, ScrollReveal } from '@/components/motion/MotionReveal';

export default function FacilitiesPreview() {
  return (
    <section className="py-16 sm:py-20 bg-[#EAF4FA]/40 border-t border-[#E8E3EC]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Hospital Environment"
            badgeColor="teal"
            title="Designed Around Patient Comfort"
            description="Explore our outpatient facilities, consultation chambers, and comfortable reception in Sai Nagar, Anantapur."
            center={false}
          />
          <ScrollReveal direction="left" delay={0.15}>
            <div className="mt-4 md:mt-0 mb-6 md:mb-12">
              <Link
                href="/facilities"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#713F83] hover:text-[#398EB8] transition-colors"
              >
                <span>View All Facilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <StaggerContainer delayChildren={0.1} staggerChildren={0.1} amount={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES_DATA.slice(0, 4).map((facility) => (
              <StaggerItem key={facility.id} direction="up">
                <FacilityCard facility={facility} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

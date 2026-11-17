'use client';

import { Brain, Eye, Activity, HeartHandshake } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { StaggerContainer, StaggerItem, HoverCard } from '@/components/motion/MotionReveal';

const features = [
  {
    icon: Brain,
    title: "1. Neurological Consultations",
    description: "Medical consultations focused on neurological health and related concerns."
  },
  {
    icon: Eye,
    title: "2. Eye Care Services",
    description: "Eye checkups and cataract surgery services listed by Jay Vishnu Hospital."
  },
  {
    icon: Activity,
    title: "3. Diagnostic Services",
    description: "Diagnostic services to support medical evaluation and healthcare consultations."
  },
  {
    icon: HeartHandshake,
    title: "4. Patient-Focused Care",
    description: "A healthcare environment focused on patient attention, communication, and support."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-[#EAF4FA] border-y border-[#E8E3EC]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <SectionHeading
          badge="Healthcare Focus"
          badgeColor="purple"
          title="Why Patients Choose Jay Vishnu Hospital"
          description="Factual, patient-focused healthcare services based on authentic hospital capabilities."
        />

        <StaggerContainer delayChildren={0.15} staggerChildren={0.1} amount={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <StaggerItem key={index} direction="up">
                  <HoverCard lift={-6} className="h-full">
                    <div className="h-full bg-white p-6 rounded-2xl border border-[#E8E3EC] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#F4EDF7] text-[#713F83] flex items-center justify-center mb-5 border border-[#EDE2F2]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#283440] mb-2 font-serif">
                          {feat.title}
                        </h3>
                        <p className="text-sm text-[#687582] leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

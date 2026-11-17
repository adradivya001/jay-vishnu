'use client';

import { PhoneCall, CalendarCheck, MapPin, UserCheck } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { StaggerContainer, StaggerItem, HoverCard } from '@/components/motion/MotionReveal';

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "1. Contact Hospital",
    description: "Reach our hospital reception through phone or complete the online appointment enquiry form."
  },
  {
    step: "02",
    icon: CalendarCheck,
    title: "2. Enquire About Appointments",
    description: "Share your details, preferred speciality (Neurology or Ophthalmology), and preferred date."
  },
  {
    step: "03",
    icon: MapPin,
    title: "3. Visit the Hospital",
    description: "Visit our Sai Nagar hospital at your confirmed consultation timing and check in at the reception."
  },
  {
    step: "04",
    icon: UserCheck,
    title: "4. Receive Medical Consultation",
    description: "Consult the appropriate doctor, discuss your health history, and receive clinical guidance."
  }
];

export default function PatientJourney() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF8FC] border-t border-[#E8E3EC]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <SectionHeading
          badge="Simple Process"
          badgeColor="purple"
          title="Your Healthcare Journey Made Simple"
          description="A clear, organized four-step path designed to make your hospital visit smooth, comfortable, and timely."
        />

        <StaggerContainer delayChildren={0.15} staggerChildren={0.12} amount={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={index} direction="up">
                  <HoverCard lift={-5} className="h-full">
                    <div className="h-full bg-white p-6 rounded-2xl border border-[#E8E3EC] shadow-xs relative flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-black text-[#EDE2F2]">
                            {item.step}
                          </span>
                          <div className="w-10 h-10 rounded-xl bg-[#F4EDF7] text-[#713F83] flex items-center justify-center border border-[#EDE2F2]">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>
                        <h3 className="text-base font-serif font-bold text-[#283440] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#687582] leading-relaxed">
                          {item.description}
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

import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Calendar, 
  Phone,
  UserCheck
} from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { DOCTORS_DATA, HOSPITAL_DATA } from '@/data/hospital';
import { ScrollReveal, HeadingReveal, HoverCard, StaggerContainer, StaggerItem } from '@/components/motion/MotionReveal';

export const metadata: Metadata = {
  title: 'Our Doctors | Jay Vishnu Hospital, Anantapur',
  description: 'Meet the doctors at Jay Vishnu Hospital in Anantapur: Dr. Bharat Vishnu Reddy (Neurology) and Dr. Leela Padmini (Ophthalmology).'
};

import PageBanner from '@/components/shared/PageBanner';

export default function DoctorsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Our Doctors' }]} />

      {/* Standard Centered Page Banner */}
      <PageBanner
        eyebrow="Hospital Medical Team"
        title="Our Doctors"
        subtitle="Meet the medical professionals associated with Jay Vishnu Hospital in Sai Nagar, Anantapur. Patients can contact the hospital to enquire about doctor consultation availability and schedule an appointment."
      />

      {/* Doctors Detailed Listing: Side-by-Side Cards */}
      <section className="py-16 sm:py-20 bg-[#FAF8FC]">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <StaggerContainer delayChildren={0.1} staggerChildren={0.15} amount={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              {DOCTORS_DATA.map((doctor) => (
                <StaggerItem key={doctor.id} direction="up" className="h-full">
                  <HoverCard lift={-6} className="h-full">
                    <div 
                      id={doctor.id}
                      className="scroll-mt-28 h-full bg-white rounded-3xl border border-[#E8E3EC] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Portrait & Badges */}
                        <div className="relative h-72 sm:h-80 w-full bg-[#FAF8FC] overflow-hidden">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#283440]/60 via-transparent to-transparent" />
                          
                          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-[#713F83] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs border border-[#EDE2F2]">
                            <UserCheck className="w-3.5 h-3.5 text-[#398EB8]" />
                            <span>{doctor.speciality} Specialist</span>
                          </div>

                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h2 className="font-serif text-2xl font-bold leading-tight drop-shadow-sm">
                              {doctor.name}
                            </h2>
                            <p className="text-xs text-[#DDEEF6] font-medium mt-0.5">
                              {doctor.speciality} · Jay Vishnu Hospital
                            </p>
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 sm:p-7 space-y-4">
                          <p className="text-sm text-[#687582] leading-relaxed">
                            {doctor.profileDescription}
                          </p>

                          <div className="p-3.5 rounded-xl bg-[#EAF4FA]/50 border border-[#DDEEF6] text-xs text-[#283440]">
                            <p>
                              <strong className="text-[#398EB8]">Consultations:</strong> Please enquire for updated availability and schedules.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action CTAs */}
                      <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row gap-3">
                        <Link
                          href={`/appointment?doctor=${encodeURIComponent(doctor.name)}&department=${encodeURIComponent(doctor.speciality)}`}
                          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#713F83] hover:bg-[#5C326B] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs hover:-translate-y-0.5"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>Book Consultation</span>
                        </Link>
                        <a
                          href={`tel:${HOSPITAL_DATA.phone}`}
                          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#E8E3EC] hover:bg-[#FAF8FC] text-[#283440] text-xs sm:text-sm font-medium transition-colors"
                        >
                          <Phone className="w-4 h-4 text-[#398EB8]" />
                          <span>Contact Hospital</span>
                        </a>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}

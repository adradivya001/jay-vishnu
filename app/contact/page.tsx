'use client';

import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Compass, 
  Calendar,
  MessageCircle,
  Building,
  ShieldCheck,
  CalendarCheck,
  CheckCircle2
} from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { HOSPITAL_DATA } from '@/data/hospital';
import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem, HoverCard } from '@/components/motion/MotionReveal';
import PageBanner from '@/components/shared/PageBanner';

const visitGuidelines = [
  {
    step: "01",
    icon: MapPin,
    title: "Central Location",
    description: `Conveniently situated at ${HOSPITAL_DATA.address.split(',')[0]}, Sai Nagar, Anantapur. Accessible ground-floor reception with easy patient drop-off.`
  },
  {
    step: "02",
    icon: Clock,
    title: "Structured Timings",
    description: "Daily OPD and diagnostic consultations available. Please verify doctor-specific consultation hours with reception prior to your visit."
  },
  {
    step: "03",
    icon: CalendarCheck,
    title: "Appointment Arrangements",
    description: "Advance booking is recommended for neurological evaluations and ophthalmology consultations to ensure minimal waiting time."
  },
  {
    step: "04",
    icon: Phone,
    title: "Contact Availability",
    description: `Direct reception desk phone (${HOSPITAL_DATA.displayPhone}) available during clinic hours for instant scheduling and location guidance.`
  }
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <Breadcrumbs items={[{ label: 'Contact & Appointments' }]} />

      {/* 1. Header Banner */}
      <PageBanner
        eyebrow="REACH OUT TO OUR HOSPITAL"
        title="Contact & Appointments"
        subtitle="Have questions about doctor availability, consultation hours, or clinic directions? We are here to assist you every step of the way."
      />

      {/* 2. Main Location & Interactive Map Section */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Details Card (45–50%) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <ScrollReveal direction="left" delay={0.1} amount={0.2} className="h-full flex flex-col justify-between space-y-6">
                <div>
                  {/* Eyebrow badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF5F1] text-[#087F83] text-[11px] font-bold uppercase tracking-wider border border-[#65C9BA]/40 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087F83]" />
                    HOSPITAL LOCATION & HOURS
                  </span>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183B45] tracking-tight mt-1 leading-snug">
                    {HOSPITAL_DATA.name}
                  </h2>

                  {/* Info points */}
                  <div className="mt-6 space-y-5 text-sm">
                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#EAF9F7] text-[#087F83] flex items-center justify-center shrink-0 border border-[#DDF5F1]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-xs uppercase font-bold text-[#183B45] tracking-wide mb-0.5">
                          Verified Physical Address
                        </strong>
                        <p className="text-[#45666B] leading-relaxed text-xs sm:text-sm">
                          {HOSPITAL_DATA.address}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#EAF9F7] text-[#087F83] flex items-center justify-center shrink-0 border border-[#DDF5F1]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-xs uppercase font-bold text-[#183B45] tracking-wide mb-0.5">
                          Direct Hospital Helpdesk
                        </strong>
                        <a 
                          href={`tel:${HOSPITAL_DATA.phone}`}
                          className="font-serif text-lg font-bold text-[#087F83] hover:underline"
                        >
                          {HOSPITAL_DATA.displayPhone}
                        </a>
                        <p className="text-[11px] text-[#45666B] mt-0.5">
                          Available Monday to Saturday during consultation hours.
                        </p>
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#EAF9F7] text-[#087F83] flex items-center justify-center shrink-0 border border-[#DDF5F1]">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-xs uppercase font-bold text-[#183B45] tracking-wide mb-0.5">
                          Working & Consultation Hours
                        </strong>
                        <p className="text-[#45666B] text-xs sm:text-sm">
                          {HOSPITAL_DATA.timingsNotice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4 Action Buttons matching the reference */}
                <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3">
                  {/* Book Appointment (Solid Teal/Crimson in reference) */}
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#087F83] hover:bg-[#06676A] text-white text-xs font-bold transition-all shadow-sm hover:-translate-y-0.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>Book Appointment</span>
                  </Link>

                  {/* Get Directions (Outlined) */}
                  <a
                    href={HOSPITAL_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#DDF5F1] bg-white hover:bg-[#EAF9F7] text-[#183B45] text-xs font-semibold transition-all hover:-translate-y-0.5 shadow-xs"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#087F83]" />
                    <span>Get Directions</span>
                  </a>

                  {/* Call Now (Outlined) */}
                  <a
                    href={`tel:${HOSPITAL_DATA.phone}`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#DDF5F1] bg-white hover:bg-[#EAF9F7] text-[#183B45] text-xs font-semibold transition-all hover:-translate-y-0.5 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#087F83]" />
                    <span>Call Now</span>
                  </a>

                  {/* WhatsApp Us (Soft Green Pill) */}
                  <a
                    href={`https://wa.me/919703215567?text=${encodeURIComponent('Hello Jay Vishnu Hospital, I would like to enquire about consultation timings.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all shadow-xs hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Map Card (50–55%) */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" delay={0.15} amount={0.2} className="h-full">
                <div className="h-full min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden border border-[#DDF5F1] shadow-xs relative bg-[#FAF8FC]">
                  <iframe
                    src={HOSPITAL_DATA.googleMapsEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '420px' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jay Vishnu Hospital Anantapur Google Maps"
                    className="w-full h-full"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* 3. "What to Expect for Your Visit" Section (4 Column Grid with step numbers) */}
      <section className="py-16 sm:py-20 bg-[#FAF8FC] border-t border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal direction="down" delay={0.05}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF5F1] text-[#087F83] text-[11px] font-bold uppercase tracking-wider border border-[#65C9BA]/40 mb-3">
                ESSENTIAL VISIT INFORMATION
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183B45] tracking-tight">
                What to Expect for Your Visit
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <p className="mt-3 text-sm text-[#45666B] leading-relaxed">
                Helpful guidelines designed to make your hospital consultation smooth, punctual, and comfortable.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer delayChildren={0.1} staggerChildren={0.1} amount={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {visitGuidelines.map((item, index) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={index} direction="up" className="h-full">
                    <HoverCard lift={-5} className="h-full">
                      <div className="h-full bg-white p-6 sm:p-7 rounded-2xl border border-[#E8E3EC] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-[#EAF9F7] text-[#087F83] flex items-center justify-center border border-[#DDF5F1]">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-xs font-bold text-[#65C9BA]">
                              {item.step}
                            </span>
                          </div>

                          <h3 className="font-serif text-base font-bold text-[#183B45] mb-2">
                            {item.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-[#45666B] leading-relaxed">
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

    </div>
  );
}

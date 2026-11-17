'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Phone, 
  ChevronDown, 
  CheckCircle2, 
  UserCheck, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Compass
} from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { HOSPITAL_DATA } from '@/data/hospital';
import { ServiceDetail } from '@/data/services-detail';
import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem, HoverCard } from '@/components/motion/MotionReveal';
import { motion, AnimatePresence } from 'framer-motion';

const quickNavItems = [
  { id: 'about', label: 'About' },
  { id: 'overview', label: 'Service Overview' },
  { id: 'covers', label: 'What It Covers' },
  { id: 'guidance', label: 'Patient Guidance' },
  { id: 'specialist', label: 'Doctor / Specialist' },
  { id: 'faqs', label: 'FAQs' }
];

interface ServiceDetailPageViewProps {
  service: ServiceDetail;
  breadcrumbCategory: string;
}

export default function ServiceDetailPageView({ service, breadcrumbCategory }: ServiceDetailPageViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeNav, setActiveNav] = useState('about');

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white">
      {/* =========================================================================
          SECTION 2: BREADCRUMB & SERVICE HERO (2-COLUMN)
          ========================================================================= */}
      <Breadcrumbs items={[
        { label: breadcrumbCategory, href: '/departments' },
        { label: service.title }
      ]} />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#EAF9F7] to-[#DDF5F1]/30 py-12 sm:py-16 lg:py-20 border-b border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (55%) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <ScrollReveal direction="down" delay={0.05}>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF5F1] text-[#087F83] text-[11px] font-bold uppercase tracking-wider border border-[#65C9BA]/40">
                  <span className="w-2 h-2 rounded-full bg-[#087F83] animate-pulse" />
                  {service.categoryLabel}
                </span>
              </ScrollReveal>

              <HeadingReveal delay={0.1}>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183B45] leading-[1.2] tracking-tight">
                  {service.title}
                </h1>
              </HeadingReveal>

              <ScrollReveal direction="up" delay={0.15}>
                <p className="text-sm sm:text-base text-[#45666B] leading-relaxed max-w-2xl font-normal">
                  {service.shortDescription}
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Link
                    href={`/appointment?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#087F83] hover:bg-[#06676A] transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Book an Appointment</span>
                  </Link>

                  <a
                    href={`tel:${HOSPITAL_DATA.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#183B45] hover:text-[#087F83] bg-white hover:bg-[#EAF9F7] border border-[#65C9BA]/50 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4 text-[#087F83]" />
                    <span>Contact Hospital</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column Visual (45%) */}
            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal direction="scale" delay={0.15} className="w-full max-w-[480px]">
                <div className="rounded-3xl overflow-hidden border border-[#DDF5F1] shadow-lg bg-white relative">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-72 sm:h-84 object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#183B45]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DDF5F1] bg-[#087F83]/80 px-2.5 py-1 rounded-full border border-white/20">
                      Jay Vishnu Hospital
                    </span>
                    <h3 className="font-serif text-xl font-bold mt-2 text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Sai Nagar, Anantapur • Est. 2019
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: QUICK NAVIGATION BAR
          ========================================================================= */}
      <nav className="sticky top-[73px] z-40 bg-white/95 backdrop-blur-md border-b border-[#DDF5F1] shadow-xs py-3">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {quickNavItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#087F83] text-white shadow-xs'
                      : 'bg-[#FAF8FC] text-[#183B45] hover:bg-[#DDF5F1] hover:text-[#087F83] border border-[#E8E3EC]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* =========================================================================
          SECTION 4: ABOUT THIS SPECIALITY / SERVICE
          ========================================================================= */}
      <section id="about" className="scroll-mt-36 py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <ScrollReveal direction="left" delay={0.05}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#087F83] bg-[#DDF5F1] px-3 py-1 rounded-full border border-[#65C9BA]/40">
                  <Sparkles className="w-3.5 h-3.5 text-[#087F83]" />
                  {service.aboutIntroLabel}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183B45] mt-3 leading-snug">
                  {service.aboutTitle}
                </h2>

                <p className="text-sm sm:text-base text-[#45666B] leading-relaxed mt-3">
                  {service.aboutDescription}
                </p>

                {service.doctorName && (
                  <div className="mt-6 p-4 rounded-2xl bg-[#EAF9F7] border border-[#DDF5F1] flex items-center gap-3">
                    <UserCheck className="w-5 h-5 text-[#087F83]" />
                    <span className="text-xs font-semibold text-[#183B45]">
                      Consultations led by <strong>{service.doctorName}</strong> ({service.doctorSpeciality})
                    </span>
                  </div>
                )}
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={0.1}>
                <div className="rounded-3xl overflow-hidden border border-[#DDF5F1] shadow-md bg-[#FAF8FC]">
                  <img
                    src={service.aboutImage}
                    alt={service.aboutTitle}
                    className="w-full h-72 sm:h-84 object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: DETAILED INFORMATION CARDS (2-COLUMN)
          ========================================================================= */}
      <section id="overview" className="scroll-mt-36 py-16 sm:py-20 bg-[#FAF8FC] border-t border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: Service Overview */}
            <ScrollReveal direction="up" delay={0.05} className="h-full">
              <div className="h-full bg-white rounded-3xl p-7 sm:p-9 border border-[#E8E3EC] shadow-xs flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#DDF5F1] text-[#087F83] text-[11px] font-bold uppercase tracking-wider mb-4 border border-[#65C9BA]/30">
                    {service.overviewCard.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#183B45] mb-3">
                    {service.overviewCard.title}
                  </h3>
                  <p className="text-sm text-[#45666B] leading-relaxed">
                    {service.overviewCard.description}
                  </p>
                </div>

                {service.overviewCard.highlight && (
                  <div className="mt-6 p-4 rounded-2xl bg-[#FAF8FC] border border-[#E8E3EC] text-xs text-[#183B45]">
                    {service.overviewCard.highlight}
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Card 2: What This Service Covers */}
            <div id="covers" className="h-full">
              <ScrollReveal direction="up" delay={0.1} className="h-full">
                <div className="h-full bg-white rounded-3xl p-7 sm:p-9 border border-[#E8E3EC] shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#EAF9F7] text-[#087F83] text-[11px] font-bold uppercase tracking-wider mb-4 border border-[#DDF5F1]">
                      {service.coversCard.badge}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#183B45] mb-4">
                      {service.coversCard.title}
                    </h3>
                    
                    <ul className="space-y-3">
                      {service.coversCard.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#45666B]">
                          <CheckCircle2 className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PATIENT GUIDANCE ("WHEN TO CONTACT OUR HOSPITAL")
          ========================================================================= */}
      <section id="guidance" className="scroll-mt-36 py-16 sm:py-20 bg-white border-t border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
          
          <ScrollReveal direction="down" delay={0.05}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF5F1] text-[#087F83] text-[11px] font-bold uppercase tracking-wider border border-[#65C9BA]/40 mb-3">
              {service.guidance.badge}
            </span>
          </ScrollReveal>

          <HeadingReveal delay={0.1}>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183B45] mb-8">
              {service.guidance.heading}
            </h2>
          </HeadingReveal>

          <div className="bg-[#FAF8FC] rounded-3xl p-6 sm:p-8 border border-[#E8E3EC] text-left space-y-3.5 mb-8">
            {service.guidance.points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#45666B]">
                <span className="w-5 h-5 rounded-full bg-[#DDF5F1] text-[#087F83] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <a
            href={`tel:${HOSPITAL_DATA.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#087F83] hover:bg-[#06676A] transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>Contact Hospital Reception</span>
          </a>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: DOCTOR / SPECIALIST SECTION (OR SERVICE INFO CARD)
          ========================================================================= */}
      <section id="specialist" className="scroll-mt-36 py-16 sm:py-20 bg-[#FAF8FC] border-t border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-3xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF5F1] text-[#087F83] text-[11px] font-bold uppercase tracking-wider border border-[#65C9BA]/40 mb-3">
              {service.doctorName ? 'SPECIALIST PROFILE' : 'SERVICE COORDINATION'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183B45]">
              {service.doctorName ? 'Consulting Specialist' : 'Hospital Healthcare Support'}
            </h2>
          </div>

          {service.doctorName ? (
            <HoverCard lift={-5}>
              <div className="bg-white rounded-3xl border border-[#E8E3EC] p-7 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#DDF5F1] shrink-0 bg-[#EAF9F7]">
                  <img
                    src={service.doctorImage}
                    alt={service.doctorName}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#087F83] bg-[#DDF5F1] px-2.5 py-0.5 rounded-full border border-[#65C9BA]/30">
                    {service.doctorSpeciality}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#183B45]">
                    {service.doctorName}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#45666B] leading-relaxed">
                    {service.doctorProfile}
                  </p>
                  <div className="pt-3">
                    <Link
                      href={`/appointment?doctor=${encodeURIComponent(service.doctorName)}&service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#087F83] hover:bg-[#06676A] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <span>Book Consultation</span>
                    </Link>
                  </div>
                </div>
              </div>
            </HoverCard>
          ) : (
            <div className="bg-white rounded-3xl border border-[#E8E3EC] p-7 sm:p-8 shadow-xs text-center space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#183B45]">
                {service.title} Facility Coordination
              </h3>
              <p className="text-xs sm:text-sm text-[#45666B] leading-relaxed max-w-xl mx-auto">
                Facility scheduling and procedural enquiries are managed directly through the hospital reception desk. Please contact our team for assistance.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${HOSPITAL_DATA.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#087F83] hover:bg-[#06676A] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span>Call Hospital Reception: {HOSPITAL_DATA.displayPhone}</span>
                </a>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FREQUENTLY ASKED QUESTIONS (ACCORDION)
          ========================================================================= */}
      <section id="faqs" className="scroll-mt-36 py-16 sm:py-20 bg-white border-t border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF5F1] text-[#087F83] text-[11px] font-bold uppercase tracking-wider border border-[#65C9BA]/40 mb-3">
              SERVICE FAQS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183B45]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#FAF8FC] rounded-2xl border border-[#E8E3EC] overflow-hidden shadow-xs">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-[#183B45] text-sm sm:text-base hover:text-[#087F83] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#087F83]' : ''
                      }`} 
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm text-[#45666B] border-t border-slate-200/60 pt-3 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: APPOINTMENT CALL TO ACTION (CTA)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#087F83] via-[#06676A] to-[#183B45] text-white relative overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12 text-center relative z-10 space-y-5 max-w-3xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-[#DDF5F1] text-xs font-semibold border border-white/20">
            JAY VISHNU HOSPITAL
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Ready to Get Started?
          </h2>

          <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
            Contact Jay Vishnu Hospital to enquire about {service.title.toLowerCase()} and schedule your consultation.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href={`/appointment?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#087F83] bg-white hover:bg-[#FAF8FC] transition-all shadow-lg hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-[#087F83]" />
              <span>Book Appointment</span>
            </Link>

            <a
              href={`tel:${HOSPITAL_DATA.phone}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[#DDF5F1]" />
              <span>Call Hospital: {HOSPITAL_DATA.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

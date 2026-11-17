'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Eye, 
  Activity, 
  ShieldCheck, 
  Calendar, 
  Phone, 
  ChevronDown,
  ArrowRight,
  UserCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin
} from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { HOSPITAL_DATA, DOCTORS_DATA } from '@/data/hospital';
import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem, HoverCard } from '@/components/motion/MotionReveal';
import { motion, AnimatePresence } from 'framer-motion';

const specialityNavItems = [
  { id: 'neurology', label: 'Neurology' },
  { id: 'ophthalmology', label: 'Ophthalmology' },
  { id: 'diagnostics', label: 'Diagnostic Services' },
  { id: 'cataract', label: 'Cataract Surgery' },
  { id: 'ot-facilities', label: 'General OT Facilities' }
];

const faqs = [
  {
    q: "Which medical specialities are available at Jay Vishnu Hospital?",
    a: "Jay Vishnu Hospital provides medical consultations in Neurology (led by Dr. Bharat Vishnu Reddy) and Ophthalmology (led by Dr. Leela Padmini), supported by diagnostic services, cataract surgeries, and general operation theatre facilities."
  },
  {
    q: "Who is the neurologist at the hospital?",
    a: "Dr. Bharat Vishnu Reddy is the neurologist associated with Jay Vishnu Hospital in Sai Nagar, Anantapur. Patients can contact the hospital to enquire about neurological consultations."
  },
  {
    q: "Who is the ophthalmologist at the hospital?",
    a: "Dr. Leela Padmini is the ophthalmologist associated with Jay Vishnu Hospital, providing vision care, comprehensive eye checkups, and consultations."
  },
  {
    q: "How can I enquire about diagnostic services?",
    a: "Diagnostic services are listed as part of Jay Vishnu Hospital's healthcare capabilities. Please contact the hospital reception at +91 97032 15567 to verify available diagnostic tests and scheduling."
  },
  {
    q: "Does the hospital provide cataract surgery?",
    a: "Yes, cataract surgery services are listed among the eye-care offerings at Jay Vishnu Hospital. Consultations and evaluations are conducted by our ophthalmologist."
  },
  {
    q: "How can I enquire about general OT facilities?",
    a: "Jay Vishnu Hospital maintains general operation theatre facilities for surgical support. Please contact the hospital reception directly for information regarding specific procedures and surgical facilities."
  },
  {
    q: "How can I book an appointment?",
    a: "You can submit an appointment enquiry on this website or call the hospital desk directly at +91 97032 15567. Our reception team will coordinate doctor availability and assist with confirmation."
  }
];

export default function DepartmentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeNav, setActiveNav] = useState('neurology');

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
          SECTION 1: BREADCRUMB & HERO (2-COLUMN)
          ========================================================================= */}
      <Breadcrumbs items={[{ label: 'Specialities' }]} />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#EAF9F7] to-[#DDF5F1]/30 py-12 sm:py-16 lg:py-20 border-b border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <ScrollReveal direction="down" delay={0.05}>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF5F1] text-[#087F83] text-xs font-bold uppercase tracking-wider border border-[#65C9BA]/40">
                  <span className="w-2 h-2 rounded-full bg-[#087F83] animate-pulse" />
                  OUR MEDICAL SPECIALITIES
                </span>
              </ScrollReveal>

              <HeadingReveal delay={0.1}>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183B45] leading-[1.2] tracking-tight">
                  Care for Your Health, <br />
                  <span className="text-[#087F83]">Every Step of the Way.</span>
                </h1>
              </HeadingReveal>

              <ScrollReveal direction="up" delay={0.15}>
                <p className="text-sm sm:text-base text-[#45666B] leading-relaxed max-w-2xl font-normal">
                  Jay Vishnu Hospital provides dedicated neurological consultations, comprehensive eye care, and supporting diagnostic and surgical facilities in Sai Nagar, Anantapur. Our medical team combines focused expertise with compassionate care.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/appointment"
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

            {/* Right Hero Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal direction="scale" delay={0.15} className="w-full max-w-[480px]">
                <div className="rounded-3xl overflow-hidden border border-[#DDF5F1] shadow-lg bg-white relative">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900"
                    alt="Medical consultations at Jay Vishnu Hospital"
                    className="w-full h-72 sm:h-84 object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#183B45]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DDF5F1] bg-[#087F83]/80 px-2.5 py-1 rounded-full border border-white/20">
                      Jay Vishnu Hospital
                    </span>
                    <h3 className="font-serif text-xl font-bold mt-2 text-white">
                      Patient-Focused Medical Consultations
                    </h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Neurology, Ophthalmology & Diagnostic Services
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SPECIALITY NAVIGATION BAR (STICKY / HORIZONTALLY SCROLLABLE)
          ========================================================================= */}
      <nav className="sticky top-[73px] z-40 bg-white/95 backdrop-blur-md border-b border-[#DDF5F1] shadow-xs py-3">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {specialityNavItems.map((item) => {
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
          SECTION 3: NEUROLOGY CARE (MEDICAL SPECIALITY)
          ========================================================================= */}
      <section id="neurology" className="scroll-mt-36 py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal direction="left" delay={0.05}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#087F83] bg-[#DDF5F1] px-3 py-1 rounded-full border border-[#65C9BA]/40">
                  <Brain className="w-3.5 h-3.5 text-[#087F83]" />
                  MEDICAL SPECIALITY
                </span>
                
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183B45] mt-3">
                  Neurology Care
                </h2>
                
                <p className="text-sm sm:text-base text-[#45666B] leading-relaxed mt-3">
                  Neurology focuses on conditions affecting the brain, nerves and nervous system. Patients can contact the hospital for neurological consultations with Dr. Bharat Vishnu Reddy.
                </p>

                {/* Information Card with Doctor Details */}
                <div className="mt-6 p-5 rounded-2xl bg-[#FAF8FC] border border-[#E8E3EC] space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#087F83] shrink-0 bg-slate-100">
                      <img
                        src="/images/dr-bharat-vishnu-reddy-transparent.png"
                        alt="Dr. Bharat Vishnu Reddy"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#183B45]">
                        Dr. Bharat Vishnu Reddy
                      </h4>
                      <p className="text-xs font-semibold text-[#087F83]">
                        Speciality: Neurologist
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#45666B] pt-2 border-t border-[#E8E3EC]">
                    Available for outpatient neurological consultations at Jay Vishnu Hospital, Sai Nagar, Anantapur.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/appointment?department=Neurology&doctor=Dr.+Bharat+Vishnu+Reddy"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#087F83] hover:bg-[#06676A] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>Book Neurology Consultation</span>
                  </Link>
                  <a
                    href={`tel:${HOSPITAL_DATA.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DDF5F1] bg-white hover:bg-[#EAF9F7] text-[#183B45] text-xs font-semibold transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#087F83]" />
                    <span>Enquire Availability</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={0.1}>
                <div className="rounded-3xl overflow-hidden border border-[#DDF5F1] shadow-md bg-[#FAF8FC]">
                  <img
                    src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=900"
                    alt="Neurology consultations at Jay Vishnu Hospital"
                    className="w-full h-72 sm:h-96 object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OPHTHALMOLOGY (MEDICAL SPECIALITY)
          ========================================================================= */}
      <section id="ophthalmology" className="scroll-mt-36 py-16 sm:py-20 bg-[#FAF8FC] border-t border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Visual on large screens */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="rounded-3xl overflow-hidden border border-[#DDF5F1] shadow-md bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=900"
                    alt="Eye care and ophthalmology examination"
                    className="w-full h-72 sm:h-96 object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <ScrollReveal direction="right" delay={0.05}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#087F83] bg-[#DDF5F1] px-3 py-1 rounded-full border border-[#65C9BA]/40">
                  <Eye className="w-3.5 h-3.5 text-[#087F83]" />
                  MEDICAL SPECIALITY
                </span>
                
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183B45] mt-3">
                  Eye Care and Ophthalmology
                </h2>
                
                <p className="text-sm sm:text-base text-[#45666B] leading-relaxed mt-3">
                  Ophthalmology focuses on eye health and vision care. Patients can contact the hospital for eye checkups and consultations with Dr. Leela Padmini.
                </p>

                {/* Doctor Card */}
                <div className="mt-6 p-5 rounded-2xl bg-white border border-[#E8E3EC] space-y-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#087F83] shrink-0 bg-[#EAF9F7] flex items-center justify-center">
                      <Eye className="w-6 h-6 text-[#087F83]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#183B45]">
                        Dr. Leela Padmini
                      </h4>
                      <p className="text-xs font-semibold text-[#087F83]">
                        Speciality: Ophthalmologist
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#45666B] pt-2 border-t border-[#E8E3EC]">
                    Provides eye evaluations, clinical checkups, and consultations at Jay Vishnu Hospital.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/appointment?department=Ophthalmology&doctor=Dr.+Leela+Padmini"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#087F83] hover:bg-[#06676A] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>Book Eye Consultation</span>
                  </Link>
                  <a
                    href={`tel:${HOSPITAL_DATA.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DDF5F1] bg-white hover:bg-[#EAF9F7] text-[#183B45] text-xs font-semibold transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#087F83]" />
                    <span>Contact Hospital</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: DIAGNOSTIC SERVICES (ADDITIONAL SERVICE)
          ========================================================================= */}
      <section id="diagnostics" className="scroll-mt-36 py-16 sm:py-20 bg-white border-t border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal direction="left" delay={0.05}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#45666B] bg-[#EAF9F7] px-3 py-1 rounded-full border border-[#DDF5F1]">
                  <Activity className="w-3.5 h-3.5 text-[#087F83]" />
                  ADDITIONAL SERVICE & FACILITY
                </span>
                
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183B45] mt-3">
                  Diagnostic Services
                </h2>
                
                <p className="text-sm sm:text-base text-[#45666B] leading-relaxed mt-3">
                  Jay Vishnu Hospital lists diagnostic services as part of its healthcare support. Patients can contact the hospital to understand the available diagnostic services and appointment process.
                </p>

                <div className="p-4 rounded-xl bg-[#FAF8FC] border border-[#E8E3EC] text-xs text-[#45666B]">
                  <strong>Patient Guidance:</strong> For specific diagnostic schedules, doctor requisitions, or test preparation guidelines, our reception desk is available to assist you.
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`tel:${HOSPITAL_DATA.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#087F83] hover:bg-[#06676A] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-white" />
                    <span>Contact Hospital for Diagnostics</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DDF5F1] bg-white hover:bg-[#EAF9F7] text-[#183B45] text-xs font-semibold transition-all"
                  >
                    <span>Visit Reception</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={0.1}>
                <div className="rounded-3xl overflow-hidden border border-[#DDF5F1] shadow-md bg-[#FAF8FC]">
                  <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900"
                    alt="Diagnostic Services at Jay Vishnu Hospital"
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
          SECTION 6: CATARACT SURGERY (ADDITIONAL SERVICE)
          ========================================================================= */}
      <section id="cataract" className="scroll-mt-36 py-16 sm:py-20 bg-[#FAF8FC] border-t border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="rounded-3xl overflow-hidden border border-[#DDF5F1] shadow-md bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900"
                    alt="Cataract surgery consultation"
                    className="w-full h-72 sm:h-84 object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <ScrollReveal direction="right" delay={0.05}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#45666B] bg-[#EAF9F7] px-3 py-1 rounded-full border border-[#DDF5F1]">
                  <Eye className="w-3.5 h-3.5 text-[#087F83]" />
                  ADDITIONAL SERVICE & FACILITY
                </span>
                
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183B45] mt-3">
                  Cataract Surgery
                </h2>
                
                <p className="text-sm sm:text-base text-[#45666B] leading-relaxed mt-3">
                  The hospital lists cataract surgery among its services. Patients can contact the hospital for consultation and information about the available services.
                </p>

                <div className="p-4 rounded-xl bg-white border border-[#E8E3EC] text-xs text-[#45666B]">
                  <strong>Consultation Process:</strong> Patients seeking cataract evaluation are examined by our ophthalmologist to determine clinical suitability and surgical planning.
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/appointment?department=Cataract+Surgery"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#087F83] hover:bg-[#06676A] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>Enquire for Cataract Evaluation</span>
                  </Link>
                  <a
                    href={`tel:${HOSPITAL_DATA.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DDF5F1] bg-white hover:bg-[#EAF9F7] text-[#183B45] text-xs font-semibold transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#087F83]" />
                    <span>Contact Hospital</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: GENERAL OT FACILITIES (ADDITIONAL SERVICE)
          ========================================================================= */}
      <section id="ot-facilities" className="scroll-mt-36 py-16 sm:py-20 bg-white border-t border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal direction="left" delay={0.05}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#45666B] bg-[#EAF9F7] px-3 py-1 rounded-full border border-[#DDF5F1]">
                  <Activity className="w-3.5 h-3.5 text-[#087F83]" />
                  ADDITIONAL SERVICE & FACILITY
                </span>
                
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183B45] mt-3">
                  General Operation Theatre Facilities
                </h2>
                
                <p className="text-sm sm:text-base text-[#45666B] leading-relaxed mt-3">
                  Jay Vishnu Hospital lists general operation theatre facilities as part of its healthcare services. Patients can contact the hospital to learn more about the facilities and procedures available.
                </p>

                <div className="p-4 rounded-xl bg-[#FAF8FC] border border-[#E8E3EC] text-xs text-[#45666B]">
                  <strong>Surgical Support:</strong> Our operation theatre is maintained under strict sanitation protocols to support surgical procedures and patient care.
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`tel:${HOSPITAL_DATA.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#087F83] hover:bg-[#06676A] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-white" />
                    <span>Contact Hospital for OT Information</span>
                  </a>
                  <Link
                    href="/facilities"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DDF5F1] bg-white hover:bg-[#EAF9F7] text-[#183B45] text-xs font-semibold transition-all"
                  >
                    <span>View Hospital Facilities</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={0.1}>
                <div className="rounded-3xl overflow-hidden border border-[#DDF5F1] shadow-md bg-[#FAF8FC]">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900"
                    alt="Operation Theatre Facilities at Jay Vishnu Hospital"
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
          SECTION 8: DOCTOR PROFILE SECTION (INSPIRED BY REFERENCE SCREENSHOT)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAF8FC] border-t border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal direction="down" delay={0.05}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF5F1] text-[#087F83] text-[11px] font-bold uppercase tracking-wider border border-[#65C9BA]/40 mb-3">
                HOSPITAL SPECIALISTS
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183B45] tracking-tight">
                Our Specialists
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <p className="mt-3 text-sm text-[#45666B] leading-relaxed">
                Consultations led by doctor Bharat Vishnu Reddy and doctor Leela Padmini in Sai Nagar, Anantapur.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {DOCTORS_DATA.map((doctor) => (
              <HoverCard key={doctor.id} lift={-5} className="h-full">
                <div className="h-full bg-white rounded-3xl border border-[#E8E3EC] p-7 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#DDF5F1] shrink-0 bg-[#EAF9F7] flex items-center justify-center">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#087F83] bg-[#DDF5F1] px-2.5 py-0.5 rounded-full border border-[#65C9BA]/30">
                        {doctor.speciality} Specialist
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#183B45] mt-1.5">
                        {doctor.name}
                      </h3>
                      <p className="text-xs text-[#45666B] mt-0.5">
                        Jay Vishnu Hospital · Sai Nagar, Anantapur
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#45666B] leading-relaxed my-5">
                    {doctor.profileDescription}
                  </p>

                  <div className="pt-4 border-t border-[#E8E3EC] flex flex-col sm:flex-row gap-2.5">
                    <Link
                      href={`/appointment?doctor=${encodeURIComponent(doctor.name)}&department=${encodeURIComponent(doctor.speciality)}`}
                      className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#087F83] hover:bg-[#06676A] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      Book Consultation
                    </Link>
                    <a
                      href={`tel:${HOSPITAL_DATA.phone}`}
                      className="py-2.5 px-4 rounded-xl border border-[#E8E3EC] hover:bg-[#FAF8FC] text-[#183B45] text-xs font-semibold text-center transition-colors"
                    >
                      Contact Hospital
                    </a>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: PATIENT INFORMATION (HOW TO ENQUIRE ABOUT CONSULTATIONS)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF5F1] text-[#087F83] text-[11px] font-bold uppercase tracking-wider border border-[#65C9BA]/40 mb-3">
              PATIENT GUIDELINES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183B45]">
              How to Enquire About Consultations
            </h2>
            <p className="text-sm text-[#45666B] mt-2">
              Follow these simple steps to enquire about doctor consultation timings and hospital visits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Contact the Hospital",
                desc: `Call our reception desk at ${HOSPITAL_DATA.displayPhone} or submit an online enquiry.`
              },
              {
                step: "02",
                title: "Ask About Service",
                desc: "Specify your requirement for Neurology, Ophthalmology, or supporting facilities."
              },
              {
                step: "03",
                title: "Confirm Availability",
                desc: "Our reception desk verifies doctor schedule and consultation timings."
              },
              {
                step: "04",
                title: "Request Appointment",
                desc: "Arrive at Sai Nagar at your scheduled consultation time for patient evaluation."
              }
            ].map((step, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF8FC] p-6 rounded-2xl border border-[#E8E3EC] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xl font-black text-[#65C9BA] block mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#183B45] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#45666B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FREQUENTLY ASKED QUESTIONS (ACCORDION)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAF8FC] border-t border-[#DDF5F1]">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF5F1] text-[#087F83] text-[11px] font-bold uppercase tracking-wider border border-[#65C9BA]/40 mb-3">
              HELPFUL INFORMATION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183B45]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#45666B] mt-2">
              Verified answers to common patient questions regarding Jay Vishnu Hospital.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-[#E8E3EC] overflow-hidden shadow-xs">
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
                        <div className="px-5 pb-5 text-xs sm:text-sm text-[#45666B] border-t border-slate-100 pt-3 leading-relaxed">
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
          SECTION 11: APPOINTMENT CALL TO ACTION (CTA)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#087F83] via-[#06676A] to-[#183B45] text-white relative overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12 text-center relative z-10 space-y-5 max-w-3xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-[#DDF5F1] text-xs font-semibold border border-white/20">
            JAY VISHNU HOSPITAL
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Looking for the Right Medical Consultation?
          </h2>

          <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
            Contact Jay Vishnu Hospital to enquire about available specialities, services and appointments.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/appointment"
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

import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Heart, 
  Shield, 
  Award, 
  Users, 
  CheckCircle2, 
  Calendar, 
  Brain,
  Eye,
  Target
} from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SectionHeading from '@/components/shared/SectionHeading';
import { HOSPITAL_DATA } from '@/data/hospital';
import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem, HoverCard } from '@/components/motion/MotionReveal';

export const metadata: Metadata = {
  title: 'About Jay Vishnu Hospital | Anantapur',
  description: 'Learn about Jay Vishnu Hospital in Sai Nagar, Anantapur. Established in 2019, providing medical consultations in Neurology and Ophthalmology.'
};

const carePrinciples = [
  {
    icon: Heart,
    title: "Understanding Patient Concerns",
    description: "Listening attentively to patient concerns, symptoms, and health questions before providing medical guidance."
  },
  {
    icon: Shield,
    title: "Providing Appropriate Medical Consultations",
    description: "Delivering responsible medical consultations focused on patient well-being and clinical clarity."
  },
  {
    icon: Target,
    title: "Clear Communication",
    description: "Explaining health evaluations and clinical options clearly and respectfully to patients and families."
  },
  {
    icon: Users,
    title: "Respecting Patient Privacy",
    description: "Safeguarding patient confidentiality, consultation privacy, and medical dignity at every stage."
  }
];

const galleryImages = [
  {
    url: "/images/jay-vishnu-hospital-corridor.jpg",
    caption: "Modern Hospital Corridors & Setting"
  },
  {
    url: "/images/jay-vishnu-hospital-reception-wall.jpg",
    caption: "Main Reception & Hospital Brand Wall"
  },
  {
    url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    caption: "Diagnostic Services"
  },
  {
    url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    caption: "General OT Facilities"
  }
];

import PageBanner from '@/components/shared/PageBanner';

export default function AboutPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Standard Centered Page Banner */}
      <PageBanner
        eyebrow="Established 2019 • Sai Nagar, Anantapur"
        title="About Jay Vishnu Hospital"
        subtitle="Jay Vishnu Hospital is located in Sai Nagar, Anantapur, Andhra Pradesh. Established in 2019, the hospital provides medical consultation services with a focus on neurological care and ophthalmology."
      />

      {/* Section 1: Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed">
              <ScrollReveal direction="right" delay={0.05}>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#713F83] bg-[#F4EDF7] px-2.5 py-1 rounded-full">
                  Hospital Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                  Dedicated Healthcare in Sai Nagar, Anantapur
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.15}>
                <p>
                  Jay Vishnu Hospital is located in Sai Nagar, Anantapur, Andhra Pradesh. Established in 2019, the hospital provides medical consultation services with a focus on neurological care and ophthalmology.
                </p>
                <p className="mt-3">
                  The hospital's stated healthcare offerings include neurological consultations, diagnostic services, eye checkups, cataract surgeries, and general operation theatre facilities.
                </p>
                <p className="mt-3">
                  Jay Vishnu Hospital aims to provide patients with access to medical consultations and healthcare services in a supportive environment.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="left" delay={0.15} amount={0.25}>
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=900"
                    alt="Jay Vishnu Hospital Anantapur Consultation Environment"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Hospital Medical Focus: 2 Sections (Neurology & Ophthalmology) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <SectionHeading
            badge="Medical Focus"
            badgeColor="sky"
            title="Hospital Medical Focus"
            description="Our primary clinical consultation specialities as listed in our official profile."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Neurology */}
            <ScrollReveal direction="scale" delay={0.1} amount={0.2} className="h-full">
              <HoverCard lift={-4} className="h-full">
                <div className="h-full bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#F4EDF7] text-[#713F83] flex items-center justify-center mb-6">
                      <Brain className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#713F83] bg-[#F4EDF7] px-2.5 py-1 rounded-full">
                      Led by Dr. Bharat Vishnu Reddy
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-3">
                      Neurology
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      Neurology focuses on medical conditions affecting the brain, spinal cord, and nervous system. Jay Vishnu Hospital identifies neurological consultations as one of its medical services.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href="/departments#neurology"
                      className="text-xs font-semibold text-[#713F83] hover:underline"
                    >
                      View Neurology Consultations →
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </ScrollReveal>

            {/* Ophthalmology */}
            <ScrollReveal direction="scale" delay={0.18} amount={0.2} className="h-full">
              <HoverCard lift={-4} className="h-full">
                <div className="h-full bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mb-6">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                      Led by Dr. Leela Padmini
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-3">
                      Ophthalmology
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      Ophthalmology focuses on eye health, vision assessment, and eye-related medical care. Jay Vishnu Hospital lists eye checkups and cataract surgeries among its services.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href="/departments#ophthalmology"
                      className="text-xs font-semibold text-[#713F83] hover:underline"
                    >
                      View Ophthalmology Services →
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach to Patient Care */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <SectionHeading
            badge="Patient Care Principles"
            badgeColor="teal"
            title="Our Approach to Patient Care"
            description="Our patient-focused principles for respectful, transparent, and supportive healthcare."
          />

          <StaggerContainer delayChildren={0.15} staggerChildren={0.1} amount={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {carePrinciples.map((val, index) => {
                const Icon = val.icon;
                return (
                  <StaggerItem key={index} direction="up">
                    <HoverCard lift={-6} className="h-full">
                      <div className="h-full p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#713F83]/30 transition-colors flex flex-col justify-between">
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-[#F4EDF7] text-[#713F83] flex items-center justify-center mb-4">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h4 className="text-base font-bold text-slate-900 mb-2">
                            {val.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {val.description}
                          </p>
                        </div>
                      </div>
                    </HoverCard>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto text-xs text-slate-500">
              Supporting patients throughout their healthcare journey with clear communication, dedicated consultations, and patient dignity.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hospital Setting & Environments */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <SectionHeading
            badge="Hospital Setting"
            badgeColor="sky"
            title="Hospital Setting & Facilities"
            description="Overview of consultation spaces and facilities at Jay Vishnu Hospital in Sai Nagar, Anantapur."
          />

          <StaggerContainer delayChildren={0.1} staggerChildren={0.1} amount={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((img, idx) => (
                <StaggerItem key={idx} direction="up">
                  <HoverCard lift={-6}>
                    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs group bg-white">
                      <div className="relative h-56 bg-slate-100 overflow-hidden">
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3.5 bg-white text-xs font-semibold text-slate-700">
                        {img.caption}
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <ScrollReveal direction="up" delay={0.2}>
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

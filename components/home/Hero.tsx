'use client';

import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { ScrollReveal, HeadingReveal } from '@/components/motion/MotionReveal';

export default function Hero() {
  return (
    <>
      {/* =========================================================================
          DESKTOP & TABLET HERO (md:block) – 100% UNCHANGED & PRESERVED
          ========================================================================= */}
      <section className="hidden md:flex relative overflow-hidden bg-[#E9DAF9] h-[100dvh] max-h-[100dvh] items-center border-b border-[#D8C2F0] pt-[80px] sm:pt-[84px] lg:pt-[88px] box-border">
        
        {/* Background Image: Doctor on the right with full head and hair visible, slightly reduced size and positioned naturally downward */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none select-none bg-no-repeat"
          style={{
            backgroundImage: "url('/images/dr-bharat-vishnu-hero-perfect.jpg')",
            backgroundPosition: 'right 2% bottom',
            backgroundSize: 'contain',
            maxHeight: 'calc(100dvh - 80px)',
            marginTop: 'auto',
            marginBottom: '0',
          }}
        />

        {/* Smooth continuous blend across the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E9DAF9] via-[#E9DAF9]/95 md:via-[#E9DAF9]/80 to-transparent w-full md:w-[65%] lg:w-[56%] pointer-events-none" />

        <div className="w-full px-8 lg:px-12 py-4 lg:py-6 relative z-10">
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="col-span-8 lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">
              
              {/* 1. Welcome Badge */}
              <ScrollReveal direction="down" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D8C2F0] shadow-xs mb-3 sm:mb-4 backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-[#9163A8] animate-pulse" />
                  <span className="text-xs font-bold tracking-[0.14em] text-[#087F83] uppercase">
                    WELCOME TO JAY VISHNU HOSPITAL
                  </span>
                </div>
              </ScrollReveal>

              {/* 2. Main Hero Heading */}
              <HeadingReveal delay={0.1}>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold leading-[1.16] tracking-tight">
                  <span className="text-[#173B45] block">
                    Expert Care. A Healthier Tomorrow.
                  </span>
                  <span className="text-[#087F83] block mt-1">
                    Your Health Is Our Priority.
                  </span>
                </h1>
              </HeadingReveal>

              {/* 3. Doctor Identification */}
              <ScrollReveal direction="up" delay={0.14}>
                <div className="mt-3.5 sm:mt-4 pb-1 border-l-2 border-[#9163A8] pl-3.5">
                  <h2 className="text-lg sm:text-xl font-bold text-[#173B45] tracking-tight">
                    Dr. Bharat Vishnu Reddy
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#087F83] tracking-wide mt-0.5">
                    Consultant Neurologist <span className="text-[#9163A8] mx-1">|</span> JAY VISHNU HOSPITAL
                  </p>
                </div>
              </ScrollReveal>

              {/* 4. Hospital Description */}
              <ScrollReveal direction="up" delay={0.18}>
                <p className="mt-3 sm:mt-3.5 text-[14px] sm:text-[15px] lg:text-[16px] text-[#526773] leading-[1.6] max-w-xl font-normal">
                  Welcome to JAY VISHNU HOSPITAL, Sai Nagar, Anantapur. Established in 2019, we are committed to providing dedicated neurological consultations and compassionate patient care in a safe and comfortable environment.
                </p>
              </ScrollReveal>

              {/* 5. Call-To-Action Buttons */}
              <ScrollReveal direction="up" delay={0.22}>
                <div className="mt-5 sm:mt-6 flex items-center gap-3.5">
                  <Link
                    href="/appointment"
                    className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#087F83] hover:bg-[#076B70] transition-all duration-300 animate-cta-pulse"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Book an Appointment</span>
                  </Link>

                  <Link
                    href="/departments"
                    className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#087F83] hover:text-[#076B70] bg-white hover:bg-[#F3EFF9] border border-[#65C9BA]/50 hover:border-[#087F83] transition-all duration-300 shadow-xs hover:-translate-y-0.5"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4 text-[#087F83] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>

            </div>

            <div className="col-span-4 lg:col-span-5 xl:col-span-6 h-full pointer-events-none" />

          </div>
        </div>
      </section>

      {/* =========================================================================
          IMAGE-FIRST MOBILE HERO (md:hidden) – SURYA HOSPITAL STYLE
          ========================================================================= */}
      <div className="md:hidden">
        
        {/* PART 1: HERO SECTION – DOCTOR IMAGE ONLY */}
        <section className="bg-[#E9DAF9] px-4 pt-[74px] pb-6 flex justify-center items-center">
          <div className="relative w-full max-w-[340px] aspect-[4/5] max-h-[360px] rounded-3xl overflow-hidden shadow-md border border-[#D8C2F0] bg-gradient-to-b from-[#FAF5FC] via-[#E9DAF9] to-[#D8C2F0]">
            <img
              src="/images/dr-bharat-vishnu-hero-perfect.jpg"
              alt="Dr. Bharat Vishnu Reddy - Jay Vishnu Hospital"
              className="w-full h-full object-contain"
              style={{ objectPosition: 'center 40%' }}
            />
            {/* Soft subtle bottom vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#75428A]/15 via-transparent to-transparent pointer-events-none" />
          </div>
        </section>

        {/* PART 2: HERO CONTENT – PLACED BELOW THE DOCTOR IMAGE */}
        <section className="bg-[#FAF5FC] px-5 py-8 border-b border-[#EAE2F3]">
          <div className="max-w-md mx-auto text-center flex flex-col items-center">
            
            {/* Main Heading */}
            <h1 className="font-serif text-[27px] xs:text-[29px] font-bold leading-[1.18] tracking-tight">
              <span className="text-[#173B45] block">
                Expert Care. A Healthier Tomorrow.
              </span>
              <span className="text-[#087F83] block mt-1">
                Your Health Is Our Priority.
              </span>
            </h1>

            {/* Doctor Information Block */}
            <div className="mt-4 pb-1 border-b border-[#D8C2F0] inline-block px-4">
              <h2 className="text-[19px] font-bold text-[#173B45] tracking-tight">
                Dr. Bharat Vishnu Reddy
              </h2>
              <p className="text-[14px] font-semibold text-[#087F83] mt-0.5 tracking-wide">
                Consultant Neurologist <span className="text-[#9163A8] mx-1">|</span> JAY VISHNU HOSPITAL
              </p>
            </div>

            {/* Introductory Description */}
            <p className="mt-4 text-[15px] text-[#4A5568] leading-[1.65] font-normal px-1">
              Welcome to JAY VISHNU HOSPITAL, Sai Nagar, Anantapur. Established in 2019, we are committed to providing dedicated neurological consultations and compassionate patient care in a safe and comfortable environment.
            </p>

            {/* Appointment CTA Buttons */}
            <div className="w-full mt-6 space-y-3">
              {/* Primary Button: Book an Appointment */}
              <Link
                href="/appointment"
                className="w-full h-[50px] rounded-full text-sm font-bold text-white bg-[#087F83] hover:bg-[#076B70] active:scale-[0.98] transition-all flex items-center justify-center gap-2 animate-cta-pulse"
              >
                <Calendar className="w-4 h-4 text-white shrink-0" />
                <span>Book an Appointment</span>
              </Link>

              {/* Secondary Button: Explore Our Services */}
              <Link
                href="/departments"
                className="w-full h-[50px] rounded-full text-sm font-bold text-[#087F83] hover:text-[#076B70] bg-white active:scale-[0.98] border border-[#087F83] transition-all flex items-center justify-center gap-2 shadow-2xs"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#087F83] shrink-0" />
              </Link>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

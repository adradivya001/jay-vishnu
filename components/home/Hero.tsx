'use client';

import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { ScrollReveal, HeadingReveal } from '@/components/motion/MotionReveal';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#E9DAF9] min-h-[540px] lg:min-h-[600px] xl:min-h-[640px] flex items-center border-b border-[#D8C2F0]">
      
      {/* Background Image: Doctor on the right with extra headroom so the head and face are completely visible */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none select-none bg-no-repeat bg-right-bottom sm:bg-right bg-cover lg:bg-contain xl:bg-cover"
        style={{
          backgroundImage: "url('/images/dr-bharat-vishnu-hero-perfect.jpg')",
          backgroundPosition: 'right 20% bottom',
        }}
      />

      {/* Smooth continuous blend across the left side removing any visible vertical boundary */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E9DAF9] via-[#E9DAF9]/95 md:via-[#E9DAF9]/80 to-transparent w-full md:w-[65%] lg:w-[56%] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* =========================================================================
              LEFT COLUMN (52–58%): All Hero Content Positioned on the Left
              ========================================================================= */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">
            
            {/* 1. Welcome Badge */}
            <ScrollReveal direction="down" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D8C2F0] shadow-xs mb-4 sm:mb-5 backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-[#9163A8] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.14em] text-[#087F83] uppercase">
                  WELCOME TO JAY VISHNU HOSPITAL
                </span>
              </div>
            </ScrollReveal>

            {/* 2. Main Hero Heading */}
            <HeadingReveal delay={0.1}>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold leading-[1.18] tracking-tight">
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
              <div className="mt-4 sm:mt-5 pb-1 border-l-2 border-[#9163A8] pl-3.5">
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
              <p className="mt-4 text-[15px] sm:text-[16px] text-[#526773] leading-[1.65] max-w-xl font-normal">
                Welcome to JAY VISHNU HOSPITAL, Sai Nagar, Anantapur. Established in 2019, we are committed to providing dedicated neurological consultations and compassionate patient care in a safe and comfortable environment.
              </p>
            </ScrollReveal>

            {/* 5. Call-To-Action Buttons */}
            <ScrollReveal direction="up" delay={0.22}>
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5">
                {/* Primary Button: Book an Appointment */}
                <Link
                  href="/appointment"
                  className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#087F83] hover:bg-[#076B70] transition-all duration-300 shadow-[0_4px_16px_rgba(8,127,131,0.25)] hover:shadow-[0_6px_22px_rgba(8,127,131,0.35)] hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book an Appointment</span>
                </Link>

                {/* Secondary Button: Explore Our Services */}
                <Link
                  href="/departments"
                  className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#087F83] hover:text-[#076B70] bg-white hover:bg-[#F3EFF9] border border-[#65C9BA]/50 hover:border-[#087F83] transition-all duration-300 shadow-xs hover:-translate-y-0.5"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-[#087F83] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

          </div>

          {/* =========================================================================
              RIGHT COLUMN (Placeholder spacing so text stays purely on the left on desktop)
              ========================================================================= */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[460px] pointer-events-none" />

        </div>
      </div>
    </section>
  );
}

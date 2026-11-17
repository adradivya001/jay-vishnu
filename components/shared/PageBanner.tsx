'use client';

import React, { ReactNode } from 'react';
import { ScrollReveal, HeadingReveal } from '@/components/motion/MotionReveal';

interface PageBannerProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  dotColor?: string;
  className?: string;
}

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
  className = ''
}: PageBannerProps) {
  return (
    <section 
      className={`relative overflow-hidden bg-gradient-to-b from-[#F4EDF7] via-[#FAF8FC] to-white border-b border-[#E8E3EC] text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 ${className}`}
    >
      {/* Subtle brand glow circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-[#713F83]/[0.06] via-[#398EB8]/[0.03] to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[840px] mx-auto relative z-10 text-center flex flex-col items-center">
        
        {/* 1. Centered Eyebrow Pill */}
        <ScrollReveal direction="down" delay={0.05} amount={0.2}>
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-[#713F83] bg-[#F4EDF7] border border-[#EDE2F2] px-3.5 py-1.5 rounded-full mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#713F83] animate-pulse" />
            <span>{eyebrow}</span>
          </span>
        </ScrollReveal>

        {/* 2. Centered Section Name / Title */}
        <HeadingReveal delay={0.1} className="w-full">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#283440] mb-4 leading-[1.2] tracking-tight">
            {title}
          </h1>
        </HeadingReveal>

        {/* 3. Centered Supporting Subtitle */}
        <ScrollReveal direction="up" delay={0.15} amount={0.2} className="w-full">
          <p className="text-base sm:text-lg text-[#687582] leading-relaxed max-w-[720px] mx-auto font-normal">
            {subtitle}
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}

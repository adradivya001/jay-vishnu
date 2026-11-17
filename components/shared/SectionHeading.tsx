'use client';

import { ReactNode } from 'react';
import { ScrollReveal, HeadingReveal } from '@/components/motion/MotionReveal';

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: 'purple' | 'teal' | 'sky' | 'emerald' | 'rose' | 'amber';
  title: string;
  description?: string;
  center?: boolean;
  action?: ReactNode;
}

export default function SectionHeading({
  badge,
  badgeColor = 'purple',
  title,
  description,
  center = true,
  action
}: SectionHeadingProps) {
  const badgeClasses = {
    purple: 'bg-[#F4EDF7] text-[#713F83] border-[#EDE2F2]',
    teal: 'bg-[#EAF4FA] text-[#398EB8] border-[#DDEEF6]',
    sky: 'bg-[#EAF4FA] text-[#398EB8] border-[#DDEEF6]',
    emerald: 'bg-[#EAF4FA] text-[#398EB8] border-[#DDEEF6]',
    rose: 'bg-[#F4EDF7] text-[#713F83] border-[#EDE2F2]',
    amber: 'bg-[#F4EDF7] text-[#713F83] border-[#EDE2F2]'
  };

  return (
    <div className={`mb-12 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {badge && (
        <ScrollReveal direction="down" delay={0.05} amount={0.2}>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border mb-3 ${badgeClasses[badgeColor]}`}>
            {badge}
          </span>
        </ScrollReveal>
      )}

      <HeadingReveal delay={0.1}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#713F83] tracking-tight leading-tight">
          {title}
        </h2>
      </HeadingReveal>

      {description && (
        <ScrollReveal direction="up" delay={0.15} amount={0.2}>
          <p className="mt-4 text-base sm:text-lg text-[#687582] leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      )}

      {action && (
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-6 flex items-center justify-center gap-3">
            {action}
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}

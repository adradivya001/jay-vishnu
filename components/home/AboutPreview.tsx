'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, HeadingReveal } from '@/components/motion/MotionReveal';

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF8FC]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <ScrollReveal direction="left" delay={0.15} amount={0.25}>
              <div className="rounded-3xl overflow-hidden shadow-md border border-[#E8E3EC] bg-white group">
                <img
                  src="/images/jay-vishnu-hospital-reception-wall.jpg"
                  alt="Jay Vishnu Hospital official reception branding wall in Sai Nagar, Anantapur"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              
              <div className="absolute -bottom-5 right-6 bg-[#183B45] text-white rounded-2xl p-4 shadow-xl max-w-xs text-xs border border-[#087F83]/30">
                <p className="font-semibold text-[#DDF5F1]">Established 2019</p>
                <p className="text-slate-300 mt-0.5">Healthcare center in Sai Nagar, Anantapur.</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <ScrollReveal direction="right" delay={0.05} amount={0.2}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EDF7] border border-[#EDE2F2] text-xs font-semibold text-[#713F83]">
                <span>About Our Hospital</span>
              </div>
            </ScrollReveal>

            <HeadingReveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#713F83] tracking-tight leading-tight">
                Welcome to Jay Vishnu Hospital
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="right" delay={0.15} amount={0.2}>
              <p className="text-base sm:text-lg text-[#283440] font-medium leading-relaxed">
                Established in 2019, Jay Vishnu Hospital is located in Sai Nagar, Anantapur, Andhra Pradesh.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2} amount={0.2}>
              <p className="text-sm text-[#687582] leading-relaxed">
                The hospital's stated medical services include neurological consultations, diagnostic services, eye checkups, cataract surgeries, and general operation theatre facilities.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.25} amount={0.2}>
              <p className="text-sm text-[#687582] leading-relaxed">
                With medical professionals associated with neurology and ophthalmology, the hospital provides patients with access to medical consultations and healthcare services.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3} amount={0.2}>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#713F83] hover:text-[#398EB8] underline underline-offset-4 group transition-colors"
                >
                  <span>Read More About Our Hospital</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import { 
  Phone, 
  MapPin, 
  ShieldAlert, 
  ExternalLink
} from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { HOSPITAL_DATA } from '@/data/hospital';
import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem, HoverCard } from '@/components/motion/MotionReveal';

export const metadata: Metadata = {
  title: 'Emergency Information | Jay Vishnu Hospital',
  description: 'Emergency medical guidance and general hospital contact number for Jay Vishnu Hospital in Sai Nagar, Anantapur. Call +91 97032 15567.'
};

export default function EmergencyPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Emergency' }]} />

      {/* Critical Emergency Banner */}
      <section className="bg-gradient-to-b from-rose-900 via-rose-950 to-slate-950 text-white py-12 sm:py-16">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <ScrollReveal direction="down" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-800/80 text-rose-200 text-xs font-bold border border-rose-600 mb-4 animate-pulse">
                <ShieldAlert className="w-4 h-4 text-rose-300" />
                <span>Prompt Medical Attention Notice</span>
              </div>
            </ScrollReveal>

            <HeadingReveal delay={0.1}>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Emergency Medical Assistance
              </h1>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <p className="mt-4 text-base sm:text-lg text-rose-100 font-medium leading-relaxed">
                Medical emergencies require prompt attention. If you or someone nearby is experiencing a medical emergency, contact the appropriate emergency medical service or visit the nearest suitable emergency facility without delay.
              </p>
            </ScrollReveal>
          </div>

          {/* Section 1: Emergency Contact Card */}
          <ScrollReveal direction="scale" delay={0.2} amount={0.2}>
            <div className="mt-8 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-2xl border-4 border-rose-500/20">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                General Hospital Contact Number
              </span>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500">Official Hospital Contact Number:</p>
                  <a 
                    href={`tel:${HOSPITAL_DATA.phone}`} 
                    className="text-2xl sm:text-4xl font-extrabold text-slate-950 hover:text-rose-600 transition-colors tracking-tight block"
                  >
                    {HOSPITAL_DATA.displayPhone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    * General Hospital Contact Number
                  </p>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <a
                    href={`tel:${HOSPITAL_DATA.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-bold text-sm shadow-md transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Hospital</span>
                  </a>
                  <a
                    href={HOSPITAL_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-rose-600" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Emergency Guidance */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl mb-8">
            <ScrollReveal direction="down" delay={0.05}>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Immediate Emergency Guidance
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                In a medical emergency, do not delay seeking professional medical assistance. Follow these essential guidelines:
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer delayChildren={0.1} staggerChildren={0.1} amount={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StaggerItem direction="up">
                <HoverCard lift={-4} className="h-full">
                  <div className="h-full p-6 rounded-2xl border border-rose-100 bg-rose-50/50">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4 font-bold text-lg">
                      1
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Seek Immediate Help
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Contact medical emergency services or dial 108 immediately for acute distress or critical conditions.
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>

              <StaggerItem direction="up">
                <HoverCard lift={-4} className="h-full">
                  <div className="h-full p-6 rounded-2xl border border-slate-200 bg-white">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 font-bold text-lg">
                      2
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Do Not Wait Online
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Do not wait for an online form submission or message response during an emergency situation.
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>

              <StaggerItem direction="up">
                <HoverCard lift={-4} className="h-full">
                  <div className="h-full p-6 rounded-2xl border border-slate-200 bg-white">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 font-bold text-lg">
                      3
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Share Medical History
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Provide attending healthcare workers with key medical history and ongoing medications.
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>

              <StaggerItem direction="up">
                <HoverCard lift={-4} className="h-full">
                  <div className="h-full p-6 rounded-2xl border border-slate-200 bg-white">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 font-bold text-lg">
                      4
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Follow Instructions
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Follow first-aid and transport advice given by qualified emergency medical personnel.
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Section 3: Emergency Availability Status */}
      <section className="py-12 bg-slate-50 border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
              <h3 className="text-lg font-bold text-slate-900">
                Emergency Consultation Availability
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                For details about emergency consultation availability and hospital services, please contact the hospital directly.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${HOSPITAL_DATA.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#398EB8]" />
                  <span>Call Hospital: {HOSPITAL_DATA.displayPhone}</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Hospital Location & Directions */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <ScrollReveal direction="left" delay={0.1}>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#713F83] bg-[#F4EDF7] px-2.5 py-1 rounded-full">
                  Hospital Location
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                  Hospital Address
                </h2>
                <div className="space-y-3 text-sm text-slate-700 mt-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#398EB8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">{HOSPITAL_DATA.name}</strong>
                      <span>{HOSPITAL_DATA.address}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#398EB8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Hospital Phone:</strong>
                      <a href={`tel:${HOSPITAL_DATA.phone}`} className="text-[#713F83] font-semibold hover:underline">
                        {HOSPITAL_DATA.displayPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={HOSPITAL_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#713F83] hover:bg-[#5C326B] text-white font-semibold text-sm transition-colors shadow-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Open Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal direction="right" delay={0.15}>
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm min-h-[350px]">
                  <iframe
                    src={HOSPITAL_DATA.googleMapsEmbedSrc}
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Jay Vishnu Hospital Location Map"
                    className="w-full"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

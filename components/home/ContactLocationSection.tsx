'use client';

import Link from 'next/link';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { HOSPITAL_DATA } from '@/data/hospital';
import { ScrollReveal } from '@/components/motion/MotionReveal';

export default function ContactLocationSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF8FC] border-t border-[#E8E3EC]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={0.1} amount={0.2} className="h-full">
              <div className="h-full bg-white p-8 rounded-3xl border border-[#E8E3EC] shadow-xs flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#713F83] bg-[#F4EDF7] px-2.5 py-1 rounded-full border border-[#EDE2F2]">
                    Hospital Location
                  </span>
                  
                  <h2 className="text-2xl font-serif font-bold text-[#713F83] mt-3">
                    Visit Jay Vishnu Hospital
                  </h2>
                  
                  <p className="text-sm text-[#687582] mt-2 leading-relaxed">
                    Located in Sai Nagar, Anantapur. Our reception team is available to assist with doctor consultation enquiries.
                  </p>

                  <div className="mt-6 space-y-4 text-sm text-[#283440]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#713F83] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#283440]">Address:</strong>
                        <span className="text-[#687582]">{HOSPITAL_DATA.address}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#398EB8] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#283440]">Hospital Contact:</strong>
                        <a 
                          href={`tel:${HOSPITAL_DATA.phone}`} 
                          className="text-[#713F83] font-semibold hover:underline"
                        >
                          {HOSPITAL_DATA.displayPhone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#398EB8] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#283440]">Consultation Timings:</strong>
                        <p className="text-[#687582]">{HOSPITAL_DATA.timingsNotice}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E3EC] flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#713F83] hover:bg-[#5C326B] text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Contact Hospital
                  </Link>
                  <a
                    href={HOSPITAL_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-[#E8E3EC] hover:bg-[#FAF8FC] text-[#283440] text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#398EB8]" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Map Preview */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.15} amount={0.2} className="h-full">
              <div className="h-full bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden min-h-[350px] relative flex flex-col">
                <iframe
                  src={HOSPITAL_DATA.googleMapsEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jay Vishnu Hospital Location Map"
                  className="w-full flex-1"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

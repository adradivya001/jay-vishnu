import Link from 'next/link';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ArrowUpRight,
  Send,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { HOSPITAL_DATA, NAV_LINKS } from '@/data/hospital';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#FAF5FC] text-[#2D3748] border-t border-[#EFE7F6] w-full">
      {/* Main Footer Container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-start">
          
          {/* =========================================================================
              Column 1: Logo & Mission Statement (3.5 cols on desktop)
              ========================================================================= */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] shrink-0">
                <img
                  src="/images/logo/official-hospital-symbol.png"
                  alt="Jay Vishnu Hospital"
                  className="w-full h-full object-contain"
                  width={68}
                  height={68}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[20px] sm:text-[22px] tracking-[0.02em] uppercase text-[#800080] leading-none">
                  JAY VISHNU
                </span>
                <span className="font-bold text-[14px] sm:text-[15px] tracking-[0.14em] uppercase text-[#800080] leading-tight mt-1">
                  HOSPITAL
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-[#4A5568] leading-relaxed pr-2">
              Dedicated neurological consultations, comprehensive eye care, and personalised medical attention to support patients and families throughout their healthcare journey.
            </p>
          </div>

          {/* =========================================================================
              Column 2: Quick Links (2 cols on desktop)
              ========================================================================= */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-3">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1A202C] tracking-tight">
                Quick Links
              </h3>
              <div className="w-8 h-[2.5px] bg-[#9163A8] mt-1.5 rounded-full" />
            </div>

            <ul className="space-y-2 pt-2 text-sm text-[#4A5568]">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-[#087F83] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-[#9163A8] text-xs transition-transform group-hover:translate-x-0.5 font-mono">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================================
              Column 3: Our Services (2.5 cols on desktop)
              ========================================================================= */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-3">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1A202C] tracking-tight">
                Our Services
              </h3>
              <div className="w-8 h-[2.5px] bg-[#9163A8] mt-1.5 rounded-full" />
            </div>

            <ul className="space-y-2 pt-2 text-sm text-[#4A5568]">
              <li>
                <Link 
                  href="/specialities/neurology"
                  className="hover:text-[#087F83] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="text-[#9163A8] text-xs transition-transform group-hover:translate-x-0.5 font-mono">›</span>
                  <span>Neurology Care</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/specialities/ophthalmology"
                  className="hover:text-[#087F83] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="text-[#9163A8] text-xs transition-transform group-hover:translate-x-0.5 font-mono">›</span>
                  <span>Eye Care & Ophthalmology</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/cataract-surgery"
                  className="hover:text-[#087F83] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="text-[#9163A8] text-xs transition-transform group-hover:translate-x-0.5 font-mono">›</span>
                  <span>Cataract Surgery</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/diagnostic-services"
                  className="hover:text-[#087F83] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="text-[#9163A8] text-xs transition-transform group-hover:translate-x-0.5 font-mono">›</span>
                  <span>Diagnostic Services</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/general-ot-facilities"
                  className="hover:text-[#087F83] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="text-[#9163A8] text-xs transition-transform group-hover:translate-x-0.5 font-mono">›</span>
                  <span>General OT Facilities</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* =========================================================================
              Column 4: Contact Us (2.5 cols on desktop)
              ========================================================================= */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-3">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1A202C] tracking-tight">
                Contact Us
              </h3>
              <div className="w-8 h-[2.5px] bg-[#9163A8] mt-1.5 rounded-full" />
            </div>

            <div className="space-y-3 pt-2 text-sm">
              {/* Address */}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#9163A8] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-[13px] text-[#4A5568] leading-snug">
                  3rd Cross Road, Ashok Nagar, Sai Nagar, Anantapur, Andhra Pradesh 515001.
                </p>
              </div>

              {/* Get Directions Link */}
              <a
                href={HOSPITAL_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#087F83] hover:text-[#06676A] pl-6 transition-colors"
              >
                <Send className="w-3 h-3 rotate-45" />
                <span>Get Directions →</span>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#9163A8] shrink-0" />
                <a
                  href={`tel:${HOSPITAL_DATA.phone}`}
                  className="font-bold text-sm text-[#1A202C] hover:text-[#087F83] transition-colors"
                >
                  {HOSPITAL_DATA.displayPhone}
                </a>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-[#9163A8] shrink-0 mt-0.5" />
                <div className="text-xs text-[#4A5568]">
                  <p className="font-medium text-[#1A202C]">Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p className="text-[#718096] text-[11px] mt-0.5">Emergency & Inpatient Support: 24/7</p>
                </div>
              </div>

              {/* Book an Appointment CTA Pill Button */}
              <div className="pt-2">
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#087F83] hover:bg-[#076B70] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book an Appointment</span>
                </Link>
              </div>
            </div>
          </div>

          {/* =========================================================================
              Column 5: Interactive Google Map Card with "Open in Maps" Overlay
              ========================================================================= */}
          <div className="lg:col-span-3 xl:col-span-3 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] h-[220px] rounded-2xl overflow-hidden border border-[#E2D6EE] shadow-sm bg-white group">
              {/* Google Maps Embed iframe */}
              <iframe
                title="Jay Vishnu Hospital Location Map"
                src={HOSPITAL_DATA.googleMapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-300"
              />

              {/* Floating "Open in Maps" Badge matching the reference screenshot */}
              <a
                href={HOSPITAL_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 hover:bg-white text-[#087F83] text-[11px] font-bold shadow-sm border border-slate-200 backdrop-blur-xs transition-all hover:scale-105"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3 text-[#087F83]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Legal */}
        <div className="mt-12 pt-6 border-t border-[#EFE7F6] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#718096]">
          <p className="text-center sm:text-left">
            © {currentYear} {HOSPITAL_DATA.name}. All rights reserved. Sai Nagar, Anantapur.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link href="/emergency" className="text-[#087F83] hover:text-[#06676A] font-semibold transition-colors">
              Emergency Info
            </Link>
            <span className="text-[#9163A8]">•</span>
            <Link href="/privacy-policy" className="hover:text-[#087F83] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#9163A8]">•</span>
            <Link href="/terms" className="hover:text-[#087F83] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

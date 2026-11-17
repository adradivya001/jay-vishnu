import Link from 'next/link';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { HOSPITAL_DATA, DEPARTMENTS_DATA, ADDITIONAL_SERVICES_DATA, NAV_LINKS } from '@/data/hospital';
import HospitalLogo from '@/components/shared/HospitalLogo';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#F4F0F8] text-[#34454D] border-t border-[#EAE2F3]">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Hospital Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <HospitalLogo variant="dark" />
            </Link>
            
            <p className="text-sm text-[#45666B] leading-relaxed">
              Established in 2019, providing medical consultations in Neurology and Ophthalmology, diagnostic services, eye checkups, cataract surgeries, and general OT facilities.
            </p>

            <div className="pt-2">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#087F83] hover:text-[#076B70] underline underline-offset-4 group"
              >
                Request an Appointment
                <ArrowRight className="w-3.5 h-3.5 text-[#9163A8] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-[#087F83] uppercase tracking-wider mb-4 border-l-2 border-[#9163A8] pl-2.5">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[#45666B] hover:text-[#087F83] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9163A8] group-hover:bg-[#087F83] transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-[#45666B] hover:text-[#087F83] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9163A8] group-hover:bg-[#087F83] transition-colors" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-[#45666B] hover:text-[#087F83] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9163A8] group-hover:bg-[#087F83] transition-colors" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Specialities & Additional Services */}
          <div>
            <h3 className="text-sm font-bold text-[#087F83] uppercase tracking-wider mb-4 border-l-2 border-[#087F83] pl-2.5">
              Medical Specialities
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/specialities/neurology"
                  className="text-[#45666B] hover:text-[#087F83] transition-colors flex items-center justify-between group"
                >
                  <span>Neurology</span>
                  <span className="text-[10px] text-[#9163A8] font-semibold bg-[#EAE2F3] px-2 py-0.5 rounded-full">Dr. Bharat Vishnu Reddy</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/specialities/ophthalmology"
                  className="text-[#45666B] hover:text-[#087F83] transition-colors flex items-center justify-between group"
                >
                  <span>Ophthalmology</span>
                  <span className="text-[10px] text-[#9163A8] font-semibold bg-[#EAE2F3] px-2 py-0.5 rounded-full">Dr. Leela Padmini</span>
                </Link>
              </li>
            </ul>

            <h3 className="text-xs font-bold text-[#087F83] uppercase tracking-wider mt-6 mb-3 border-l-2 border-[#9163A8] pl-2">
              Additional Services & Facilities
            </h3>
            <ul className="space-y-2 text-xs text-[#45666B]">
              <li>
                <Link 
                  href="/services/diagnostic-services"
                  className="hover:text-[#087F83] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#9163A8]">•</span>
                  <span>Diagnostic Services</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/cataract-surgery"
                  className="hover:text-[#087F83] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#9163A8]">•</span>
                  <span>Cataract Surgery</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/general-ot-facilities"
                  className="hover:text-[#087F83] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#9163A8]">•</span>
                  <span>General OT Facilities</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#087F83] uppercase tracking-wider mb-4 border-l-2 border-[#087F83] pl-2.5">
              Hospital Location & Contact
            </h3>
            
            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="w-4 h-4 text-[#9163A8] shrink-0 mt-1" />
              <p className="leading-snug text-[#45666B]">
                {HOSPITAL_DATA.address}
              </p>
            </div>

            <div className="flex items-center gap-2.5 text-sm">
              <Phone className="w-4 h-4 text-[#087F83] shrink-0" />
              <a 
                href={`tel:${HOSPITAL_DATA.phone}`} 
                className="text-[#183B45] hover:text-[#087F83] font-bold transition-colors"
              >
                {HOSPITAL_DATA.displayPhone}
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-[#45666B] pt-1">
              <Clock className="w-4 h-4 text-[#9163A8] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#183B45] font-semibold">Consultation Timings:</p>
                <p>{HOSPITAL_DATA.timingsNotice}</p>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={HOSPITAL_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs bg-white hover:bg-[#EAE2F3] text-[#087F83] font-semibold px-3 py-2 rounded-xl border border-[#EAE2F3] shadow-xs transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#9163A8]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#9163A8]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Disclaimers */}
        <div className="mt-12 pt-8 border-t border-[#EAE2F3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B6B73]">
          <p>
            © {currentYear} {HOSPITAL_DATA.name}. All rights reserved. Sai Nagar, Anantapur – 515001.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/emergency" className="text-[#087F83] hover:text-[#076B70] font-semibold">
              Emergency Information
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

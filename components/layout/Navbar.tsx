'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  ArrowRight,
  Brain,
  Eye,
  Activity,
  Calendar,
  Sparkles
} from 'lucide-react';
import { HOSPITAL_DATA, DEPARTMENTS_DATA, ADDITIONAL_SERVICES_DATA } from '@/data/hospital';
import HospitalLogo from '@/components/shared/HospitalLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [departmentsDropdownOpen, setDepartmentsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'services' | 'doctors' | 'facilities' | 'contact'>('home');
  const pathname = usePathname();

  // Scrollspy to detect currently visible section on homepage
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Only perform scrollspy section tracking when on homepage
      if (pathname === '/') {
        const sections = ['contact', 'facilities', 'doctors', 'services', 'about', 'home'] as const;
        const scrollPosition = window.scrollY + 200; // Offset for navbar

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setDepartmentsDropdownOpen(false);
  }, [pathname]);

  // Smooth scroll handler for anchor links on homepage
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, fallbackPath: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        const offset = 80; // Navbar height offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveSection(targetId as any);
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full bg-[#E9DAF9] ${
        isScrolled
          ? 'py-3 shadow-xs border-b border-[#D8C2F0]/50'
          : 'py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between min-h-[58px] sm:min-h-[64px] lg:min-h-[72px] gap-6">
          
          {/* Left: Hospital Logo with WHITE "JAY VISHNU HOSPITAL" text */}
          <Link href="/" className="flex items-center group shrink-0 mr-4 lg:mr-8 xl:mr-10">
            <HospitalLogo variant="light" showSubtitle={false} />
          </Link>

          {/* Center-Left to Right Nav items flow */}
          <nav className="hidden xl:flex items-center gap-2 lg:gap-3 text-[14px] font-medium text-[#173B45] flex-1 justify-start">
            <Link
              href="/"
              className={`px-3.5 py-1.5 rounded-full transition-colors ${
                (pathname === '/' && activeSection === 'home')
                  ? 'text-[#087F83] font-bold bg-white/70 shadow-2xs'
                  : 'hover:text-[#087F83] hover:bg-white/50'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-1.5 rounded-full transition-colors ${
                pathname === '/about' || (pathname === '/' && activeSection === 'about')
                  ? 'text-[#087F83] font-bold bg-white/70 shadow-2xs'
                  : 'hover:text-[#087F83] hover:bg-white/50'
              }`}
            >
              About Us
            </Link>

            {/* Services / Specialities Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDepartmentsDropdownOpen(true)}
              onMouseLeave={() => setDepartmentsDropdownOpen(false)}
            >
              <Link
                href="/departments"
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                  pathname.startsWith('/departments') || pathname.startsWith('/specialities') || pathname.startsWith('/services') || (pathname === '/' && activeSection === 'services')
                    ? 'text-[#087F83] font-bold bg-white/70 shadow-2xs'
                    : 'text-[#173B45] hover:text-[#087F83] hover:bg-white/50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${departmentsDropdownOpen ? 'rotate-180 text-[#087F83]' : 'text-[#45666B]'}`} />
              </Link>

              {/* Mega-Menu Panel matching the reference screenshot */}
              {departmentsDropdownOpen && (
                <div className="absolute top-full -left-20 w-[680px] bg-white rounded-3xl shadow-2xl border border-[#DDF5F1] p-6 z-50 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-6 divide-x divide-[#DDF5F1]">
                    
                    {/* Column 1: Medical Specialities */}
                    <div className="space-y-4">
                      {/* Column Header */}
                      <div className="flex items-center gap-2 pb-2 border-b border-[#DDF5F1]">
                        <div className="w-7 h-7 rounded-lg bg-[#EAF9F7] text-[#087F83] flex items-center justify-center">
                          <Brain className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-bold tracking-wider uppercase text-[#087F83]">
                          MEDICAL SPECIALITIES
                        </span>
                      </div>

                      {/* Items */}
                      <div className="space-y-2">
                        <Link
                          href="/specialities/neurology"
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#EAF9F7] transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-900 overflow-hidden shrink-0">
                            <img
                              src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=150"
                              alt="Neurology"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#183B45] group-hover:text-[#087F83] transition-colors">
                              Neurology Care
                            </h4>
                            <p className="text-[11px] text-[#45666B]">
                              Dr. Bharat Vishnu Reddy (Neurologist)
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/specialities/ophthalmology"
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#EAF9F7] transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-900 overflow-hidden shrink-0">
                            <img
                              src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=150"
                              alt="Ophthalmology"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#183B45] group-hover:text-[#087F83] transition-colors">
                              Eye Care & Ophthalmology
                            </h4>
                            <p className="text-[11px] text-[#45666B]">
                              Dr. Leela Padmini (Ophthalmologist)
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/services/cataract-surgery"
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#EAF9F7] transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-900 overflow-hidden shrink-0">
                            <img
                              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=150"
                              alt="Cataract Surgery"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#183B45] group-hover:text-[#087F83] transition-colors">
                              Cataract Surgery
                            </h4>
                            <p className="text-[11px] text-[#45666B]">
                              Vision evaluation & surgical planning
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Column 2: Additional Services & Facilities */}
                    <div className="pl-6 space-y-4 flex flex-col justify-between">
                      <div>
                        {/* Column Header */}
                        <div className="flex items-center gap-2 pb-2 border-b border-[#DDF5F1]">
                          <div className="w-7 h-7 rounded-lg bg-[#EAF9F7] text-[#087F83] flex items-center justify-center">
                            <Activity className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-bold tracking-wider uppercase text-[#087F83]">
                            FACILITIES & DIAGNOSTICS
                          </span>
                        </div>

                        {/* Items */}
                        <div className="space-y-2 mt-4">
                          <Link
                            href="/services/diagnostic-services"
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#EAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-slate-900 overflow-hidden shrink-0">
                              <img
                                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=150"
                                alt="Diagnostic Services"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-[#183B45] group-hover:text-[#087F83] transition-colors">
                                Diagnostic Services
                              </h4>
                              <p className="text-[11px] text-[#45666B]">
                                Clinical testing & supportive care
                              </p>
                            </div>
                          </Link>

                          <Link
                            href="/services/general-ot-facilities"
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#EAF9F7] transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-slate-900 overflow-hidden shrink-0">
                              <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=150"
                                alt="Operation Theatre"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-[#183B45] group-hover:text-[#087F83] transition-colors">
                                General OT Facilities
                              </h4>
                              <p className="text-[11px] text-[#45666B]">
                                Sterile operation theatre support
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Bottom Guidance Card matching the reference footer */}
                      <div className="p-3.5 rounded-2xl bg-[#EAF9F7] border border-[#DDF5F1] flex items-center justify-between">
                        <div>
                          <h5 className="text-xs font-bold text-[#183B45]">
                            Need Doctor Guidance?
                          </h5>
                          <p className="text-[11px] text-[#45666B]">
                            Select any service to view full detail
                          </p>
                        </div>
                        <Link
                          href="/appointment"
                          className="px-3.5 py-1.5 rounded-xl bg-[#087F83] hover:bg-[#06676A] text-white text-xs font-bold transition-all shadow-xs shrink-0"
                        >
                          Book Slot
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link
              href="/doctors"
              className={`px-3 py-1.5 rounded-full transition-colors ${
                pathname === '/doctors' || (pathname === '/' && activeSection === 'doctors')
                  ? 'text-[#087F83] font-bold bg-white/70 shadow-2xs'
                  : 'hover:text-[#087F83] hover:bg-white/50'
              }`}
            >
              Our Doctors
            </Link>

            <Link
              href="/facilities"
              className={`px-3 py-1.5 rounded-full transition-colors ${
                pathname === '/facilities' || (pathname === '/' && activeSection === 'facilities')
                  ? 'text-[#087F83] font-bold bg-white/70 shadow-2xs'
                  : 'hover:text-[#087F83] hover:bg-white/50'
              }`}
            >
              Facilities
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-1.5 rounded-full transition-colors ${
                pathname === '/contact' || (pathname === '/' && activeSection === 'contact')
                  ? 'text-[#087F83] font-bold bg-white/70 shadow-2xs'
                  : 'hover:text-[#087F83] hover:bg-white/50'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right: Emergency Contact Pill + Primary Action Button (Right Aligned) */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            
            {/* Soft Pale-Blue / Teal Emergency Pill */}
            <Link
              href="/emergency"
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/60 bg-white/80 hover:bg-white text-[#087F83] text-xs font-semibold shadow-2xs transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-[#087F83] animate-pulse" />
              <span>Emergency:</span>
              <span className="font-bold text-[#173B45]">{HOSPITAL_DATA.displayPhone}</span>
            </Link>

            {/* Primary Appointment Button placed prominently on the right */}
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#087F83] hover:bg-[#06676A] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 group"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#283440] hover:text-[#713F83] hover:bg-[#F4EDF7] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-[#D6EAE3] bg-[#E9F5F0] shadow-xl px-4 py-4 space-y-1.5 animate-fadeIn">
          <Link
            href="/"
            className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
              pathname === '/' && activeSection === 'home'
                ? 'text-[#087F83] bg-white shadow-xs'
                : 'text-[#173B45] hover:text-[#087F83] hover:bg-[#D8F0EB]'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
              pathname === '/about' || (pathname === '/' && activeSection === 'about')
                ? 'text-[#087F83] bg-white shadow-xs'
                : 'text-[#173B45] hover:text-[#087F83] hover:bg-[#D8F0EB]'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/departments"
            className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
              pathname.startsWith('/departments') || (pathname === '/' && activeSection === 'services')
                ? 'text-[#087F83] bg-white shadow-xs'
                : 'text-[#173B45] hover:text-[#087F83] hover:bg-[#D8F0EB]'
            }`}
          >
            Services & Specialities
          </Link>
          <Link
            href="/doctors"
            className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
              pathname === '/doctors' || (pathname === '/' && activeSection === 'doctors')
                ? 'text-[#087F83] bg-white shadow-xs'
                : 'text-[#173B45] hover:text-[#087F83] hover:bg-[#D8F0EB]'
            }`}
          >
            Our Doctors
          </Link>
          <Link
            href="/facilities"
            className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
              pathname === '/facilities' || (pathname === '/' && activeSection === 'facilities')
                ? 'text-[#087F83] bg-white shadow-xs'
                : 'text-[#173B45] hover:text-[#087F83] hover:bg-[#D8F0EB]'
            }`}
          >
            Facilities
          </Link>
          <Link
            href="/emergency"
            className="block px-3 py-2 text-sm font-semibold text-[#087F83] hover:bg-[#D8F0EB] rounded-lg"
          >
            Emergency Information
          </Link>
          <Link
            href="/contact"
            className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
              pathname === '/contact' || (pathname === '/' && activeSection === 'contact')
                ? 'text-[#087F83] bg-white shadow-xs'
                : 'text-[#173B45] hover:text-[#087F83] hover:bg-[#D8F0EB]'
            }`}
          >
            Contact Us
          </Link>
          <div className="pt-2 border-t border-[#D6EAE3]">
            <a
              href={`tel:${HOSPITAL_DATA.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-[#087F83] font-bold text-sm shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {HOSPITAL_DATA.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

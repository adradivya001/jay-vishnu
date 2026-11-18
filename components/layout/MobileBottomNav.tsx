'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Stethoscope, Calendar, MapPin } from 'lucide-react';
import { HOSPITAL_DATA } from '@/data/hospital';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      isActive: pathname === '/'
    },
    {
      name: 'About',
      href: '/about',
      icon: Info,
      isActive: pathname === '/about'
    },
    {
      name: 'Departments',
      href: '/departments',
      icon: Stethoscope,
      isActive: pathname.startsWith('/departments') || pathname.startsWith('/specialities') || pathname.startsWith('/services')
    },
    {
      name: 'Book Slot',
      href: '/appointment',
      icon: Calendar,
      isSpecial: true,
      isActive: pathname === '/appointment'
    },
    {
      name: 'Location',
      href: HOSPITAL_DATA.googleMapsUrl,
      isExternal: true,
      icon: MapPin,
      isActive: false
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#EAE2F3] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-1.5 pb-safe">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;

          if (item.isSpecial) {
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center -mt-5 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#087F83] text-white flex items-center justify-center shadow-lg border-2 border-white group-active:scale-95 transition-transform animate-cta-pulse">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#087F83] mt-1 tracking-tight">
                  {item.name}
                </span>
              </Link>
            );
          }

          if (item.isExternal) {
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center py-1 px-2 text-[#5B6B73] hover:text-[#087F83] transition-colors"
              >
                <Icon className="w-4 h-4 mb-0.5 text-[#75428A]" />
                <span className="text-[10px] font-medium tracking-tight">
                  {item.name}
                </span>
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center py-1 px-2 transition-colors ${
                item.isActive
                  ? 'text-[#087F83] font-bold'
                  : 'text-[#5B6B73] hover:text-[#087F83]'
              }`}
            >
              <Icon className={`w-4 h-4 mb-0.5 ${item.isActive ? 'text-[#087F83]' : 'text-[#75428A]'}`} />
              <span className="text-[10px] tracking-tight">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

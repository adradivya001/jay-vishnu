'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { ScrollReveal } from '@/components/motion/MotionReveal';

interface SpecialityItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const FIVE_SERVICES: SpecialityItem[] = [
  {
    id: 'neurology',
    title: 'Neurology Care',
    subtitle: 'Dr. Bharat Vishnu Reddy (Neurologist)',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
    href: '/specialities/neurology'
  },
  {
    id: 'ophthalmology',
    title: 'Eye Care & Ophthalmology',
    subtitle: 'Dr. Leela Padmini (Ophthalmologist)',
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=800',
    href: '/specialities/ophthalmology'
  },
  {
    id: 'cataract-surgery',
    title: 'Cataract Surgery',
    subtitle: 'Vision evaluation & surgical planning',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    href: '/services/cataract-surgery'
  },
  {
    id: 'diagnostic-services',
    title: 'Diagnostic Services',
    subtitle: 'Clinical testing & supportive care',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    href: '/services/diagnostic-services'
  },
  {
    id: 'general-ot-facilities',
    title: 'General OT Facilities',
    subtitle: 'Sterile operation theatre support',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    href: '/services/general-ot-facilities'
  }
];

export default function DepartmentsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  // Responsive visible cards count
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, FIVE_SERVICES.length - visibleCards);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(Math.min(idx, maxIndex));
  };

  // Auto-slide effect with hover pause and visibility change
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Handle browser tab visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartXRef.current = null;
  };

  return (
    <section 
      className="py-16 sm:py-20 bg-gradient-to-b from-[#F3EFF9]/40 via-white to-[#E9F5F0]/30 border-y border-[#EAE2F3]/60 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <SectionHeading
              badge="Our Medical Specialities"
              badgeColor="teal"
              title="Our Medical Specialities"
              description="Comprehensive specialist care and essential hospital services under one roof."
              center={false}
            />
          </div>

          {/* Carousel Manual Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous service"
              className="w-10 h-10 rounded-full border border-[#EAE2F3] bg-white text-[#173B45] hover:text-[#087F83] hover:border-[#087F83] hover:bg-[#F3EFF9] shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next service"
              className="w-10 h-10 rounded-full border border-[#EAE2F3] bg-white text-[#173B45] hover:text-[#087F83] hover:border-[#087F83] hover:bg-[#F3EFF9] shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div 
          className="relative overflow-hidden cursor-grab active:cursor-grabbing pb-2"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
            }}
          >
            {FIVE_SERVICES.map((service) => (
              <div
                key={service.id}
                className="px-2.5 sm:px-3 shrink-0"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="h-full bg-white rounded-2xl sm:rounded-3xl border border-[#EAE2F3] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                  
                  {/* Top: Service Image */}
                  <div>
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#F3EFF9]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Middle: Title & Subtitle */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-base sm:text-lg font-bold text-[#173B45] group-hover:text-[#087F83] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#526773] leading-relaxed">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Bottom: View Details Link */}
                  <div className="px-5 sm:px-6 pb-5 pt-0">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087F83] group-hover:text-[#076B70] transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-7 bg-[#087F83]'
                  : 'w-2 bg-[#EAE2F3] hover:bg-[#9163A8]/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

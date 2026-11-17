'use client';

import { Facility } from '@/data/hospital';
import { HoverCard } from '@/components/motion/MotionReveal';

interface FacilityCardProps {
  facility: Facility;
}

export default function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <HoverCard lift={-6} className="h-full">
      <div className="h-full bg-white rounded-2xl border border-[#E8E3EC] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group">
        <div className="relative h-52 w-full bg-[#FAF8FC] overflow-hidden">
          <img 
            src={facility.image} 
            alt={facility.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-[#713F83] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs border border-[#EDE2F2]">
            {facility.category}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-serif font-bold text-[#283440] group-hover:text-[#713F83] transition-colors">
              {facility.title}
            </h3>
            <p className="mt-2 text-sm text-[#687582] leading-relaxed">
              {facility.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </HoverCard>
  );
}

'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Brain, Eye, LucideIcon } from 'lucide-react';
import { Department } from '@/data/hospital';
import { HoverCard } from '@/components/motion/MotionReveal';

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Eye
};

interface DepartmentCardProps {
  department: Department;
}

export default function DepartmentCard({ department }: DepartmentCardProps) {
  const IconComponent = iconMap[department.icon] || Brain;

  return (
    <HoverCard lift={-6} className="h-full">
      <div className="h-full bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group">
        {/* Card Image */}
        <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
          <img 
            src={department.image} 
            alt={department.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
          
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
            Doctor: {department.doctorName}
          </div>

          {/* Floating Icon */}
          <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-[#713F83]">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-serif font-bold text-[#283440] group-hover:text-[#713F83] transition-colors">
              {department.name}
            </h3>
            <p className="mt-2 text-sm text-[#687582] leading-relaxed">
              {department.shortDescription}
            </p>

            {/* Topics Covered */}
            <div className="mt-4 pt-4 border-t border-[#E8E3EC]">
              <p className="text-xs font-semibold text-[#687582] uppercase tracking-wider mb-2">
                Consultation Scope:
              </p>
              <ul className="space-y-1.5">
                {department.topics.slice(0, 3).map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#283440]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#398EB8] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6 pt-4 border-t border-[#E8E3EC] flex items-center justify-between">
            <Link
              href={`/departments#${department.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#713F83] hover:text-[#398EB8] transition-colors"
            >
              <span>View Speciality Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/appointment?department=${encodeURIComponent(department.name)}`}
              className="text-xs bg-[#F4EDF7] hover:bg-[#EDE2F2] text-[#713F83] font-medium px-3 py-1.5 rounded-lg border border-[#EDE2F2] transition-colors"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </HoverCard>
  );
}

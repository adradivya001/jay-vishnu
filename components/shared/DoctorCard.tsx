'use client';

import Link from 'next/link';
import { Calendar, ArrowRight, UserCheck, Stethoscope } from 'lucide-react';
import { Doctor } from '@/data/hospital';

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const isNeurologist = doctor.speciality.toLowerCase().includes('neuro');
  const designation = isNeurologist ? 'Consultant Neurologist' : 'Ophthalmologist';
  const profileLink = isNeurologist ? '/specialities/neurology' : '/specialities/ophthalmology';

  return (
    <div className="h-full bg-white rounded-2xl sm:rounded-3xl border border-[#EAE2F3] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group">
      <div className="flex flex-col sm:flex-row h-full">
        
        {/* Doctor Photograph (42–45% of card) */}
        <div className="sm:w-[45%] relative min-h-[260px] sm:min-h-[290px] bg-gradient-to-b from-[#F3EFF9] to-[#E9F5F0]/50 overflow-hidden flex items-center justify-center">
          {doctor.image ? (
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            /* Elegant neutral placeholder with asset notice if photograph is not yet supplied */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F3EFF9]/70">
              <div className="w-16 h-16 rounded-full bg-white border border-[#EAE2F3] flex items-center justify-center text-[#9163A8] shadow-xs mb-3">
                <Stethoscope className="w-7 h-7" />
              </div>
              <p className="text-xs font-bold text-[#173B45]">{doctor.name}</p>
              <p className="text-[11px] text-[#087F83] font-semibold mt-0.5">{designation}</p>
              <span className="mt-3 text-[10px] font-medium text-[#526773] bg-white/90 px-2.5 py-1 rounded-full border border-[#EAE2F3]">
                Official portrait pending
              </span>
            </div>
          )}

          {/* Speciality Badge */}
          <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-[#087F83] text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs border border-[#EAE2F3]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9163A8]" />
            <span>{doctor.speciality}</span>
          </div>
        </div>

        {/* Doctor Information (55–58% of card) */}
        <div className="sm:w-[55%] p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-[22px] font-serif font-bold text-[#173B45] group-hover:text-[#087F83] transition-colors leading-tight">
              {doctor.name}
            </h3>
            
            <p className="text-xs sm:text-sm font-semibold text-[#087F83] mt-1 tracking-wide">
              {designation}
            </p>

            <p className="mt-3.5 text-xs sm:text-sm text-[#526773] leading-relaxed">
              {doctor.profileDescription}
            </p>
          </div>

          {/* Clean Action Buttons */}
          <div className="mt-6 pt-5 border-t border-[#EAE2F3] flex flex-wrap sm:flex-nowrap items-center gap-2.5">
            {/* Primary CTA: Book Consultation */}
            <Link
              href={`/appointment?doctor=${encodeURIComponent(doctor.name)}&department=${encodeURIComponent(doctor.speciality)}`}
              className="flex-1 text-center py-2.5 px-3.5 rounded-xl bg-[#087F83] hover:bg-[#076B70] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </Link>

            {/* Secondary CTA: View Profile */}
            <Link
              href={profileLink}
              className="py-2.5 px-3.5 rounded-xl border border-[#65C9BA]/50 hover:border-[#087F83] bg-white hover:bg-[#F3EFF9] text-[#087F83] text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1 shrink-0"
            >
              <span>View Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

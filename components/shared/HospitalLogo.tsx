import { HOSPITAL_DATA } from '@/data/hospital';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export default function HospitalLogo({ 
  variant = 'dark', 
  className = '',
  showSubtitle = false 
}: LogoProps) {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 lg:gap-4 select-none ${className}`}>
      {/* Official Eye & Brain Neuro-Ophthalmic Symbol (Prominent Sizing) */}
      <div className="relative w-[46px] h-[46px] xs:w-[52px] xs:h-[52px] sm:w-[62px] sm:h-[62px] lg:w-[72px] lg:h-[72px] xl:w-[78px] xl:h-[78px] shrink-0 flex items-center justify-center">
        <img
          src="/images/logo/official-hospital-symbol.png"
          alt="Jay Vishnu Hospital Symbol"
          className="w-full h-full object-contain"
          width={78}
          height={78}
        />
      </div>

      {/* Official Hospital Name: Purple (#800080 / #75147C) matching the emblem symbol */}
      <div className="flex flex-col justify-center min-w-0">
        <span 
          className={`font-extrabold tracking-[0.02em] sm:tracking-[0.03em] uppercase leading-tight ${
            isLight 
              ? 'text-[15px] xs:text-[17px] sm:text-[22px] lg:text-[27px] xl:text-[30px] truncate sm:whitespace-nowrap text-[#800080]' 
              : 'text-[15px] xs:text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] text-[#800080]'
          }`}
          style={{ 
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 800
          }}
        >
          JAY VISHNU HOSPITAL
        </span>
        {showSubtitle && (
          <span className={`text-[11px] font-semibold flex items-center gap-1 mt-1 ${isLight ? 'text-white/80' : 'text-[#45666B]'}`}>
            <span>Sai Nagar, Anantapur • Est. 2019</span>
          </span>
        )}
      </div>
    </div>
  );
}

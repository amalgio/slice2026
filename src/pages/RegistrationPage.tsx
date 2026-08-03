import React from 'react';
import { Sparkles, AlertCircle } from 'lucide-react';
import { SliceLogo } from '../components/SliceLogo';

export const RegistrationPage: React.FC = () => {
  return (
    <div className="relative z-10 pt-28 pb-16 space-y-8 max-w-6xl mx-auto px-4">
      
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center space-x-3 text-[#C5A059]">
          <span className="h-[1px] w-16 bg-[#C5A059]" />
          <span className="font-special text-xs uppercase tracking-widest text-[#705335]">Official Registration Desk</span>
          <span className="h-[1px] w-16 bg-[#C5A059]" />
        </div>
        
        <h1 className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#1E120B]">
          SLICE ’26 Registration
        </h1>

        <p className="font-cormorant italic text-xl text-[#5C4028] max-w-2xl mx-auto">
          Complete the official registration form below to confirm your participation in SLICE’26 National Technical Symposium.
        </p>
      </div>

      {/* Info Callout Strip */}
      <div className="bg-[#1E120B] border-2 border-[#C5A059] p-4 sm:p-5 rounded-lg shadow-xl text-[#F4E8C1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-eb">
        <div className="flex items-center space-x-3">
          <SliceLogo size="sm" />
          <div>
            <strong className="font-cinzel text-sm text-[#F4E8C1] block">Registration Notice</strong>
            <span className="text-[#EADBB1]/80">
              One registration per participant or team leader allows entry across all eligible symposium technical & non-technical events.
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 bg-[#2A1A10] px-3 py-1.5 rounded border border-[#C5A059]/40 whitespace-nowrap">
          <Sparkles className="w-4 h-4 text-[#C85A17]" />
          <span className="font-special text-[11px] text-[#D4AF37]">August 8, 2026 @ LICET</span>
        </div>
      </div>

      {/* Vintage Parchment Frame Container wrapping the Google Form iframe */}
      <div className="parchment-card p-2 sm:p-6 rounded-xl border-2 border-[#C5A059] shadow-2xl overflow-hidden bg-[#F8F3E6]">
        
        <div className="bg-[#1E120B] text-[#F4E8C1] px-4 py-3 rounded-t-lg border-b border-[#C5A059] flex items-center justify-between mb-4">
          <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
            LICET ECE Official Google Registration Portal
          </span>
          <span className="font-special text-[11px] text-[#C5A059]">
            Encrypted & Direct Submission
          </span>
        </div>

        {/* Embedded Google Form Iframe as explicitly requested */}
        <div className="w-full overflow-hidden rounded-lg bg-white border border-[#C5A059]/40 shadow-inner">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe_zgcUhYqafbPwu0mBx6p6vTcQ8wx2VaQLhhiAbaAq95Uc9w/viewform?embedded=true"
            width="100%"
            height="1200"
            title="SLICE 2026 Registration Form"
            style={{ border: 'none', display: 'block' }}
          >
            Loading…
          </iframe>
        </div>

      </div>

    </div>
  );
};

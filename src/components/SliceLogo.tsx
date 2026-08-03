import React from 'react';

interface SliceLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '3xl' | 'hero';
}

export const SliceLogo: React.FC<SliceLogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-36 h-36',
    xl: 'w-48 h-48',
    '3xl': 'w-[320px] h-[320px] sm:w-[550px] sm:h-[550px] md:w-[750px] md:h-[750px]',
    hero: 'w-[320px] h-[320px] sm:w-[550px] sm:h-[550px] md:w-[750px] md:h-[750px]',
  }[size];

  return (
    <img 
      src="/sym.png" 
      alt="ECE SLICE Symbol" 
      className={`object-contain block shrink-0 filter drop-shadow-[0_0_16px_rgba(255,241,160,0.8)] ${dimensions} ${className}`} 
    />
  );
};


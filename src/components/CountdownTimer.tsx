import React, { useState, useEffect } from 'react';
import { Compass, Clock, Zap, Shield, Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  // Target date: August 8, 2026 at 9:30 AM IST
  const targetDate = new Date('2026-08-08T09:30:00+05:30').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTwoDigits = (num: number) => String(num).padStart(2, '0');

  const gauges = [
    { label: 'DAYS', value: formatTwoDigits(timeLeft.days), sub: 'JOURNEYS', max: 365, percent: Math.min(100, (timeLeft.days / 365) * 100) },
    { label: 'HOURS', value: formatTwoDigits(timeLeft.hours), sub: 'CYCLES', max: 24, percent: (timeLeft.hours / 24) * 100 },
    { label: 'MINUTES', value: formatTwoDigits(timeLeft.minutes), sub: 'CHRONOS', max: 60, percent: (timeLeft.minutes / 60) * 100 },
    { label: 'SECONDS', value: formatTwoDigits(timeLeft.seconds), sub: 'PULSES', max: 60, percent: (timeLeft.seconds / 60) * 100 },
  ];

  const romanNumerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

  return (
    <div className="relative max-w-3xl mx-auto my-6 px-2 sm:px-4 select-none">
      
      {/* Top Pocket Watch Crown & Winder Ring */}
      <div className="flex flex-col items-center justify-center -mb-5 relative z-20">
        <div className="w-12 h-12 rounded-full border-4 border-[#D4AF37] bg-gradient-to-b from-[#FFF1A0] via-[#D4AF37] to-[#8A6B3F] shadow-[0_0_20px_rgba(212,175,55,0.7)] flex items-center justify-center relative">
          <div className="w-6 h-6 rounded-full border-2 border-[#120A05] bg-[#2B1B10] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#F4B942]" />
          </div>
        </div>
        <div className="w-8 h-4 bg-gradient-to-r from-[#8A6B3F] via-[#D4AF37] to-[#8A6B3F] border-x border-[#FFF1A0] rounded-sm -mt-1 shadow" />
      </div>

      {/* Main Pocket Watch Casing Body */}
      <div className="relative bg-gradient-to-b from-[#2B1B10] via-[#1C120C] to-[#120A05] border-[6px] border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-[0_0_60px_rgba(0,0,0,0.95),inset_0_0_35px_rgba(212,175,55,0.3)] overflow-hidden">
        
        {/* Background Rotating Gears */}
        <div className="absolute -top-12 -left-12 opacity-20 pointer-events-none animate-gear-spin">
          <svg className="w-52 h-52 text-[#D4AF37]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 20 A30 30 0 1 0 50 80 A30 30 0 1 0 50 20 Z M50 0 L55 10 L65 5 L65 18 L77 18 L73 29 L83 36 L75 45 L85 55 L73 60 L79 72 L67 74 L68 87 L55 85 L50 97 L45 85 L32 87 L33 74 L21 72 L27 60 L15 55 L25 45 L17 36 L27 29 L23 18 L35 18 L35 5 L45 10 Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 -right-16 opacity-20 pointer-events-none animate-gear-spin-rev">
          <svg className="w-60 h-60 text-[#F4B942]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 20 A30 30 0 1 0 50 80 A30 30 0 1 0 50 20 Z M50 0 L55 10 L65 5 L65 18 L77 18 L73 29 L83 36 L75 45 L85 55 L73 60 L79 72 L67 74 L68 87 L55 85 L50 97 L45 85 L32 87 L33 74 L21 72 L27 60 L15 55 L25 45 L17 36 L27 29 L23 18 L35 18 L35 5 L45 10 Z" />
          </svg>
        </div>

        {/* Volumetric Lantern Amber Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-36 bg-radial from-[#F4B942]/25 via-[#C85A17]/10 to-transparent blur-2xl pointer-events-none animate-lantern" />

        {/* Antique Glass Glare Reflection Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFF1A0]/8 to-transparent pointer-events-none rounded-3xl" />

        {/* Four Corner Brass Screws & Rivets */}
        <div className="absolute top-3 left-3 w-3.5 h-3.5 rounded-full bg-[#D4AF37] border border-[#FFF1A0] shadow-[0_1px_4px_rgba(0,0,0,0.9)] flex items-center justify-center">
          <div className="w-2.5 h-[1.5px] bg-[#120A05] rotate-45" />
        </div>
        <div className="absolute top-3 right-3 w-3.5 h-3.5 rounded-full bg-[#D4AF37] border border-[#FFF1A0] shadow-[0_1px_4px_rgba(0,0,0,0.9)] flex items-center justify-center">
          <div className="w-2.5 h-[1.5px] bg-[#120A05] -rotate-45" />
        </div>
        <div className="absolute bottom-3 left-3 w-3.5 h-3.5 rounded-full bg-[#D4AF37] border border-[#FFF1A0] shadow-[0_1px_4px_rgba(0,0,0,0.9)] flex items-center justify-center">
          <div className="w-2.5 h-[1.5px] bg-[#120A05] -rotate-12" />
        </div>
        <div className="absolute bottom-3 right-3 w-3.5 h-3.5 rounded-full bg-[#D4AF37] border border-[#FFF1A0] shadow-[0_1px_4px_rgba(0,0,0,0.9)] flex items-center justify-center">
          <div className="w-2.5 h-[1.5px] bg-[#120A05] rotate-60" />
        </div>

        {/* Compact Engraved Brass Nameplate Identification Header */}
        <div className="relative z-10 text-center mb-5 space-y-1">
          <div className="inline-flex items-center space-x-2 px-5 py-1.5 rounded-md bg-gradient-to-b from-[#3B2314] via-[#24150B] to-[#120A05] border-2 border-[#D4AF37] shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            <Compass className="w-4 h-4 text-[#F4B942] animate-spin-[25s]" />
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-widest text-[#FFF1A0] uppercase drop-shadow">
              NO. 1886-SLICE-ECE-CHRONO
            </span>
            <Clock className="w-4 h-4 text-[#F4B942]" />
          </div>
          <p className="font-cormorant italic text-sm sm:text-base text-[#D4AF37] font-semibold tracking-wide pt-1">
            AUGUST 8, 2026 • 09:30 AM IST • LICET CAMPUS
          </p>
        </div>

        {/* Perimeter Roman Numerals Ring Header */}
        <div className="hidden sm:flex justify-between items-center px-8 mb-5 text-xs font-cinzel text-[#C5A059] tracking-widest font-semibold">
          {romanNumerals.slice(0, 6).map((num, i) => (
            <span key={i} className="hover:text-[#FFF1A0] transition cursor-default">{num}</span>
          ))}
          <span className="text-[#F4B942] font-bold text-xs tracking-widest">❖ MASTER DIAL ❖</span>
          {romanNumerals.slice(6, 12).map((num, i) => (
            <span key={i} className="hover:text-[#FFF1A0] transition cursor-default">{num}</span>
          ))}
        </div>

        {/* Four Circular Steampunk Brass Gauges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
          {gauges.map((gauge, idx) => {
            const isSeconds = gauge.label === 'SECONDS';
            return (
              <div key={idx} className="flex flex-col items-center group">
                
                {/* Circular Gauge Dial Casing */}
                <div className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#D4AF37] bg-radial from-[#3B2314] via-[#1E120B] to-[#0D0704] shadow-[0_8px_20px_rgba(0,0,0,0.95),inset_0_0_25px_rgba(212,175,55,0.4)] flex flex-col items-center justify-center p-2 transition-transform duration-300 hover:scale-105 ${isSeconds ? 'animate-tick' : ''}`}>
                  
                  {/* Gauge Corner Brass Rivets */}
                  <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFF1A0] shadow" />
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFF1A0] shadow" />
                  <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FFF1A0] shadow" />
                  <span className="absolute right-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FFF1A0] shadow" />

                  {/* Circular Dial Radial Ticks SVG */}
                  <svg className="absolute inset-0 w-full h-full p-1 opacity-50 text-[#D4AF37]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2, 4" />
                    <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1, 3" />
                  </svg>

                  {/* Glass Glare */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-[#FFF1A0]/12 to-transparent pointer-events-none" />

                  {/* Sub-label top */}
                  <span className="font-cinzel text-xs sm:text-sm uppercase tracking-widest text-[#FFF1A0] z-10 mb-0.5 font-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    {gauge.sub}
                  </span>

                  {/* Large Engraved High-Contrast Gold Number */}
                  <span className="font-cinzel text-4xl sm:text-6xl font-black text-[#FFF1A0] drop-shadow-[0_2px_12px_rgba(255,241,160,0.8)] z-10 tracking-tight">
                    {gauge.value}
                  </span>

                  {/* Dial Arc Progress Indicator */}
                  <div className="w-14 h-1.5 bg-[#120A05] rounded-full overflow-hidden border border-[#8A6B3F] mt-1.5 z-10 shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-[#8A6B3F] via-[#F4B942] to-[#FFF1A0] transition-all duration-500"
                      style={{ width: `${gauge.percent}%` }}
                    />
                  </div>

                </div>

                {/* Victorian Engraved Label Plaque */}
                <div className="mt-3.5 px-3 py-1 rounded bg-gradient-to-b from-[#3B2314] via-[#2A1A10] to-[#120A05] border border-[#D4AF37] shadow-[0_3px_6px_rgba(0,0,0,0.7)] flex items-center justify-center space-x-1.5 w-full max-w-[130px]">
                  <span className="w-1 h-1 rounded-full bg-[#F4B942]" />
                  <span className="font-cinzel text-xs sm:text-sm font-bold text-[#FFF1A0] tracking-wider uppercase">
                    {gauge.label}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#F4B942]" />
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Instrument Engraved Serial Plaque */}
        <div className="mt-7 pt-4 border-t border-[#8A6B3F]/60 flex flex-wrap items-center justify-between gap-3 text-xs font-cinzel text-[#C5A059] relative z-10">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F4B942] animate-ping" />
            <span className="text-[11px] font-bold text-[#E8D8B0] tracking-wider">CHRONOMETER ACTIVE</span>
          </div>
          <div className="text-[10px] tracking-widest text-[#FFF1A0] uppercase bg-[#120A05] px-3 py-1 rounded border border-[#8A6B3F] shadow">
            VICTORIAN ECE BENCH INSTRUMENT
          </div>
          <div className="flex items-center space-x-1 text-[11px] text-[#C5A059] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B942]" />
            <span>SLICE 26</span>
          </div>
        </div>

      </div>
    </div>
  );
};

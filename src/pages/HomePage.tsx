import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EVENTS_DATA } from '../data/eventsData';
import { EventCard } from '../components/EventCard';
import { VintageModal } from '../components/VintageModal';
import { CountdownTimer } from '../components/CountdownTimer';
import { EventItem } from '../types';
import { Calendar, MapPin, Clock, ArrowRight, Instagram, Linkedin, Shield, Compass, Sparkles, ChevronDown } from 'lucide-react';
import { SliceLogo } from '../components/SliceLogo';
import { CroOscilloscope } from '../components/CroOscilloscope';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedQuickViewEvent, setSelectedQuickViewEvent] = useState<EventItem | null>(null);
  const [activeTabEvent, setActiveTabEvent] = useState<EventItem>(EVENTS_DATA[0]);

  // Featured Categories for quick access
  const featuredEvents = EVENTS_DATA;

  return (
    <div className="relative z-10 pt-28 pb-16 space-y-16 crt-overlay">
      
      {/* HERO SECTION - Refined Victorian Steampunk Explorer's Desk Composition */}
      <section className="max-w-6xl mx-auto px-4 text-center relative">
        
        {/* Subtle Watermark behind Logo (5-8% opacity giant compass rose / engineering gear) */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-96 sm:h-96 opacity-[0.07] pointer-events-none text-[#D4AF37] animate-gear-spin">
          <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-current stroke-[1.5]">
            <circle cx="100" cy="100" r="90" strokeDasharray="4, 4" />
            <circle cx="100" cy="100" r="75" />
            <circle cx="100" cy="100" r="50" strokeDasharray="2, 3" />
            <path d="M100 0 L100 200 M0 100 L200 100 M29 29 L171 171 M171 29 L29 171" strokeWidth="1" />
            <polygon points="100,20 108,80 160,100 108,120 100,180 92,120 40,100 92,80" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </div>

        {/* Foreground Steampunk Decorative Left Assembly */}
        <div className="hidden lg:flex flex-col items-center absolute -left-12 top-10 opacity-70 pointer-events-none space-y-4">
          <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37]/50 bg-[#1E120B]/60 p-2 shadow-lg backdrop-blur-xs flex items-center justify-center animate-pulse">
            <Compass className="w-12 h-12 text-[#F4B942]" />
          </div>
          <div className="w-14 h-14 text-[#D4AF37]/60 animate-gear-spin">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 20 A30 30 0 1 0 50 80 A30 30 0 1 0 50 20 Z M50 0 L55 10 L65 5 L65 18 L77 18 L73 29 L83 36 L75 45 L85 55 L73 60 L79 72 L67 74 L68 87 L55 85 L50 97 L45 85 L32 87 L33 74 L21 72 L27 60 L15 55 L25 45 L17 36 L27 29 L23 18 L35 18 L35 5 L45 10 Z" />
            </svg>
          </div>
          <div className="font-mono text-[9px] text-[#C5A059] tracking-widest border-t border-[#8A6B3F]/40 pt-1">
            DRAFTING SPEC • 1886
          </div>
        </div>

        {/* Foreground Steampunk Decorative Right Assembly */}
        <div className="hidden lg:flex flex-col items-center absolute -right-12 top-10 opacity-70 pointer-events-none space-y-4">
          <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37]/50 bg-[#1E120B]/60 p-2 shadow-lg backdrop-blur-xs flex items-center justify-center">
            <Clock className="w-12 h-12 text-[#F4B942] animate-tick" />
          </div>
          <div className="w-14 h-14 text-[#F4B942]/60 animate-gear-spin-rev">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 20 A30 30 0 1 0 50 80 A30 30 0 1 0 50 20 Z M50 0 L55 10 L65 5 L65 18 L77 18 L73 29 L83 36 L75 45 L85 55 L73 60 L79 72 L67 74 L68 87 L55 85 L50 97 L45 85 L32 87 L33 74 L21 72 L27 60 L15 55 L25 45 L17 36 L27 29 L23 18 L35 18 L35 5 L45 10 Z" />
            </svg>
          </div>
          <div className="font-mono text-[9px] text-[#C5A059] tracking-widest border-t border-[#8A6B3F]/40 pt-1">
            CHRONO GAUGE • ECE
          </div>
        </div>

        {/* Top Hero Header Section (Tight, Connected Vertical Layout) */}
        <div className="py-2 mb-2 flex flex-col items-center justify-center text-[#F4E8C1] relative z-10">
          
          {/* Illuminated Department Logo Emblem */}
          <div className="mb-2 transition-transform duration-300 hover:scale-105 flex items-center justify-center">
            <SliceLogo size="3xl" className="-mt-[150px] h-[750px] w-[751px] max-w-none pl-[1px]" />
          </div>
          {/* Department Title - Reduced size to keep on a single line */}
          <div className="font-cinzel text-xs sm:text-base md:text-xl lg:text-2xl font-black tracking-[0.14em] text-[#120803] uppercase whitespace-nowrap my-1 drop-shadow-[0_1px_3px_rgba(255,241,160,0.9)] -mt-[219px] pl-[2px] ml-0 w-full text-center">
            DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING
          </div>

          {/* Engraved Master Hero Title (+30% Size Boost) */}
          <h1 className="font-cinzel text-6xl sm:text-8xl lg:text-9xl font-black bg-gradient-to-b from-[#FFF1A0] via-[#F4B942] via-[#D4AF37] to-[#8A6B3F] bg-clip-text text-transparent tracking-wider my-1 drop-shadow-[0_6px_12px_rgba(0,0,0,0.95)] filter brightness-110 mt-[22px]">
            SLICE '26
          </h1>

          {/* Subtitle */}
          <p className="font-cormorant italic text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest text-[#FFF1A0] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] mb-2 flex items-center justify-center space-x-2">
            <span className="text-[#F4B942]">❖</span>
            <span>A National Level Technical Symposium</span>
            <span className="text-[#F4B942]">❖</span>
          </p>

        </div>

        {/* Victorian Brass Chronometer Countdown Timer */}
        <CountdownTimer />

        {/* Single Continuous Authentic Aged Parchment Strip - Inspired by 100-Year Engineering Journal */}
        <div className="relative mt-16 sm:mt-20 mb-10 max-w-4xl mx-auto group">
          {/* Subtle Shadow underneath continuous parchment */}
          <div className="absolute -inset-1 bg-[#150A04]/60 blur-md rounded-sm transform translate-y-2 group-hover:translate-y-3 transition-transform duration-200" />

          {/* Main Continuous Parchment Container */}
          <div className="relative vintage-parchment-strip py-5 px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 my-2 overflow-hidden">
            
            {/* Top & Bottom Irregular Torn Paper Edge Overlay */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-repeat-x opacity-40" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='6' viewBox='0 0 20 6'%3E%3Cpath d='M0,0 L4,5 L8,1 L12,6 L16,2 L20,5 L20,0 Z' fill='%23503214'/%3E%3C/svg%3E\")" }} />
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-repeat-x opacity-40 rotate-180" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='6' viewBox='0 0 20 6'%3E%3Cpath d='M0,0 L4,5 L8,1 L12,6 L16,2 L20,5 L20,0 Z' fill='%23321A08'/%3E%3C/svg%3E\")" }} />

            {/* Coffee Stain & Burn Watermarks */}
            <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-[#8C5523]/10 blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 right-10 w-32 h-32 rounded-full bg-[#5E3410]/15 blur-2xl pointer-events-none" />

            {/* Section 1: DATE */}
            <div className="flex-1 flex items-center justify-center space-x-3.5 px-3 py-1">
              <div className="p-2.5 bg-[#E4D2AE]/80 rounded border border-[#8C6133]/40 shadow-inner">
                <Calendar className="w-6 h-6 text-[#1E120B] stroke-[2.2]" />
              </div>
              <div className="text-left">
                <span className="block font-cinzel text-xs sm:text-sm text-[#8B1E0B] font-extrabold uppercase tracking-wider mb-1">
                  DATE
                </span>
                <span className="font-pixel font-bold text-base sm:text-xl text-[#100803] leading-none tracking-wide">
                  8th AUGUST 2026
                </span>
              </div>
            </div>

            {/* Faded Vintage Divider 1 */}
            <div className="hidden md:block w-[2px] h-12 bg-gradient-to-b from-transparent via-[#8C6133]/60 to-transparent" />

            {/* Section 2: VENUE */}
            <div className="flex-1 flex items-center justify-center space-x-3.5 px-3 py-1">
              <div className="p-2.5 bg-[#E4D2AE]/80 rounded border border-[#8C6133]/40 shadow-inner">
                <MapPin className="w-6 h-6 text-[#1E120B] stroke-[2.2]" />
              </div>
              <div className="text-left">
                <span className="block font-cinzel text-xs sm:text-sm text-[#8B1E0B] font-extrabold uppercase tracking-wider mb-1">
                  VENUE
                </span>
                <span className="font-pixel font-bold text-base sm:text-xl text-[#100803] leading-none tracking-wide block">
                  LICET
                </span>
              </div>
            </div>

            {/* Faded Vintage Divider 2 */}
            <div className="hidden md:block w-[2px] h-12 bg-gradient-to-b from-transparent via-[#8C6133]/60 to-transparent" />

            {/* Section 3: TIME */}
            <div className="flex-1 flex items-center justify-center space-x-3.5 px-3 py-1">
              <div className="p-2.5 bg-[#E4D2AE]/80 rounded border border-[#8C6133]/40 shadow-inner">
                <Clock className="w-6 h-6 text-[#1E120B] stroke-[2.2]" />
              </div>
              <div className="text-left">
                <span className="block font-cinzel text-xs sm:text-sm text-[#8B1E0B] font-extrabold uppercase tracking-wider mb-1">
                  TIME
                </span>
                <span className="font-pixel font-bold text-base sm:text-xl text-[#100803] leading-none tracking-wide">
                  9:30 AM ONWARDS
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Hero Arcade CTA Button */}
        <div className="pt-2">
          <button 
            onClick={() => navigate('/register')}
            className="btn-walnut px-8 py-4 text-lg rounded-md uppercase tracking-wider flex items-center space-x-3 mx-auto shadow-2xl mt-[50px] pl-[33px]"
          >
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span>REGISTER FOR SYMPOSIUM NOW</span>
            <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
          </button>
        </div>

        {/* Down Arrow Indicator */}
        <div className="pt-10 text-[#C5A059] animate-bounce flex justify-center">
          <ChevronDown className="w-8 h-8" />
        </div>

      </section>

      {/* INTERACTIVE VIRTUAL ECE OSCILLOSCOPE LABORATORY BENCH */}
      <section className="max-w-7xl mx-auto px-4 my-8">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 text-[#C5A059]">
            <span className="h-[1px] w-16 bg-[#C5A059]" />
            <span className="font-special text-xs uppercase tracking-widest text-[#705335] -mt-[50px]">Interactive E-Bench</span>
            <span className="h-[1px] w-16 bg-[#C5A059]" />
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1E120B] mt-1">
            Victorian ECE Oscilloscope Simulator
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#5C4028] max-w-lg mx-auto">
            Test signals, adjust time division & amplitude on our Tektronix virtual bench console.
          </p>
        </div>

        <CroOscilloscope />
      </section>


      {/* "OUR EVENTS" CATEGORIES PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4">
        
        {/* Section Title Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-3 text-[#C5A059]">
            <span className="h-[1px] w-16 bg-[#C5A059]" />
            <span className="font-special text-xs uppercase tracking-widest text-[#705335]">Explore Arenas</span>
            <span className="h-[1px] w-16 bg-[#C5A059]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#1E120B] mt-1">
            Our Symposium Events
          </h2>
          <p className="font-cormorant italic text-lg text-[#5C4028] max-w-xl mx-auto mt-1">
            8 technical challenges designed for innovation, logic, and speed.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onQuickView={(evt) => setSelectedQuickViewEvent(evt)} 
            />
          ))}
        </div>

        <div className="text-center pt-8">
          <button 
            onClick={() => navigate('/events')}
            className="btn-brass px-8 py-3 text-sm rounded uppercase tracking-wider inline-flex items-center space-x-2"
          >
            <span>View All 8 Events</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* ABOUT PREVIEW SECTION & SOCIAL LOGBOOK (Matching bottom section of Reference Image) */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* About Slice'26 Card */}
          <div className="parchment-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-[#C85A17] mb-2">
                <Compass className="w-5 h-5" />
                <span className="font-special text-xs uppercase tracking-widest">Legacy & Purpose</span>
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-[#1E120B] mb-3">
                About Slice ’26
              </h3>
              <p className="font-eb text-base text-[#3B2314] leading-relaxed mb-4">
                SLICE’26 is the signature technical symposium of the Department of Electronics & Communication Engineering, LICET. It brings together innovation, circuit mastery, and technical creativity. Join us to explore, compete, and be inspired in the ever-evolving world of technology.
              </p>
            </div>

            <div>
              <button 
                onClick={() => navigate('/about')}
                className="btn-walnut px-6 py-2.5 text-xs rounded uppercase tracking-wider"
              >
                Read Full History
              </button>
            </div>
          </div>

          {/* Follow Us / Stay Connected Card */}
          <div className="parchment-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-[#C85A17] mb-2">
                <Instagram className="w-5 h-5" />
                <span className="font-special text-xs uppercase tracking-widest">Stay Connected</span>
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-[#1E120B] mb-2">
                Follow TEC LICET
              </h3>
              <p className="font-eb text-sm text-[#5C4028] mb-6">
                Get real-time symposium updates, rulebooks, venue announcements, and behind-the-scenes teasers on our official channels.
              </p>

              <div className="space-y-3">
                <a 
                  href="https://www.instagram.com/slice_ece/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-walnut w-full py-3 text-xs rounded uppercase flex items-center justify-center space-x-3"
                >
                  <Instagram className="w-4 h-4 text-[#D4AF37]" />
                  <span>Follow Us On Instagram (@slice_ece)</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/tec-the-electronics-club-licet-a625332a2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-brass w-full py-3 text-xs rounded uppercase flex items-center justify-center space-x-3"
                >
                  <Linkedin className="w-4 h-4 text-[#1E120B]" />
                  <span>Connect On LinkedIn (TEC LICET)</span>
                </a>
              </div>
            </div>

            <div className="pt-4 text-center font-cormorant italic text-sm text-[#705335]">
              "Be part of the legacy."
            </div>
          </div>

        </div>
      </section>

      {/* Quick View Modal */}
      <VintageModal 
        event={selectedQuickViewEvent} 
        onClose={() => setSelectedQuickViewEvent(null)} 
      />

    </div>
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { SliceLogo } from './SliceLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E120B] text-[#F4E8C1] border-t-2 border-[#C5A059] relative z-10 pt-12 pb-8 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vintage Separator Flourish */}
        <div className="flex items-center justify-center space-x-4 mb-8 text-[#C5A059]">
          <div className="h-[1px] w-24 sm:w-40 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="font-special text-lg text-[#D4AF37]">~ ⚙ SLICE 26 ⚙ ~</span>
          <div className="h-[1px] w-24 sm:w-40 bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#C5A059]/30">
          
          {/* Column 1: Department Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="shrink-0 flex items-center justify-center">
                <SliceLogo size="md" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-cinzel text-base font-bold text-[#F4E8C1] tracking-wide">
                  DEPARTMENT OF ELECTRONICS & COMMUNICATION ENGINEERING
                </h3>
                <p className="font-cormorant italic text-sm text-[#C5A059]">
                  Loyola-ICAM College of Engineering and Technology (LICET)
                </p>
              </div>
            </div>

            <p className="font-eb text-sm text-[#EADBB1]/80 max-w-lg leading-relaxed pt-2">
              SLICE’26 is the signature national technical symposium celebrating engineering excellence, innovation, and creative intelligence. Join us as we bridge classical semiconductor theory with futuristic wireless & embedded systems.
            </p>

            <div className="font-cormorant italic text-lg text-[#D4AF37] pt-1">
              "Be part of the legacy."
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#C5A059] tracking-wider uppercase border-b border-[#C5A059]/20 pb-1 inline-block">
              Notebook Routes
            </h4>
            <ul className="space-y-2 text-sm font-eb text-[#EADBB1]">
              <li><NavLink to="/" className="hover:text-[#FFF1A0] transition-colors">Home Page</NavLink></li>
              <li><NavLink to="/about" className="hover:text-[#FFF1A0] transition-colors">Department & History</NavLink></li>
              <li><NavLink to="/events" className="hover:text-[#FFF1A0] transition-colors">Symposium Events</NavLink></li>
              <li><NavLink to="/sponsors" className="hover:text-[#FFF1A0] transition-colors">Our Sponsors</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#FFF1A0] transition-colors">Contact Coordinators</NavLink></li>
              <li><NavLink to="/register" className="hover:text-[#FFF1A0] transition-colors font-bold text-[#D4AF37]">Registration Form</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Social & Contact Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#C5A059] tracking-wider uppercase border-b border-[#C5A059]/20 pb-1 inline-block">
              Connect With Us
            </h4>
            <p className="text-sm font-eb text-[#EADBB1]">
              Loyola Campus, Nungambakkam,<br />
              Chennai, Tamil Nadu – 600034
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://www.instagram.com/slice_ece/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-[#2A1A10] border border-[#C5A059] flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#1E120B] transition-all"
                title="Instagram @slice_ece"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tec-the-electronics-club-licet-a625332a2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-[#2A1A10] border border-[#C5A059] flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#1E120B] transition-all"
                title="LinkedIn TEC LICET"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Back to Top Button */}
            <div className="pt-4">
              <button 
                onClick={scrollToTop}
                className="btn-brass px-3 py-1.5 text-xs rounded flex items-center space-x-1"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-eb text-[#C5A059]/80 text-center sm:text-left">
          <div>
            © 2026 Department of Electronics & Communication Engineering, LICET. All Rights Reserved.
          </div>
          <div className="mt-2 sm:mt-0 font-special text-[11px] text-[#EADBB1]/60">
            Handcrafted with vintage engineering precision for SLICE’26.
          </div>
        </div>

      </div>
    </footer>
  );
};

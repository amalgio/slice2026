import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Menu, X, ArrowRight } from 'lucide-react';
import { SliceLogo } from './SliceLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Contact', path: '/contact' },
    { name: 'Register', path: '/register' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Header Bar: Department Title & Social Media Links */}
      <div className="bg-[#1E120B] text-[#F4E8C1] border-b border-[#C5A059]/40 px-4 py-2 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Institution & Department Logo / Crest */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
              <SliceLogo size="sm" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-[10px] sm:text-xs tracking-wider uppercase text-[#C5A059] font-cinzel font-semibold leading-tight">
                Department of Electronics & Communication Engineering
              </div>
              <div className="text-xs sm:text-sm font-cormorant italic text-[#EADBB1]">
                Loyola-ICAM College of Engineering & Technology (LICET)
              </div>
            </div>
          </NavLink>

          {/* Social Icons & Header CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <div className="flex items-center space-x-3 text-[#C5A059] border-r border-[#C5A059]/30 pr-5">
              <a 
                href="https://www.instagram.com/slice_ece/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FFF1A0] hover:scale-110 transition-all duration-200"
                title="Instagram @slice_ece"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tec-the-electronics-club-licet-a625332a2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FFF1A0] hover:scale-110 transition-all duration-200"
                title="LinkedIn TEC LICET"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@LICETOfficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FFF1A0] hover:scale-110 transition-all duration-200"
                title="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Register Walnut Button */}
            <button 
              onClick={() => navigate('/register')}
              className="btn-walnut px-4 py-1.5 text-xs rounded-sm uppercase tracking-wider flex items-center space-x-1.5"
            >
              <span>Register Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#D4AF37] hover:text-[#FFF] p-1 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Main Vintage Navigation Parchment Bar */}
      <nav className="bg-[#F4E8C1] bg-opacity-95 backdrop-blur-md border-b-2 border-[#C5A059] shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center justify-center space-x-1 py-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 text-base font-pixel font-bold uppercase tracking-wider rounded transition-all duration-150 relative ${
                    isActive 
                      ? 'text-[#FFF1A0] bg-[#1E120B] border-2 border-[#D4AF37] shadow-[0_3px_0_#3B2314] -translate-y-0.5' 
                      : 'text-[#3B2314] hover:text-[#1E120B] hover:bg-[#EADBB1]/80 hover:-translate-y-0.5 hover:border hover:border-[#C5A059]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_6px_#D4AF37]" />
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Mobile Slide-Out Notebook Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F8F3E6] border-b-2 border-[#C5A059] px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 text-base font-cinzel font-bold border-b border-[#EADBB1] transition-colors ${
                      isActive ? 'text-[#C5A059] bg-[#1E120B] rounded-sm pl-6' : 'text-[#3B2314] hover:text-[#1E120B]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 flex items-center justify-between border-t border-[#C5A059]/40 mt-2">
                <div className="flex space-x-4 text-[#3B2314]">
                  <a href="https://www.instagram.com/slice_ece/?hl=en" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 hover:text-[#C5A059]" />
                  </a>
                  <a href="https://www.linkedin.com/in/tec-the-electronics-club-licet-a625332a2/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 hover:text-[#C5A059]" />
                  </a>
                </div>

                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/register');
                  }}
                  className="btn-walnut px-5 py-2 text-xs rounded uppercase"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

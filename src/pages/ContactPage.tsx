import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Send, Shield, User, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiry, setInquiry] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setInquiry({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="relative z-10 pt-28 pb-16 space-y-16 max-w-6xl mx-auto px-4">
      
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center space-x-3 text-[#C5A059]">
          <span className="h-[1px] w-16 bg-[#C5A059]" />
          <span className="font-special text-xs uppercase tracking-widest text-[#705335]">Dispatch & Telegraph Desk</span>
          <span className="h-[1px] w-16 bg-[#C5A059]" />
        </div>
        
        <h1 className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#1E120B]">
          Contact & Location
        </h1>

        <p className="font-cormorant italic text-xl text-[#5C4028] max-w-xl mx-auto">
          Reach the Department of Electronics & Communication Engineering, LICET.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Contact Cards & Coordinators */}
        <div className="space-y-6">
          
          {/* Main Campus Address */}
          <div className="parchment-card p-6 space-y-4">
            <div className="flex items-center space-x-3 border-b border-[#C5A059]/40 pb-3">
              <MapPin className="w-6 h-6 text-[#C85A17]" />
              <div>
                <h2 className="font-cinzel text-xl font-bold text-[#1E120B]">
                  Venue Address
                </h2>
                <span className="font-special text-xs text-[#705335]">LICET, Loyola Campus</span>
              </div>
            </div>

            <p className="font-eb text-base text-[#3B2314] leading-relaxed">
              <strong>Loyola-ICAM College of Engineering & Technology (LICET)</strong><br />
              Loyola Campus, Sterling Road, Nungambakkam,<br />
              Chennai, Tamil Nadu – 600034
            </p>

            <div className="pt-2 space-y-2 font-eb text-sm text-[#5C4028]">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C85A17]" />
                <span>Email: <strong>slice.ece@licet.ac.in</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C85A17]" />
                <span>Helpline: <strong>+91 98401 23456 / +91 98765 43210</strong></span>
              </div>
            </div>
          </div>

          {/* Coordinators Directory */}
          <div className="parchment-card p-6 space-y-4">
            <h2 className="font-cinzel text-xl font-bold text-[#1E120B] border-b border-[#C5A059]/40 pb-2">
              Key Symposium Coordinators
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Faculty Convenors */}
              <div className="p-3 bg-[#EADBB1]/60 rounded border border-[#C5A059]/30 text-xs font-eb space-y-1">
                <span className="font-special text-[10px] text-[#C85A17] uppercase block">Faculty Convenor</span>
                <strong className="block font-cinzel text-sm text-[#1E120B]">Dr. Jenifer Suriya L J</strong>
                <p className="text-[#5C4028]">Head of the Department, ECE</p>
                <p className="text-[#3B2314]">Email: hodece@licet.ac.in</p>
              </div>

              <div className="p-3 bg-[#EADBB1]/60 rounded border border-[#C5A059]/30 text-xs font-eb space-y-1">
                <span className="font-special text-[10px] text-[#C85A17] uppercase block">Staff Coordinator</span>
                <strong className="block font-cinzel text-sm text-[#1E120B]">Prof. Mary Anitha</strong>
                <p className="text-[#5C4028]">Associate Professor, ECE</p>
                <p className="text-[#3B2314]">Ph: +91 94441 87654</p>
              </div>

              {/* Student Leads */}
              <div className="p-3 bg-[#EADBB1]/60 rounded border border-[#C5A059]/30 text-xs font-eb space-y-1">
                <span className="font-special text-[10px] text-[#C85A17] uppercase block">President, TEC</span>
                <strong className="block font-cinzel text-sm text-[#1E120B]">Karthik Raja S</strong>
                <p className="text-[#5C4028]">Final Year ECE</p>
                <p className="text-[#3B2314]">Ph: +91 98765 43210</p>
              </div>

              <div className="p-3 bg-[#EADBB1]/60 rounded border border-[#C5A059]/30 text-xs font-eb space-y-1">
                <span className="font-special text-[10px] text-[#C85A17] uppercase block">Secretary, TEC</span>
                <strong className="block font-cinzel text-sm text-[#1E120B]">Ananya V</strong>
                <p className="text-[#5C4028]">Third Year ECE</p>
                <p className="text-[#3B2314]">Ph: +91 91234 56789</p>
              </div>

            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-[#1E120B] border-2 border-[#C5A059] p-6 rounded-lg text-[#F4E8C1] space-y-3">
            <h3 className="font-cinzel text-lg font-bold text-[#F4E8C1]">
              Official Social Channels
            </h3>
            <p className="font-eb text-xs text-[#EADBB1]/80">
              Follow us on Instagram & LinkedIn for live announcements during SLICE’26.
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <a 
                href="https://www.instagram.com/slice_ece/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-walnut flex-1 py-2 text-xs rounded uppercase flex items-center justify-center space-x-2"
              >
                <Instagram className="w-4 h-4 text-[#D4AF37]" />
                <span>Instagram</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/tec-the-electronics-club-licet-a625332a2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-brass flex-1 py-2 text-xs rounded uppercase flex items-center justify-center space-x-2"
              >
                <Linkedin className="w-4 h-4 text-[#1E120B]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>


        {/* Right Column: Google Map Embed & Inquiry Logbook Form */}
        <div className="space-y-6">
          
          {/* Interactive Google Map Embed */}
          <div className="parchment-card p-4 overflow-hidden space-y-3">
            <h2 className="font-cinzel text-lg font-bold text-[#1E120B] px-2">
              Campus Location Map
            </h2>
            <div className="w-full h-64 rounded border border-[#C5A059] overflow-hidden shadow-inner">
              <iframe 
                title="LICET Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.581898165785!2d80.23126867512429!3d13.061614787262076!2m3!10f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526684e2079075%3A0xcd50bfebae9b4395!2sLoyola-ICAM%20College%20of%20Engineering%20and%20Technology%20(LICET)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quick Dispatch Logbook Form */}
          <div className="parchment-card p-6 space-y-4">
            <h2 className="font-cinzel text-xl font-bold text-[#1E120B] border-b border-[#C5A059]/40 pb-2">
              Send an Inquiry Note
            </h2>

            {formSubmitted ? (
              <div className="p-4 bg-[#1E120B] text-[#F4E8C1] rounded border border-[#C5A059] text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37] mx-auto" />
                <h3 className="font-cinzel text-lg font-bold">Note Received!</h3>
                <p className="font-eb text-xs text-[#EADBB1]/80">
                  Your inquiry has been dispatched to the symposium secretariat.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 font-mono-retro text-xs text-[#3B2314]">
                <div>
                  <label className="block font-pixel text-[12px] text-[#705335] uppercase font-bold mb-1">&gt; YOUR NAME</label>
                  <input 
                    type="text" 
                    required
                    value={inquiry.name}
                    onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                    placeholder="Rahul Sharma"
                    className="w-full dos-input p-2.5 rounded text-xs focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-pixel text-[12px] text-[#705335] uppercase font-bold mb-1">&gt; EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    required
                    value={inquiry.email}
                    onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                    placeholder="rahul@college.edu"
                    className="w-full dos-input p-2.5 rounded text-xs focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-pixel text-[12px] text-[#705335] uppercase font-bold mb-1">&gt; SUBJECT</label>
                  <input 
                    type="text" 
                    required
                    value={inquiry.subject}
                    onChange={(e) => setInquiry({ ...inquiry, subject: e.target.value })}
                    placeholder="Wattage War Timing Query"
                    className="w-full dos-input p-2.5 rounded text-xs focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-pixel text-[12px] text-[#705335] uppercase font-bold mb-1">&gt; MESSAGE DETAIL</label>
                  <textarea 
                    rows={4}
                    required
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    placeholder="Type your question or request..."
                    className="w-full dos-input p-2.5 rounded text-xs focus:outline-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="btn-walnut w-full py-3 text-sm rounded uppercase flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                  <span>Dispatch Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};

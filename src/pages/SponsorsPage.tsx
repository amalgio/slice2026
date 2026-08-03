import React from 'react';
import { SPONSORS_DATA } from '../data/sponsorsData';
import { Award, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

export const SponsorsPage: React.FC = () => {
  const proudSponsors = SPONSORS_DATA.filter(s => s.tier === 'Proud Sponsor');

  return (
    <div className="relative z-10 pt-28 pb-16 space-y-16 max-w-5xl mx-auto px-4">
      
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center space-x-3 text-[#C5A059]">
          <span className="h-[1px] w-16 bg-[#C5A059]" />
          <span className="font-special text-xs uppercase tracking-widest text-[#705335]">Patrons of Innovation</span>
          <span className="h-[1px] w-16 bg-[#C5A059]" />
        </div>
        
        <h1 className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#1E120B]">
          Symposium Sponsors
        </h1>

        <p className="font-cormorant italic text-xl text-[#5C4028] max-w-2xl mx-auto">
          We extend our sincere gratitude to our esteemed patrons for supporting SLICE’26.
        </p>
      </div>

      {/* Proud Sponsors Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-center space-x-3 border-b-2 border-[#C5A059] pb-3 text-center">
          <Award className="w-7 h-7 text-[#C85A17]" />
          <h2 className="font-cinzel text-3xl font-bold text-[#1E120B]">
            Proud Sponsors
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {proudSponsors.map((sponsor) => (
            <div key={sponsor.id} className="parchment-card p-6 sm:p-8 flex flex-col items-center text-center space-y-6 shadow-2xl">
              
              {/* Sponsor Banner Image */}
              <a 
                href={sponsor.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full max-w-2xl bg-[#F4E8C1] border-2 border-[#C5A059] rounded-lg p-2 overflow-hidden shadow-inner group cursor-pointer transition-transform hover:scale-[1.01]"
              >
                <img 
                  src={sponsor.logoUrl} 
                  alt={sponsor.name}
                  className="w-full h-auto object-contain rounded"
                />
              </a>

              {/* Sponsor Info */}
              <div className="space-y-3 max-w-xl">
                <div className="flex items-center justify-center space-x-3">
                  <h3 className="font-cinzel text-2xl font-bold text-[#1E120B]">{sponsor.name}</h3>
                  <span className="bg-[#1E120B] text-[#D4AF37] border border-[#C5A059] text-xs font-special uppercase px-2.5 py-0.5 rounded">
                    {sponsor.tier}
                  </span>
                </div>

                <p className="font-eb text-base text-[#3B2314] leading-relaxed">
                  {sponsor.description}
                </p>

                <div className="pt-2">
                  <a 
                    href={sponsor.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-walnut px-6 py-3 text-xs rounded uppercase inline-flex items-center space-x-2 shadow-lg"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Become a Sponsor Callout Card */}
      <section className="bg-[#1E120B] border-2 border-[#C5A059] rounded-lg p-8 sm:p-10 text-[#F4E8C1] shadow-2xl space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="font-special text-xs text-[#D4AF37] uppercase tracking-wider">
            Corporate Partnership Invitation
          </span>
          <h2 className="font-cinzel text-3xl font-bold text-[#F4E8C1]">
            Partner with SLICE ’26
          </h2>
          <p className="font-eb text-base text-[#EADBB1] leading-relaxed">
            Gain direct brand exposure to over 1,200+ engineering students, researchers, and technical talents from top universities. Sponsorship benefits include booth allocation, keynote speech slots, recruitment drives, and prominent branding across all publicity media.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a 
            href="mailto:slice.ece@licet.ac.in"
            className="btn-walnut px-6 py-3 text-xs rounded uppercase flex items-center space-x-2"
          >
            <Mail className="w-4 h-4 text-[#D4AF37]" />
            <span>Request Sponsorship Prospectus</span>
          </a>

          <a 
            href="tel:+919840123456"
            className="btn-brass px-6 py-3 text-xs rounded uppercase flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Convenor Desk</span>
          </a>
        </div>
      </section>

    </div>
  );
};

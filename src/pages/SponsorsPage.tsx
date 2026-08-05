import React from 'react';
import { SPONSORS_DATA } from '../data/sponsorsData';
import { Award, ExternalLink, Mail, Phone } from 'lucide-react';

export const SponsorsPage: React.FC = () => {
  const proudSponsors = SPONSORS_DATA.filter(s => s.tier === 'Proud Sponsor');

  return (
    <div className="relative z-10 pt-28 pb-16 space-y-16 max-w-6xl mx-auto px-4">
      
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proudSponsors.map((sponsor) => (
            <div key={sponsor.id} className="parchment-card p-6 flex flex-col justify-between space-y-4 shadow-xl">
              <div className="space-y-4">
                {/* Sponsor Logo / Banner */}
                <a 
                  href={sponsor.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-44 bg-[#F4E8C1] border-2 border-[#C5A059]/60 rounded-lg p-3 overflow-hidden shadow-inner group cursor-pointer transition-transform hover:scale-[1.01]"
                >
                  <img 
                    src={sponsor.logoUrl} 
                    alt={sponsor.name}
                    className="w-full h-full object-contain rounded"
                  />
                </a>

                {/* Sponsor Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-cinzel text-xl font-bold text-[#1E120B]">{sponsor.name}</h3>
                    <span className="bg-[#1E120B] text-[#D4AF37] border border-[#C5A059] text-[10px] font-special uppercase px-2 py-0.5 rounded whitespace-nowrap">
                      {sponsor.tier}
                    </span>
                  </div>
                  <p className="font-eb text-sm text-[#3B2314] leading-relaxed">
                    {sponsor.description}
                  </p>
                  <p> Email:</p>
                  <a href={`mailto:${sponsor.email}`} className="flex items-center space-x-2 hover:text-[#1E120B]">
                            <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                            <span>{sponsor.email}</span>
                          </a>
                  <p> Telephone/Mobile:</p>
                  {sponsor.phone?.map((rule, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <a href={`tel:${rule}`} className="flex items-center space-x-2 hover:text-[#1E120B]">
                            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                            <span>{rule}</span>
                          </a>
                        </li>
                      ))}
                </div>
              </div>

              {sponsor.websiteUrl && (
                <div className="pt-2">
                  <a 
                    href={sponsor.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-walnut px-4 py-2 text-xs rounded uppercase inline-flex items-center space-x-2 shadow"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </a>
                </div>
              )}
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
            href="mailto:slice@licet.ac.in"
            className="btn-walnut px-6 py-3 text-xs rounded uppercase flex items-center space-x-2"
          >
            <Mail className="w-4 h-4 text-[#D4AF37]" />
            <span>Request Sponsorship Prospectus</span>
          </a>
        </div>
      </section>

    </div>
  );
};

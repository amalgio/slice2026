import React from 'react';
import { SPONSORS_DATA } from '../data/sponsorsData';
import { Award, ExternalLink, Mail, Phone, Download } from 'lucide-react';

export const SponsorsPage: React.FC = () => {
  // Group sponsors by tier
  const titleSponsors = SPONSORS_DATA.filter(s => s.tier === 'Title Sponsor');
  const coSponsors = SPONSORS_DATA.filter(s => s.tier === 'Co-Sponsor');
  const techPartners = SPONSORS_DATA.filter(s => s.tier === 'Technical Partner');
  const associatePartners = SPONSORS_DATA.filter(s => s.tier === 'Associate Partner');

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
          Symposium Sponsors & Partners
        </h1>

        <p className="font-cormorant italic text-xl text-[#5C4028] max-w-2xl mx-auto">
          We extend our sincere gratitude to our esteemed corporate sponsors, semiconductor industry leaders, and technical societies.
        </p>
      </div>

      {/* Title Sponsors Section */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b-2 border-[#C5A059] pb-2">
          <Award className="w-6 h-6 text-[#C85A17]" />
          <h2 className="font-cinzel text-2xl font-bold text-[#1E120B]">
            Title Sponsor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {titleSponsors.map((sponsor) => (
            <div key={sponsor.id} className="parchment-card p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="h-28 bg-[#F4E8C1] border border-[#C5A059] rounded p-4 flex items-center justify-center overflow-hidden shadow-inner">
                  <img 
                    src={sponsor.logoUrl} 
                    alt={sponsor.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain rounded filter contrast-125"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-cinzel text-xl font-bold text-[#1E120B]">{sponsor.name}</h3>
                    <span className="bg-[#1E120B] text-[#D4AF37] border border-[#C5A059] text-[10px] font-special uppercase px-2 py-0.5 rounded">
                      {sponsor.tier}
                    </span>
                  </div>
                  <p className="font-eb text-sm text-[#3B2314] leading-relaxed">
                    {sponsor.description}
                  </p>
                </div>
              </div>

              {sponsor.websiteUrl && (
                <div>
                  <a 
                    href={sponsor.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brass px-4 py-2 text-xs rounded uppercase inline-flex items-center space-x-2"
                  >
                    <span>Visit Partner Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Co-Sponsors & Technical Partners */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b-2 border-[#C5A059] pb-2">
          <Award className="w-6 h-6 text-[#C85A17]" />
          <h2 className="font-cinzel text-2xl font-bold text-[#1E120B]">
            Co-Sponsors & Technical Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...coSponsors, ...techPartners, ...associatePartners].map((sponsor) => (
            <div key={sponsor.id} className="parchment-card p-6 flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="h-20 bg-[#F4E8C1] border border-[#C5A059]/40 rounded p-3 flex items-center justify-center overflow-hidden">
                  <img 
                    src={sponsor.logoUrl} 
                    alt={sponsor.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain rounded"
                  />
                </div>

                <div>
                  <span className="font-special text-[10px] text-[#C85A17] uppercase tracking-wider block">
                    {sponsor.tier}
                  </span>
                  <h3 className="font-cinzel text-lg font-bold text-[#1E120B]">{sponsor.name}</h3>
                  <p className="font-eb text-xs text-[#5C4028] mt-1 line-clamp-3">
                    {sponsor.description}
                  </p>
                </div>
              </div>

              {sponsor.websiteUrl && (
                <a 
                  href={sponsor.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brass px-3 py-1.5 text-xs rounded uppercase inline-flex items-center space-x-1.5 w-fit"
                >
                  <span>Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
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

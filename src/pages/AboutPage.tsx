import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ABOUT_DATA } from '../data/aboutData';
import { Target, Compass, Award, Users, Instagram, Linkedin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SliceLogo } from '../components/SliceLogo';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 pt-28 pb-16 space-y-16 max-w-6xl mx-auto px-4">
      
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center space-x-3 text-[#C5A059]">
          <span className="h-[1px] w-16 bg-[#C5A059]" />
          <span className="font-special text-xs uppercase tracking-widest text-[#705335]">Academic Journal</span>
          <span className="h-[1px] w-16 bg-[#C5A059]" />
        </div>
        
        <h1 className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#1E120B]">
          Department & Legacy
        </h1>

        <p className="font-cormorant italic text-xl text-[#5C4028] max-w-2xl mx-auto">
          {ABOUT_DATA.tagline}
        </p>
      </div>

      {/* Main Department Overview Card */}
      <section className="parchment-card p-8 sm:p-10 space-y-6">
        <div className="flex items-center space-x-4 border-b border-[#C5A059]/40 pb-4">
          <SliceLogo size="md" />
          <div>
            <h2 className="font-cinzel text-2xl font-bold text-[#1E120B]">
              {ABOUT_DATA.departmentName}
            </h2>
            <p className="font-cormorant italic text-base text-[#705335]">
              {ABOUT_DATA.institution}
            </p>
          </div>
        </div>

        <p className="font-eb text-lg text-[#3B2314] leading-relaxed whitespace-pre-line">
          {ABOUT_DATA.history}
        </p>
      </section>

      {/* Vision & Mission Parchment Panels */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Vision Panel */}
        <div className="parchment-card p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded bg-[#EADBB1] border border-[#C5A059] flex items-center justify-center text-[#C85A17]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-[#1E120B]">
                Our Vision
              </h3>
            </div>

            <p className="font-eb text-base text-[#3B2314] leading-relaxed italic">
              "{ABOUT_DATA.vision}"
            </p>
          </div>
        </div>

        {/* Mission Panel */}
        <div className="parchment-card p-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded bg-[#EADBB1] border border-[#C5A059] flex items-center justify-center text-[#C85A17]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-2xl font-bold text-[#1E120B]">
              Department Mission
            </h3>
          </div>

          <ul className="space-y-3 font-eb text-sm text-[#3B2314]">
            {ABOUT_DATA.mission.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C85A17] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>


      {/* Electronics Club (TEC) Feature */}
      <section className="bg-[#1E120B] border-2 border-[#C5A059] rounded-lg p-8 text-[#F4E8C1] shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#C5A059]/40 pb-4">
          <div className="flex items-center space-x-3">
            <Award className="w-8 h-8 text-[#D4AF37]" />
            <div>
              <h3 className="font-cinzel text-2xl font-bold text-[#F4E8C1]">
                {ABOUT_DATA.electronicsClub.name}
              </h3>
              <p className="font-special text-xs text-[#C5A059]">
                Official ECE Student Guild of LICET
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <a 
              href={ABOUT_DATA.electronicsClub.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-walnut px-4 py-2 text-xs rounded uppercase flex items-center space-x-2"
            >
              <Instagram className="w-4 h-4 text-[#D4AF37]" />
              <span>Instagram</span>
            </a>

            <a 
              href={ABOUT_DATA.electronicsClub.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-brass px-4 py-2 text-xs rounded uppercase flex items-center space-x-2"
            >
              <Linkedin className="w-4 h-4 text-[#1E120B]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <p className="font-eb text-base text-[#EADBB1] leading-relaxed">
          {ABOUT_DATA.electronicsClub.description}
        </p>
      </section>


      {/* Faculty Leadership */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="font-cinzel text-3xl font-bold text-[#1E120B]">
            Faculty Leadership
          </h2>
          <p className="font-cormorant italic text-lg text-[#5C4028]">
            Guiding innovation and academic rigor for SLICE’26.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {ABOUT_DATA.facultyList.map((faculty, idx) => (
            <div key={idx} className="parchment-card p-6 text-center space-y-3 flex flex-col items-center justify-between">
              <a
                href={faculty.linkUrl || "https://licet.ac.in/electronics-and-communication-engineering/electronics-and-communication-engineering-faculty/"}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer block space-y-3 w-full"
                title={`View ${faculty.name}'s profile on LICET faculty website`}
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden border-2 border-[#C5A059] shadow-lg group-hover:scale-105 group-hover:border-[#D4AF37] transition-all duration-300 bg-[#EADBB1]/40">
                  <img 
                    src={faculty.photoUrl} 
                    alt={faculty.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <div>
                  <h3 className="font-cinzel text-lg font-bold text-[#1E120B] group-hover:text-[#C85A17] transition-colors">
                    {faculty.name}
                  </h3>
                  <p className="font-special text-xs text-[#C85A17]">
                    {faculty.designation}
                  </p>
                  <p className="font-eb text-xs text-[#5C4028] mt-1">
                    {faculty.role}
                  </p>
                  {faculty.email && (
                    <a 
                      href={`mailto:${faculty.email}`} 
                      className="font-eb text-xs text-[#1E120B] hover:underline mt-1 block font-semibold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {faculty.email}
                    </a>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>


      {/* Interactive Milestone Timeline */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="font-cinzel text-3xl font-bold text-[#1E120B]">
            Milestone Timeline
          </h2>
          <p className="font-cormorant italic text-lg text-[#5C4028]">
            The historical journey of SLICE symposiums.
          </p>
        </div>

        <div className="relative border-l-2 border-[#C5A059] ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-8 py-4">
          {ABOUT_DATA.timelineMilestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Year Badge */}
              <div className="absolute -left-[35px] sm:-left-[165px] top-0 bg-[#1E120B] text-[#D4AF37] border border-[#C5A059] font-special text-xs px-3 py-1 rounded shadow-md w-20 text-center">
                {m.year}
              </div>

              <div className="parchment-card p-5 space-y-1">
                <h3 className="font-cinzel text-lg font-bold text-[#1E120B]">
                  {m.title}
                </h3>
                <p className="font-eb text-sm text-[#3B2314]">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation CTA */}
      <div className="text-center pt-6">
        <button 
          onClick={() => navigate('/events')}
          className="btn-walnut px-8 py-3 text-sm rounded uppercase tracking-wider inline-flex items-center space-x-2"
        >
          <span>Explore Symposium Events</span>
          <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
        </button>
      </div>

    </div>
  );
};

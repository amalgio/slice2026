import React from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { EVENTS_DATA } from '../data/eventsData';
import { 
  ArrowLeft, Calendar, MapPin, Clock, Users, Shield, CheckCircle2, Phone, Mail, ArrowRight, Award, AlertCircle 
} from 'lucide-react';

export const EventDetailPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  // Find event by ID
  const event = EVENTS_DATA.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="relative z-10 pt-32 pb-20 max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="parchment-card p-10 space-y-4">
          <AlertCircle className="w-12 h-12 text-[#C85A17] mx-auto" />
          <h1 className="font-cinzel text-2xl font-bold text-[#1E120B]">
            Event Log Not Found
          </h1>
          <p className="font-eb text-sm text-[#5C4028]">
            The event specified in the manuscript path could not be located.
          </p>
          <button 
            onClick={() => navigate('/events')}
            className="btn-walnut px-6 py-2.5 text-xs rounded uppercase tracking-wider"
          >
            Back To Events List
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="relative z-10 pt-28 pb-16 space-y-10 max-w-5xl mx-auto px-4">
      
      {/* Back Button & Breadcrumbs */}
      <div className="flex items-center justify-between">
        <button 
          onClick={() => navigate('/events')}
          className="btn-brass px-4 py-2 text-xs rounded uppercase flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Events</span>
        </button>

        <div className="font-special text-xs text-[#705335] hidden sm:block">
          Symposium Arena / {event.name}
        </div>
      </div>

      {/* Hero Banner Header */}
      <section className="bg-[#1E120B] border-2 border-[#C5A059] rounded-lg p-6 sm:p-8 text-[#F4E8C1] shadow-2xl space-y-6 relative overflow-hidden">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#C5A059]/40 pb-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="bg-[#C5A059] text-[#1E120B] font-cinzel font-bold text-xs px-2.5 py-0.5 rounded">
                {event.category}
              </span>
            </div>

            <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#F4E8C1] tracking-wide">
              {event.name}
            </h1>
          </div>

          <button 
            onClick={() => navigate('/register')}
            className="btn-walnut px-8 py-3.5 text-xs rounded uppercase tracking-widest flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>REGISTER FOR THIS EVENT</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>

        {/* Key Info Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#2A1A10] rounded border border-[#C5A059]/30 text-xs font-eb text-[#EADBB1]">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <div>
              <span className="block text-[10px] uppercase font-special text-[#C5A059]">Team Size</span>
              <strong>{event.teamSize}</strong>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <div>
              <span className="block text-[10px] uppercase font-special text-[#C5A059]">Timing</span>
              <strong>{event.timing}</strong>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <div>
              <span className="block text-[10px] uppercase font-special text-[#C5A059]">Venue</span>
              <strong>{event.venue}</strong>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <div>
              <span className="block text-[10px] uppercase font-special text-[#C5A059]">Total Rounds</span>
              <strong>{event.roundsCount} Rounds</strong>
            </div>
          </div>
        </div>

      </section>

      {/* Main Content Parchment Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Full Description, Rounds, Rules */}
        <div className="md:col-span-2 space-y-8">

          {/* Round Breakdown */}
          {event.rounds && event.rounds.length > 0 && (
            <div className="parchment-card p-6 sm:p-8 space-y-4">
              <h2 className="font-cinzel text-xl font-bold text-[#1E120B] border-b border-[#C5A059]/40 pb-2">
                Rounds Structure & Schedule
              </h2>

              <div className="space-y-4">
                {event.rounds.map((round, idx) => (
                  <div key={idx} className="p-4 bg-[#F4E8C1] rounded border border-[#C5A059]/40 space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-cinzel font-bold text-base text-[#1E120B]">
                      <span>{round.title}</span>
                      {round.time && (
                        <span className="font-special text-xs text-[#C85A17]">{round.time}</span>
                      )}
                    </div>
                    <p className="font-eb text-sm text-[#5C4028] pt-1">
                      {round.description}
                    </p>
                    <p className="font-cinzel text-sm text-[#5C4028] pt-1.5">Rules</p>
                    <p className="font-eb text-sm text-[#5C4028] pt-1">
                      <ul className="space-y-2.5 font-eb text-sm text-[#3B2314]">
                      {round.rules?.map((rule, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-4 h-4 text-[#C85A17] mt-0.5 flex-shrink-0" />
                          <span>{rule}</span>
                        </li>
                      ))}
              </ul>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rules & Guidelines */}
          {event.genrules && event.genrules.length > 0 && (
            <div className="parchment-card p-6 sm:p-8 space-y-4">
              <h2 className="font-cinzel text-xl font-bold text-[#1E120B] border-b border-[#C5A059]/40 pb-2">
                Rules and Regulations
              </h2>

              <ul className="space-y-2.5 font-eb text-sm text-[#3B2314]">
                {event.genrules.map((rule, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C85A17] mt-0.5 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
              
            </div>
          )}

        </div>


        {/* Right Column: Coordinators, Requirements & Quick Register */}
        <div className="space-y-8">
          
          {/* Coordinators Card */}
          <div className="parchment-card p-6 space-y-4">
            <h3 className="font-cinzel text-lg font-bold text-[#1E120B] border-b border-[#C5A059]/40 pb-2">
              Event Coordinators
            </h3>

            <div className="space-y-4">
              {event.coordinators.map((c, idx) => (
                <div key={idx} className="p-3 bg-[#EADBB1]/60 rounded border border-[#C5A059]/30 text-xs font-eb space-y-1">
                  <strong className="block font-cinzel text-sm text-[#1E120B]">{c.name}</strong>
                  {c.role && <span className="block font-special text-[11px] text-[#C85A17]">{c.role}</span>}
                  
                  <div className="pt-2 space-y-1 text-[#5C4028]">
                    <a href={`tel:${c.phone}`} className="flex items-center space-x-2 hover:text-[#1E120B]">
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{c.phone}</span>
                    </a>

                    {c.email && (
                      <a href={`mailto:${c.email}`} className="flex items-center space-x-2 hover:text-[#1E120B] truncate">
                        <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span className="truncate">{c.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements Card */}
          {event.sponsor == true && (
            <div className="parchment-card p-6 space-y-3">
              <h3 className="font-cinzel text-lg font-bold text-[#1E120B] border-b border-[#C5A059]/40 pb-2">
                Event Mentor
              </h3>
              <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-lg overflow-hidden border-2 border-[#C5A059] shadow-lg group-hover:scale-105 group-hover:border-[#D4AF37] transition-all duration-300 bg-[#EADBB1]/40">
                  <img 
                    src='/licet_iic.jpeg' 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  
                </div>
               <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-lg overflow-hidden border-2 border-[#C5A059] shadow-lg group-hover:scale-105 group-hover:border-[#D4AF37] transition-all duration-300 bg-[#EADBB1]/40">
                  <img 
                    src='/lakic_logo.png' 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  
                </div>
                
             
             
            </div>
          )}

          {/* Registration Box */}
          <div className="bg-[#1E120B] border-2 border-[#C5A059] p-6 rounded-lg text-center space-y-4 shadow-xl">
            <h3 className="font-cinzel text-lg font-bold text-[#F4E8C1]">
              Ready To Compete?
            </h3>
            <p className="font-eb text-xs text-[#EADBB1]/80">
              Slots are limited for laboratory arenas. Complete your registration early to lock your team's entry.
            </p>

            <button 
              onClick={() => navigate('/register')}
              className="btn-walnut w-full py-3 text-xs rounded uppercase tracking-wider flex items-center justify-center space-x-2"
            >
              <span>Register For {event.name}</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

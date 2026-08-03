import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EventItem } from '../types';
import { X, ArrowRight, Clock, MapPin, Users2, Shield, CheckCircle } from 'lucide-react';

interface VintageModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const VintageModal: React.FC<VintageModalProps> = ({ event, onClose }) => {
  const navigate = useNavigate();

  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Outer Dark Walnut Frame */}
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#1E120B] border-2 border-[#C5A059] rounded-lg shadow-2xl overflow-hidden flex flex-col text-[#F4E8C1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#2A1A10] via-[#3B2314] to-[#2A1A10] px-6 py-4 border-b border-[#C5A059]/50 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="font-cinzel text-xl font-bold tracking-wide text-[#F4E8C1]">
              {event.name}
            </h2>
            <span className="font-special text-xs text-[#C5A059] bg-[#1E120B] px-2 py-0.5 rounded border border-[#C5A059]/40">
              {event.category}
            </span>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1E120B] border border-[#C5A059] flex items-center justify-center text-[#C5A059] hover:text-white hover:bg-[#C5A059] transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Parchment Body Scroll Area */}
        <div className="p-6 overflow-y-auto max-h-[70vh] bg-[#F8F3E6] text-[#2D180C] space-y-6">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-3 bg-[#EADBB1] rounded border border-[#C5A059]/40 text-xs font-eb text-[#3B2314]">
            <div className="flex items-center space-x-1.5">
              <Users2 className="w-4 h-4 text-[#C85A17]" />
              <div>
                <span className="block text-[10px] uppercase font-special text-[#705335]">Team Size</span>
                <strong>{event.teamSize}</strong>
              </div>
            </div>

            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-[#C85A17]" />
              <div>
                <span className="block text-[10px] uppercase font-special text-[#705335]">Timing</span>
                <strong>{event.timing}</strong>
              </div>
            </div>

            <div className="flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-[#C85A17]" />
              <div>
                <span className="block text-[10px] uppercase font-special text-[#705335]">Venue</span>
                <strong>{event.venue}</strong>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="font-cinzel text-base font-bold text-[#1E120B] border-b border-[#C5A059]/40 pb-1 mb-2">
              Event Overview
            </h3>
            <p className="font-eb text-base text-[#3B2314] leading-relaxed">
              {event.fullDescription}
            </p>
          </div>

          {/* Rounds Breakdown */}
          {event.rounds && event.rounds.length > 0 && (
            <div>
              <h3 className="font-cinzel text-base font-bold text-[#1E120B] border-b border-[#C5A059]/40 pb-2 mb-3">
                Rounds Schedule ({event.roundsCount} Rounds)
              </h3>
              <div className="space-y-3">
                {event.rounds.map((round, idx) => (
                  <div key={idx} className="p-3 bg-[#F4E8C1] rounded border border-[#C5A059]/30">
                    <div className="flex items-center justify-between font-cinzel font-bold text-sm text-[#1E120B] mb-1">
                      <span>{round.title}</span>
                      {round.time && (
                        <span className="font-special text-xs text-[#C85A17]">{round.time}</span>
                      )}
                    </div>
                    <p className="font-eb text-xs text-[#5C4028]">
                      {round.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rules Summary */}
          {event.rules && event.rules.length > 0 && (
            <div>
              <h3 className="font-cinzel text-base font-bold text-[#1E120B] border-b border-[#C5A059]/40 pb-2 mb-2">
                Symposium Guidelines
              </h3>
              <ul className="space-y-1.5">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-eb text-[#3B2314]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C85A17] mt-0.5 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Footer Action Bar */}
        <div className="bg-[#1E120B] px-6 py-4 border-t border-[#C5A059]/50 flex items-center justify-between">
          <button 
            onClick={onClose}
            className="btn-brass px-4 py-2 text-xs rounded uppercase"
          >
            Close Notebook
          </button>

          <button 
            onClick={() => {
              onClose();
              navigate(`/register`);
            }}
            className="btn-walnut px-6 py-2 text-xs rounded uppercase tracking-wider flex items-center space-x-2"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { EVENTS_DATA } from '../data/eventsData';
import { EventCard } from '../components/EventCard';
import { VintageModal } from '../components/VintageModal';
import { EventItem } from '../types';
import { Search, Filter, Sparkles } from 'lucide-react';
import { CroOscilloscope } from '../components/CroOscilloscope';

export const EventsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuickViewEvent, setSelectedQuickViewEvent] = useState<EventItem | null>(null);

  // Filter events by search term
  const filteredEvents = EVENTS_DATA.filter(event => {
    return event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           event.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
           event.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="relative z-10 pt-28 pb-16 space-y-12 max-w-7xl mx-auto px-4">
      
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center space-x-3 text-[#C5A059]">
          <span className="h-[1px] w-16 bg-[#C5A059]" />
          <span className="font-special text-xs uppercase tracking-widest text-[#705335]">Symposium Compendium</span>
          <span className="h-[1px] w-16 bg-[#C5A059]" />
        </div>
        
        <h1 className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#1E120B]">
          Symposium Events & Arenas
        </h1>

        <p className="font-cormorant italic text-xl text-[#5C4028] max-w-2xl mx-auto">
          Explore all technical challenges. Click any card to view detailed rules, round breakdowns, and coordinator contacts.
        </p>
      </div>

      {/* Search Input Control */}
      <div className="bg-[#1E120B] border-2 border-[#C5A059] p-4 sm:p-5 rounded-lg shadow-xl text-[#F4E8C1] flex items-center justify-center">
        <div className="relative w-full max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#C5A059]" />
          <input 
            type="text" 
            placeholder="Search technical events, keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full dos-input pl-9 pr-8 py-2 rounded text-xs focus:outline-none"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#C5A059] hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onQuickView={(evt) => setSelectedQuickViewEvent(evt)} 
            />
          ))}
        </div>
      ) : (
        <div className="parchment-card p-12 text-center space-y-4">
          <Sparkles className="w-8 h-8 text-[#C85A17] mx-auto" />
          <h3 className="font-cinzel text-xl font-bold text-[#1E120B]">
            No Events Match Your Query
          </h3>
          <p className="font-eb text-sm text-[#5C4028]">
            Try adjusting your search criteria or reset category filters.
          </p>
          <button 
            onClick={() => setSearchQuery('')}
            className="btn-brass px-4 py-2 text-xs rounded uppercase"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Interactive Oscilloscope Lab Console */}
      <section className="pt-8 border-t border-[#C5A059]/40 space-y-4">
        <div className="text-center">
          <h2 className="font-cinzel text-2xl font-bold text-[#1E120B]">
            Interactive Circuit Diagnostic Console
          </h2>
          <p className="font-cormorant italic text-base text-[#5C4028] max-w-lg mx-auto">
            Simulate wave signals for Circuit Debug, Line Follower, and ECE Laboratory events.
          </p>
        </div>
        <CroOscilloscope compact title="TEKTRONIX 465 SYMPOSIUM CIRCUIT DIAGNOSTIC BENCH" />
      </section>

      {/* Quick View Modal */}
      <VintageModal 
        event={selectedQuickViewEvent} 
        onClose={() => setSelectedQuickViewEvent(null)} 
      />

    </div>
  );
};

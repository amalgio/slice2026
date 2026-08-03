import React, { useState } from 'react';
import { EVENTS_DATA } from '../data/eventsData';
import { EventCard } from '../components/EventCard';
import { VintageModal } from '../components/VintageModal';
import { EventItem } from '../types';
import { Search, Filter, Sparkles } from 'lucide-react';
import { CroOscilloscope } from '../components/CroOscilloscope';

export const EventsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedQuickViewEvent, setSelectedQuickViewEvent] = useState<EventItem | null>(null);

  const categories = ['All', 'Technical', 'Non-Technical'];

  // Filter events by category and search term
  const filteredEvents = EVENTS_DATA.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
          Explore all 8 technical and non-technical challenges. Click any card to view detailed rules, round breakdowns, and coordinator contacts.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="bg-[#1E120B] border-2 border-[#C5A059] p-4 sm:p-6 rounded-lg shadow-xl text-[#F4E8C1] flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <span className="font-special text-xs text-[#C5A059] flex items-center mr-2">
            <Filter className="w-4 h-4 mr-1 text-[#D4AF37]" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs font-cinzel font-bold rounded tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'btn-brass text-[#1E120B]'
                  : 'bg-[#2A1A10] text-[#EADBB1] hover:bg-[#3B2314] border border-[#C5A059]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vintage DOS Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#C5A059]" />
          <input 
            type="text" 
            placeholder="Search events, keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full dos-input pl-9 pr-4 py-2 rounded text-xs focus:outline-none"
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
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="btn-brass px-4 py-2 text-xs rounded uppercase"
          >
            Reset Filters
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

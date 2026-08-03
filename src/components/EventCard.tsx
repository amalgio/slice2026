import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EventItem } from '../types';
import { 
  Zap, Cpu, FileText, Bot, Activity, Brain, Code, Dices, Users, Compass, Sparkles, Flame, Gift, ArrowRight, Clock, MapPin, Users2 
} from 'lucide-react';

interface EventCardProps {
  event: EventItem;
  onQuickView?: (event: EventItem) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onQuickView }) => {
  const navigate = useNavigate();

  // Map icon strings to Lucide components
  const getEventIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-[#C85A17]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#C85A17]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#C85A17]" />;
      case 'Bot': return <Bot className="w-5 h-5 text-[#C85A17]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#C85A17]" />;
      case 'Brain': return <Brain className="w-5 h-5 text-[#C85A17]" />;
      case 'Code': return <Code className="w-5 h-5 text-[#C85A17]" />;
      case 'Dices': return <Dices className="w-5 h-5 text-[#C85A17]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#C85A17]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#C85A17]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#C85A17]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#C85A17]" />;
      case 'Gift': return <Gift className="w-5 h-5 text-[#C85A17]" />;
      default: return <Zap className="w-5 h-5 text-[#C85A17]" />;
    }
  };

  return (
    <div className="parchment-card p-5 flex flex-col justify-between group transition-all duration-300">
      <div>
        {/* Top Header Strip: Icon, Title & Category Badge */}
        <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-[#C5A059]/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded bg-[#EADBB1] border border-[#C5A059] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              {getEventIcon(event.iconName)}
            </div>
            <div>
              <h3 className="font-pixel text-xl font-bold text-[#1E120B] tracking-wide group-hover:text-[#C85A17] transition-colors">
                {event.name}
              </h3>
              <span className="font-press text-[10px] text-[#705335] uppercase tracking-wider block mt-0.5">
                {event.category}
              </span>
            </div>
          </div>

          {event.cashPrize && (
            <span className="bg-[#1E120B] text-[#D4AF37] border-2 border-[#C5A059] text-[10px] font-pixel font-bold px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
              {event.cashPrize}
            </span>
          )}
        </div>

        {/* Short Description */}
        <p className="font-eb text-sm text-[#3B2314] leading-relaxed mb-4 line-clamp-3">
          {event.shortDescription}
        </p>

        {/* Event Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs font-eb text-[#5C4028] bg-[#EADBB1]/40 p-2.5 rounded border border-[#C5A059]/30 mb-4">
          <div className="flex items-center space-x-1.5">
            <Users2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
            <span className="truncate"><strong>Size:</strong> {event.teamSize}</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
            <span className="truncate"><strong>Rounds:</strong> {event.roundsCount}</span>
          </div>

          <div className="col-span-2 flex items-center space-x-1.5 pt-1 border-t border-[#C5A059]/20">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
            <span className="truncate"><strong>Venue:</strong> {event.venue}</span>
          </div>
        </div>
      </div>

      {/* Tactile Action Buttons */}
      <div className="flex items-center space-x-2 pt-2 border-t border-[#C5A059]/20">
        <button
          onClick={() => navigate(`/events/${event.id}`)}
          className="btn-walnut flex-1 py-2 text-xs rounded uppercase tracking-wider flex items-center justify-center space-x-1.5"
        >
          <span>Explore Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
        </button>

        {onQuickView && (
          <button
            onClick={() => onQuickView(event)}
            className="btn-brass px-3 py-2 text-xs rounded uppercase tracking-wider"
            title="Quick View"
          >
            Preview
          </button>
        )}
      </div>
    </div>
  );
};

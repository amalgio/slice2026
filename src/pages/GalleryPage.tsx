import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/galleryData';
import { PolaroidPhoto } from '../types';
import { X, ZoomIn, Calendar, Sparkles } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PolaroidPhoto | null>(null);

  return (
    <div className="relative z-10 pt-28 pb-16 space-y-12 max-w-7xl mx-auto px-4">
      
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center space-x-3 text-[#C5A059]">
          <span className="h-[1px] w-16 bg-[#C5A059]" />
          <span className="font-special text-xs uppercase tracking-widest text-[#705335]">Archival Memories</span>
          <span className="h-[1px] w-16 bg-[#C5A059]" />
        </div>
        
        <h1 className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#1E120B]">
          Symposium Photo Gallery
        </h1>

        <p className="font-cormorant italic text-xl text-[#5C4028] max-w-2xl mx-auto">
          Pinned memories from previous SLICE editions. Click any polaroid photo to inspect in the vintage lightbox view.
        </p>
      </div>

      {/* Polaroid Gallery Grid with Brass Pins */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-4">
        {GALLERY_DATA.map((photo) => (
          <div 
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="polaroid-frame cursor-pointer group"
            style={{
              transform: `rotate(${photo.rotation}deg)`
            }}
          >
            {/* Shiny Brass Pin Head */}
            <div className="brass-pin" />

            {/* Photo Image Container */}
            <div className="w-full aspect-[4/3] bg-[#EADBB1] overflow-hidden rounded-sm border border-[#EADBB1] shadow-inner mb-3 relative">
              <img 
                src={photo.imageUrl} 
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                <span className="btn-brass px-2.5 py-1 text-[10px] rounded uppercase flex items-center space-x-1">
                  <ZoomIn className="w-3 h-3" />
                  <span>Inspect</span>
                </span>
              </div>
            </div>

            {/* Handwritten Polaroid Caption */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-cinzel text-sm font-bold text-[#1E120B] truncate">
                  {photo.title}
                </h3>
                <span className="font-special text-[11px] text-[#C85A17]">
                  '{photo.year}
                </span>
              </div>
              <p className="font-special text-xs text-[#5C4028] line-clamp-2 leading-tight">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative bg-[#F8F4EC] p-6 sm:p-8 rounded-lg border-4 border-[#C5A059] shadow-2xl max-w-3xl w-full text-[#1E120B] space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Brass Pin */}
            <div className="brass-pin !top-2" />

            <div className="flex items-center justify-between border-b border-[#C5A059]/40 pb-3">
              <div>
                <span className="font-special text-xs text-[#C85A17] uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Edition {selectedPhoto.year}
                </span>
                <h2 className="font-cinzel text-2xl font-bold text-[#1E120B]">
                  {selectedPhoto.title}
                </h2>
              </div>

              <button 
                onClick={() => setSelectedPhoto(null)}
                className="w-8 h-8 rounded-full bg-[#1E120B] border border-[#C5A059] flex items-center justify-center text-[#C5A059] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image display */}
            <div className="w-full max-h-[60vh] bg-black/10 rounded overflow-hidden border border-[#C5A059]/50 shadow-inner">
              <img 
                src={selectedPhoto.imageUrl} 
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[55vh] mx-auto"
              />
            </div>

            {/* Handwritten Caption */}
            <div className="p-4 bg-[#F4E8C1] rounded border border-[#C5A059]/40">
              <p className="font-special text-sm text-[#3B2314] leading-relaxed">
                "{selectedPhoto.caption}"
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

import React from 'react';

export const BackgroundLayer: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Base Attached Parchment & Vintage Artwork Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-1.png')",
          backgroundColor: '#1C120C',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Subtle Parchment Texture Wash Overlay to keep content contrast sharp */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(253, 251, 247, 0.8) 0%, rgba(244, 232, 193, 0.6) 70%, rgba(197, 160, 89, 0.8) 100%)
          `
        }}
      />

      {/* Subtle Grid / Blueprint Technical Watermark Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] stroke-[#3B2314]" width="100%" height="100%">
        <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="0" cy="0" r="1.5" fill="#3B2314" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Soft Vignette Overlay around outer borders for antique depth */}
      <div 
        className="absolute inset-0" 
        style={{
          boxShadow: 'inset 0 0 140px rgba(15, 8, 4, 0.45), inset 0 0 50px rgba(45, 24, 12, 0.3)'
        }} 
      />
    </div>
  );
};

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BackgroundLayer } from './components/BackgroundLayer';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { SponsorsPage } from './pages/SponsorsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { RegistrationPage } from './pages/RegistrationPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen relative flex flex-col font-eb text-[#2D180C]">
        
        {/* Photorealistic Vintage Parchment Notebook Background Layer */}
        <BackgroundLayer />

        {/* Fixed Vintage Header Navbar */}
        <Navbar />

        {/* Main Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:eventId" element={<EventDetailPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            {/* Fallback route to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Vintage Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

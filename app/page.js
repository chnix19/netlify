'use client';

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Message from './components/Message';
import PhotoGallery from './components/PhotoGallery';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-purple-200 to-violet-300">
        <div className="animate-heartbeat">
          <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
    );
  }

  // Sample photos array - replace with your actual photos
  const photos = [
    { id: 1, title: 'Photo 1', description: 'First Kiss Picture', src: '/images/pic1.jpg' },
    { id: 2, title: 'Photo 2', description: 'Selfie Of Us', src: '/images/pic2.jpg' },
    { id: 3, title: 'Photo 3', description: 'Selfie Of Us', src: '/images/pic3.jpg' },
    { id: 4, title: 'Photo 4', description: 'Selfie Of Us', src: '/images/pic4.jpg' },
    { id: 5, title: 'Photo 5', description: 'With Maykel And Eron', src: '/images/pic5.jpg' }
  ];

  return (
    <main className="min-h-screen bg-purple-50">
      {/* Hero/Opening Section */}
      <Hero 
        title="Happy Monthsary"
        subtitle="Every moment with you is a cherished memory in my heart."
        ctaText="Read My Message"
        ctaLink="#message"
      />

      {/* Message Section - Made more visually distinct */}
      <section id="message" className="py-20 bg-white relative">
        {/* Decorative top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-10 text-purple-50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 pt-10">
          <Message 
            sender="Markieeee"
            recipient="Beloved"
            // You can provide a custom message as JSX or leave it empty to use the default
            // message={<><p>Custom message here...</p></>} 
          />
        </div>
        
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
          <svg className="relative block w-full h-10 text-purple-200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-20 bg-gradient-to-br from-purple-200 via-purple-100 to-violet-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-violet-500 to-purple-500 text-transparent bg-clip-text">Our Beautiful Moments</h2>
          
          <PhotoGallery photos={photos} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-purple-900 text-center text-purple-100 text-sm">
        <p>Made By Your Honeyyyy | Happy Monthsary! Hehehehehe</p>
      </footer>
    </main>
  );
}

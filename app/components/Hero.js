'use client';

import { useState, useEffect, useRef } from 'react';

export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  const heroRef = useRef(null);
  const [envelopeState, setEnvelopeState] = useState('initial'); // initial, hovering, opening, opened, revealed
  
  useEffect(() => {
    // Initial animation hint
    const hintTimer = setTimeout(() => {
      if (envelopeState === 'initial') {
        setEnvelopeState('hovering');
        
        const resetTimer = setTimeout(() => {
          if (envelopeState === 'hovering') {
            setEnvelopeState('initial');
          }
        }, 1200);
        
        return () => clearTimeout(resetTimer);
      }
    }, 3000);
    
    // Transition from opening to opened
    if (envelopeState === 'opening') {
      const openedTimer = setTimeout(() => {
        setEnvelopeState('opened');
        
        const revealTimer = setTimeout(() => {
          setEnvelopeState('revealed');
          
          // Scroll to message section after animation completes
          const messageSection = document.getElementById('message');
          if (messageSection) {
            setTimeout(() => {
              messageSection.scrollIntoView({ behavior: 'smooth' });
            }, 1000); // Added a slight delay to ensure animation completes
          }
        }, 1500);
        
        return () => clearTimeout(revealTimer);
      }, 1000);
      
      return () => clearTimeout(openedTimer);
    }
    
    // Add parallax effect on scroll for revealed state
    const handleScroll = () => {
      if (!heroRef.current || envelopeState !== 'revealed') return;
      const scrollY = window.scrollY;
      const elements = heroRef.current.querySelectorAll('.parallax');
      
      elements.forEach((element, index) => {
        const speed = 0.05 + (index * 0.02);
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hintTimer);
    };
  }, [envelopeState]);
  
  const handleEnvelopeInteraction = () => {
    if (envelopeState === 'initial' || envelopeState === 'hovering') {
      setEnvelopeState('opening');
    }
  };
  
  const isEnvelopeActive = envelopeState !== 'revealed';
  
  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-300 via-purple-200 to-violet-300"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated circles */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white opacity-30 animate-float"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
        
        {/* Light rays from center when envelope opens */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${envelopeState === 'opening' ? 'opacity-40' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent rotate-45 transform origin-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent -rotate-45 transform origin-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-300 to-transparent rotate-[135deg] transform origin-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-300 to-transparent -rotate-[135deg] transform origin-center"></div>
        </div>
      </div>
      
      {/* Envelope Animation Container */}
      <div className={`absolute inset-0 flex items-center justify-center z-50 transition-opacity duration-1000 ${!isEnvelopeActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className={`envelope-container ${envelopeState === 'opened' ? 'animate-envelope-float' : ''}`}>
          {/* The Premium Envelope */}
          <div 
            className={`relative cursor-pointer transition-all duration-500 ease-out w-[340px] h-[240px] md:w-[500px] md:h-[350px] ${envelopeState === 'hovering' ? 'scale-105' : envelopeState === 'opening' ? 'scale-110' : ''}`}
            onClick={handleEnvelopeInteraction}
            onMouseEnter={() => envelopeState === 'initial' && setEnvelopeState('hovering')}
            onMouseLeave={() => envelopeState === 'hovering' && setEnvelopeState('initial')}
          >
            {/* Main Envelope Body */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-violet-400 to-purple-300 rounded-xl shadow-2xl overflow-hidden z-10">
              {/* Fine detailed pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '15px 15px'
              }}></div>
              
              {/* Elegant border frame */}
              <div className="absolute inset-[5px] border-[1px] border-white border-opacity-30 rounded-lg pointer-events-none"></div>
              
              {/* Center medallion/stamp effect when closed */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${envelopeState === 'opening' || envelopeState === 'opened' ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`}>
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-[90%] h-[90%] rounded-full border-2 border-white border-opacity-30 flex items-center justify-center p-1">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center animate-color-pulse">
                      <div className="animate-heartbeat">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elegant corner decorations */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white border-opacity-40 rounded-tl-md"></div>
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white border-opacity-40 rounded-tr-md"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-white border-opacity-40 rounded-bl-md"></div>
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-white border-opacity-40 rounded-br-md"></div>
              
              {/* From/To elegant label */}
              <div className="absolute bottom-5 right-5 text-right">
                <div className="text-white text-opacity-80 text-xs md:text-sm font-light">
                  <p className="italic mb-1 font-serif">From My Heart</p>
                  <p className="font-serif">To Yours</p>
                </div>
              </div>
              
              {/* Shimmer effect */}
              <div className={`absolute inset-0 animate-shimmer ${envelopeState === 'hovering' ? 'opacity-60' : 'opacity-20'}`}></div>
            </div>
            
            {/* Front Envelope Flap */}
            <div 
              className={`absolute top-0 left-0 right-0 h-[40%] origin-bottom rounded-t-xl shadow-md z-20 overflow-hidden transition-all duration-1200 ease-out preserve-3d ${
                envelopeState === 'opening' || envelopeState === 'opened' ? 'rotate-x-180' : ''
              }`}
            >
              {/* Front of flap (visible when closed) */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-500 backface-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '15px 15px'
                }}></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`transform transition-all duration-500 ${envelopeState === 'hovering' ? 'scale-110' : 'scale-100'}`}>
                    <p className="text-white text-center text-opacity-90 font-medium tracking-wider text-sm md:text-base">
                      {envelopeState === 'hovering' ? "OPEN ME" : "CLICK TO OPEN"}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Back of flap (visible when open) */}
              <div className="absolute inset-0 bg-white bg-opacity-95 backface-hidden rotate-x-180" style={{ transform: 'rotateX(180deg)' }}></div>
            </div>
            
            {/* Letter/Card Content */}
            <div className={`absolute inset-0 bg-white rounded-xl shadow-inner z-15 transition-all duration-1000 ease-out transform ${
              envelopeState === 'opening' ? 'translate-y-[-10%]' : 
              envelopeState === 'opened' ? 'translate-y-[-45%] scale-105' : 'translate-y-[0%]'
            }`}>
              {/* Card Content */}
              <div className="w-full h-full rounded-xl bg-white p-6 flex flex-col items-center justify-center">
                {/* Gold foil edge effect */}
                <div className="absolute inset-[3px] border-[1px] border-purple-200 rounded-lg pointer-events-none"></div>
                
                {/* Decorative corner marks */}
                <div className="absolute top-4 left-4 w-6 h-6 opacity-20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-500">
                    <path d="M12 5v14m-7-7h14" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="absolute bottom-4 right-4 w-6 h-6 opacity-20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-500">
                    <path d="M12 5v14m-7-7h14" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                
                {/* Content with elegant typography */}
                <div className="text-center z-10 w-full max-w-xs">
                  <h2 className="text-2xl md:text-3xl font-serif bg-gradient-to-r from-purple-600 via-violet-600 to-purple-500 bg-clip-text text-transparent font-medium mb-3">
                    {title || "Happy Monthsary"}
                  </h2>
                  
                  <div className="flex items-center justify-center my-3">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-300"></div>
                    <div className="mx-3">
                      <svg className="w-5 h-5 text-purple-500 animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple-300"></div>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-600 font-light italic mb-4 leading-relaxed">
                    {subtitle || "Every moment with you is a cherished memory in my heart."}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Hover instruction text - only show on initial state */}
            {envelopeState === 'initial' && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-purple-700 text-xs animate-pulse">
                Click the envelope to open your special message
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Main Content (shown after envelope animation) */}
      <div className={`transition-all duration-1000 ease-in transform ${envelopeState === 'revealed' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Floating decorative elements */}
        <div className="absolute w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-24 h-24 rounded-full bg-purple-400 animate-float parallax"></div>
          <div className="absolute top-[30%] right-[15%] w-16 h-16 rounded-full bg-violet-400 animate-float parallax" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-[20%] left-[25%] w-20 h-20 rounded-full bg-purple-400 animate-float parallax" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-[15%] right-[20%] w-28 h-28 rounded-full bg-violet-300 animate-float parallax" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}></div>
        
        {/* Content */}
        <div className="text-center z-10 px-4 max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 text-transparent bg-clip-text mb-6">
            {title || "Happy Monthsary"}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 italic mb-8 font-light">
            {subtitle || "Every moment with you is a cherished memory in my heart."}
          </p>
          
          <div className="inline-block animate-heartbeat mb-12">
            <svg className="w-12 h-12 text-purple-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          
          <div>
            <a 
              href={ctaLink || "#message"} 
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-full font-medium transition-all hover:shadow-lg hover:opacity-90 hover:scale-105"
            >
              {ctaText || "Read My Message"}
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-pulse">
          <span className="text-gray-600 text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
} 
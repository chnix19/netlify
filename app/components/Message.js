'use client';

import { useEffect, useRef } from 'react';

export default function Message({ message, sender, recipient }) {
  const messageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-20');
          entry.target.classList.add('scale-100');
          entry.target.classList.remove('scale-95');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (messageRef.current) {
      observer.observe(messageRef.current);
    }

    return () => {
      if (messageRef.current) {
        observer.unobserve(messageRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden opacity-0 translate-y-20 scale-95 transition-all duration-1200 ease-out transform purple-glow" ref={messageRef}>
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-100 rounded-full opacity-50"></div>
      <div className="absolute top-1/4 left-0 w-3 h-3 bg-purple-400 rounded-full"></div>
      <div className="absolute bottom-1/3 right-8 w-2 h-2 bg-violet-400 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-purple-200 rounded-full"></div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 via-violet-500 to-purple-500 text-transparent bg-clip-text relative z-10">Happy 7th Monthsary</h2>
      
      {/* Animated heart icon */}
      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 flex items-center justify-center">
          <svg className="w-12 h-12 text-purple-500 animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
      
      <div className="prose prose-lg max-w-2xl mx-auto text-gray-700 relative z-10 prose-headings:text-purple-700 prose-a:text-purple-600 romantic-text">
        <p className="mb-4 text-center italic">
          {recipient ? `To my ${recipient},` : 'To my beloved,'}
        </p>
        
        {message ? (
          <div className="mb-6">{message}</div>
        ) : (
          <>
            <p className="mb-4">
              Happy 7th Monthsary Honeyyy ❤️
            </p>
            <p className="mb-4">
              I Can't Believe That We're on 7th Months Of love hehehe. Every Single Day with you feels like a gift for me, like literally you light me up talaga even the dullest moments. i already miss your presence besides me and your hugs are my favorite kind of home. 🥰
            </p>
            <p className="mb-4">
              I Remember our first date like something it was yesterday but not exactly yesterday hehehe. the moment i saw you for the first time sparks me and asking my inner self na "is this my gf?, waaaah tangkad kayo" since then, we've made a memories through personal. and that time we sleep together sad like it feels like i'm safe from u. You've already shown me what it means to love fully and fearlessly. ✨
            </p>
            <p className="mb-4">
              In This 7 months also, i already your value and your most vulnerable and every version of you. it kinda inspires me how smart you are and keep my self align with my studies. and hoping I've done the same for you. 💫
            </p>
            <p className="mb-4">
              Thank you for choosing me, trusting me and loving me honeyyy ko. i love you more than words than saying "too" more than stars light up in the sky and the longest trip just to see my love one. 💖
            </p>
            <p className="mb-4">
              Happy Monthsary Again honey koo 💕
            </p>
          </>
        )}
        
        <p className="text-right italic mt-8">
          Forever yours,<br />
          <span className="font-semibold text-purple-600">{sender || 'Your Honeyyyy'}</span>
        </p>
      </div>
      
      {/* Decorative hearts */}
      <div className="absolute bottom-8 left-8 text-purple-400 opacity-30">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="absolute top-12 right-12 text-violet-400 opacity-30">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-400"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-400"></div>
    </div>
  );
} 
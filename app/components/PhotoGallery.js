'use client';

import { useState } from 'react';

export default function PhotoGallery({ photos = [] }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Use placeholder images if no photos are provided
  const displayPhotos = photos.length > 0 
    ? photos 
    : Array(6).fill(null).map((_, i) => ({
        id: i,
        title: `Photo ${i + 1}`,
        description: 'A special moment together',
        src: null
      }));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayPhotos.map((photo, index) => (
          <div 
            key={photo.id || index} 
            className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fade-in cursor-pointer" 
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-[4/5] relative bg-purple-100">
              {photo.src ? (
                <img 
                  src={photo.src} 
                  alt={photo.title || `Photo ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-purple-400">
                  <span>Add your photo here</span>
                </div>
              )}
              {/* Add a subtle purple gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-800/20 to-transparent opacity-30"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <p className="font-medium">{photo.title || `Photo ${index + 1}`}</p>
                <p className="text-sm opacity-80">{photo.description || 'A special moment together'}</p>
              </div>
            </div>
            
            {/* Add decorative border */}
            <div className="absolute inset-0 border-2 border-purple-200 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Lightbox for selected photo */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-purple-950/95 z-50 flex items-center justify-center p-4" 
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full animate-fade-in">
            {selectedPhoto.src ? (
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.title} 
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <div className="aspect-video bg-purple-900 flex items-center justify-center text-purple-300 rounded-lg">
                <span>Photo placeholder</span>
              </div>
            )}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-purple-900/70 backdrop-blur-sm p-3 rounded-b-lg">
              <h3 className="text-xl font-medium">{selectedPhoto.title}</h3>
              <p className="opacity-80">{selectedPhoto.description}</p>
            </div>
            <button 
              className="absolute top-2 right-2 text-white bg-purple-800/70 backdrop-blur-sm rounded-full p-2 hover:bg-purple-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
} 
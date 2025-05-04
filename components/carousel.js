import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  
  // Enhanced advertisement images with titles and links
  const ads = [
    {
      id: 1,
      src: '/gallery/IMG-20250502-WA0057.jpg', // Image path in public directory
      alt: 'Advertisement 1',
      title: 'बाजार स्पेशल ऑफर',
      link: '/special-offers'
    },
    {
      id: 2,
      src: '/gallery/IMG-20250502-WA0066.jpg',
      alt: 'Advertisement 2',
      title: 'नवीन उत्पादने',
      link: '/new-products'
    },
    {
      id: 3,
      src: '/gallery/IMG-20250502-WA0116.jpg',
      alt: 'Advertisement 3',
      title: 'मोसमी फळे आणि भाज्या',
      link: '/seasonal-products'
    },
    {
      id: 4,
      src: '/gallery/IMG-20250502-WA0100.jpg',
      alt: 'Advertisement 4',
      title: 'श्रेष्ठ दर्जाची उत्पादने',
      link: '/quality-products'
    },
    {
      id: 5,
      src: '/gallery/IMG-20250502-WA0097.jpg',
      alt: 'Advertisement 5',
      title: 'ताजी फळे',
      link: '/fresh-fruits'
    }
  ];

  // Function to handle the next image with transition
  const nextImage = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    setError(false);
    setTimeout(() => setIsTransitioning(false), 700); // Match duration to CSS transition
  }, [isTransitioning, ads.length]);

  // Function to handle the previous image with transition
  const prevImage = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
    setError(false);
    setTimeout(() => setIsTransitioning(false), 700); // Match duration to CSS transition
  }, [isTransitioning, ads.length]);

  // Jump to a specific slide
  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setError(false);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning, currentIndex]);

  // Pause/resume autoplay on hover
  const handleMouseEnter = () => setAutoplayPaused(true);
  const handleMouseLeave = () => setAutoplayPaused(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, prevImage]);

  // Automatic image change with pause capability
  useEffect(() => {
    if (autoplayPaused) return;
    
    const interval = setInterval(nextImage, 6000);
    return () => clearInterval(interval);
  }, [autoplayPaused, nextImage]);

  // Error handler for images
  const handleImageError = (index) => {
    if (currentIndex === index) setError(true);
  };

  return (
    <div 
      className="relative w-full h-full group" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slide overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
      
      {/* Slide counter */}
      <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full z-20 backdrop-blur-sm">
        {currentIndex + 1} / {ads.length}
      </div>
      
      {/* Main carousel container with enhanced transitions */}
      <div className="relative h-[15rem] sm:h-[20rem] md:h-[25rem] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0_2)] border-4 border-white">
        <div 
          className={`absolute inset-0 flex transform transition-all duration-700 ${isTransitioning ? 'ease-out' : 'ease-in-out'}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {ads.map((ad, index) => (
            <div key={ad.id} className="relative flex-shrink-0 w-full h-full overflow-hidden bg-gray-100">
              <div className="absolute inset-0 bg-gray-100"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
              {/* Image container with hover zoom effect */}
              <div className="relative w-full h-full transition-transform duration-1000 group-hover:scale-[1.02]">
                <Image
                  src={ad.src}
                  alt={ad.alt}
                  fill
                  className="object-cover transition-all duration-700"
                  onError={() => {
                    console.error(`Image failed to load: ${ad.src}`);
                    handleImageError(index);
                  }}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Advertisement title/content overlay */}
              
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full 
                  transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white/30 z-20 
                  transform hover:scale-110 shadow-lg border border-white/30"
        onClick={prevImage}
        disabled={isTransitioning}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full 
                  transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white/30 z-20 
                  transform hover:scale-110 shadow-lg border border-white/30"
        onClick={nextImage}
        disabled={isTransitioning}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Enhanced indicators with animation */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {ads.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`relative h-2.5 rounded-full transition-all duration-500 overflow-hidden ${currentIndex === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/60'}`}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
          >
            {currentIndex === index && (
              <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-300 w-full scale-x-0 origin-left transition-transform animate-progressBar"></span>
            )}
          </button>
        ))}
      </div>

      {/* Autoplay indicator */}
      <div className={`absolute top-4 left-4 transition-opacity duration-300 ${autoplayPaused ? 'opacity-100' : 'opacity-0'} z-20`}>
        <div className="bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
          <span>⏸ Autoplay paused</span>
        </div>
      </div>

      {/* Fallback for image errors with improved styling */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 text-white z-30">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="text-xl font-bold mb-2">जाहिरात उपलब्ध नाही</span>
          <p className="text-gray-300 text-sm max-w-xs text-center">कृपया थोड्या वेळानंतर पुन्हा प्रयत्न करा.</p>
        </div>
      )}
      
      {/* Add custom keyframe animation for progress bar */}
      <style jsx>{`
        @keyframes progressBar {
          0% { transform: scaleX(0); }
          10% { transform: scaleX(0.1); }
          100% { transform: scaleX(1); }
        }
        .animate-progressBar {
          animation: progressBar 6s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default Carousel;

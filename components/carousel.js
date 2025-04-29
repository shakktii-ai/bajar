import { useState, useEffect, useCallback } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  
  // Enhanced advertisement images with titles and links
  const ads = [
    {
      id: 1,
      src: 'https://content3.jdmagicbox.com/comp/nashik/u6/0253px253.x253.230310054904.i5u6/catalogue/niphad-kanda-market-niphad-nashik-markets-Vsei1QMFWa.jpg', // Create these in your public directory
      alt: 'Advertisement 1',
      title: 'बाजार स्पेशल ऑफर',
      link: '/special-offers'
    },
    {
      id: 2,
      src: 'https://i0.wp.com/www.globaltrademag.com/wp-content/uploads/2019/08/shutterstock_image-2-2.jpg?fit=757%2C393&ssl=1',
      alt: 'Advertisement 2',
      title: 'नवीन उत्पादने',
      link: '/new-products'
    },
    {
      id: 3,
      src: 'https://insanelygoodrecipes.com/wp-content/uploads/2022/12/Fresh-and-Orgaic-Pink-Pomegranate.jpg',
      alt: 'Advertisement 3',
      title: 'मोसमी फळे आणि भाज्या',
      link: '/seasonal-products'
    },
    {
      id: 4,
      src: 'https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg',
      alt: 'Advertisement 4',
      title: 'श्रेष्ठ दर्जाची उत्पादने',
      link: '/quality-products'
    },
    {
      id: 5,
      src: 'https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=faoiFapQkhucuLuor9gBnblJ4KJpqvEgariqalvzRas=',
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
      <div className="relative h-full overflow-hidden rounded-lg">
        <div 
          className={`absolute inset-0 flex transform transition-all duration-700 ${isTransitioning ? 'ease-out' : 'ease-in-out'}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {ads.map((ad, index) => (
            <div key={ad.id} className="relative flex-shrink-0 w-full h-full overflow-hidden">
              {/* Image with hover zoom effect */}
              <div className="absolute inset-0 transition-transform duration-10000 group-hover:scale-105">
                <img
                  src={ad.src}
                  alt={ad.alt}
                  className="w-full h-full object-cover transition-all duration-700"
                  onError={() => handleImageError(index)}
                />
              </div>
              
              {/* Advertisement title/content overlay */}
              <a 
                href={ad.link} 
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                         pt-16 pb-6 px-8 flex flex-col items-start justify-end z-10 transform transition-all duration-500
                         group-hover:pb-8"
              >
                <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{ad.title}</h3>
                  <div className="inline-flex items-center text-white/80 text-sm hover:text-white transition-colors">
                    <span>अधिक माहिती</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-700 ease-out"></div>
              </a>
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

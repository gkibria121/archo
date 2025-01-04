import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const ImageSlider = ({
  images = [],
  section,
  sectionImageIndex,
  openGallery,
  setSectionImageIndex,
  project,
}) => {
  const sliderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  const handleSectionSlideChange = useCallback(
    (newDirection) => {
      if (isAnimating) return; // Prevent rapid clicking

      setIsAnimating(true);
      setDirection(newDirection);
      
      setSectionImageIndex((prev) => {
        const increment = newDirection === 'next' ? 1 : -1;
        const currentIndex = prev[section] || 0;
        let newIndex = currentIndex + increment;
        
        if (newIndex < 0) {
          newIndex = images.length - 1;
        } else if (newIndex >= images.length) {
          newIndex = 0;
        }
        
        return { ...prev, [section]: newIndex };
      });

      // Reset animation state after transition
      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 300);
    },
    [images.length, section, setSectionImageIndex, isAnimating]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          handleSectionSlideChange('prev');
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleSectionSlideChange('next');
          break;
        case 'Home':
          e.preventDefault();
          setSectionImageIndex(prev => ({ ...prev, [section]: 0 }));
          break;
        case 'End':
          e.preventDefault();
          setSectionImageIndex(prev => ({ ...prev, [section]: images.length - 1 }));
          break;
      }
    },
    [handleSectionSlideChange, images.length, section, setSectionImageIndex]
  );

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('keydown', handleKeyDown);
      return () => slider.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);

  useEffect(() => {
    setImageError(false);
    setIsLoading(true);
  }, [sectionImageIndex[section]]);

  const currentIndex = sectionImageIndex[section] || 0;
  const currentImage = images[currentIndex];

  const handleImageLoad = () => {
    setIsLoading(false);
    setImageError(false);
  };

  const handleImageError = (e) => {
    setImageError(true);
    setIsLoading(false);
    e.target.src = 'https://via.placeholder.com/800x600?text=Image+Error';
  };

  // Get animation classes based on direction
  const getSlideAnimation = () => {
    if (!direction) return '';
    return direction === 'next' 
      ? 'animate-slide-left' 
      : 'animate-slide-right';
  };

  return (
    <div
      className="relative mt-8 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[600px]"
      tabIndex={0}
      ref={sliderRef}
      aria-label={`Image slider for ${section} section`}
      role="region"
      aria-roledescription="carousel"
    >
      <div className="image-box relative w-full h-full max-w-[75rem] mx-auto overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
          </div>
        )}
        
        <img
          src={currentImage || 'https://via.placeholder.com/800x600?text=No+Image'}
          alt={`${section} image ${currentIndex + 1} of ${images.length}`}
          className={`w-full h-full object-contain rounded transition-all duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${getSlideAnimation()}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            willChange: 'transform, opacity'
          }}
        />

        <button
          onClick={() => openGallery(images, currentIndex)}
          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Open full screen gallery"
        >
          <Maximize2 className="w-6 h-6" />
        </button>

        {images.length > 1 && (
          <>
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSectionSlideChange('prev');
                }}
                disabled={isAnimating}
                className="bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSectionSlideChange('next');
                }}
                disabled={isAnimating}
                className="bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div 
              className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
              role="tablist"
              aria-label="Image navigation dots"
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSectionImageIndex(prev => ({ ...prev, [section]: index }));
                  }}
                  aria-label={`Go to image ${index + 1}`}
                  aria-selected={index === currentIndex}
                  role="tab"
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="sr-only" aria-live="polite">
        {`Showing image ${currentIndex + 1} of ${images.length}`}
      </div>

      <style jsx global>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes slideRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        
        .animate-slide-left {
          animation: slideLeft 0.3s ease-in-out;
        }
        
        .animate-slide-right {
          animation: slideRight 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
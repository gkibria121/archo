import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import React, { useState } from 'react';

function GalleryModal({
  closeGallery,
  galleryImages,
  currentImageIndex,
  setCurrentImageIndex,
  isModalOpen,
}) {
  if (!isModalOpen) return null;
  const handleMouseMove = e => {
    if (!isZooming) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };
  // Zoom states
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);
  const navigateGallery = direction => {
    setCurrentImageIndex(prevIndex => {
      let newIndex = prevIndex + direction;
      if (newIndex >= galleryImages.length) newIndex = 0;
      if (newIndex < 0) newIndex = galleryImages.length - 1;
      return newIndex;
    });
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50" onClick={closeGallery}>
        <div
          className="absolute inset-0 flex items-center justify-center"
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-40 right-5 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors z-20"
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            onClick={() => navigateGallery(-1)}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            className="relative overflow-hidden cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZooming(true)}
            onMouseLeave={() => setIsZooming(false)}
          >
            <img
              src={galleryImages[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            {isZooming && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url(${galleryImages[currentImageIndex]})`,
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  backgroundSize: '200%',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.9,
                }}
              />
            )}
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            onClick={() => navigateGallery(1)}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryModal;

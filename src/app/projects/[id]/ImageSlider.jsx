import { Maximize2 } from 'lucide-react';

const ImageSlider = ({ images, section, sectionImageIndex,  openGallery ,setSectionImageIndex }) => {
  if (!images || images.length === 0) return null;
  const handleSectionSlideChange = (section, direction) => {
    setSectionImageIndex(prev => {
      const images =
        section === 'concept'
          ? project.conceptImages || []
          : section === 'challenge'
          ? project.challengeImages || []
          : project.solutionImages || [];

      const maxIndex = images.length - 1;
      let newIndex = prev[section] + (direction === 'next' ? 1 : -1);

      if (newIndex > maxIndex) newIndex = 0;
      if (newIndex < 0) newIndex = maxIndex;

      return { ...prev, [section]: newIndex };
    });
  };
  return (
    <div className="relative mt-8 mb-8">
      <div className="image-box relative  max-w-[75rem]  justify-center flex">
        <img
          src={images[sectionImageIndex[section]]}
          alt={`${section} ${sectionImageIndex[section] + 1}`}
          className="w-full object-cover rounded"
          style={{ height: '800px' }}
        />

        <button
          onClick={() => openGallery(images, sectionImageIndex[section])}
          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
          aria-label="Maximize image"
        >
          <Maximize2 className="w-6 h-6" />
        </button>

        {images.length > 1 && (
          <>
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
              <button
                onClick={e => {
                  e.stopPropagation();
                  handleSectionSlideChange(section, 'prev');
                }}
                className="bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={e => {
                  e.stopPropagation();
                  handleSectionSlideChange(section, 'next');
                }}
                className="bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === sectionImageIndex[section] ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={e => {
                    e.stopPropagation();
                    setSectionImageIndex(prev => ({ ...prev, [section]: index }));
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;

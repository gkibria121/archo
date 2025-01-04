import { Maximize2 } from "lucide-react";

const ImageBox = ({ image, onMaximize, alt }) => {
  const handleMaximizeClick = (e) => {
    e.stopPropagation();
    if (onMaximize) {
      onMaximize([image], 0);
    }
  };

  return (
    <div className="relative">
      <img 
        src={image} 
        alt={alt}
        className="w-full object-cover rounded"
        style={{ height: '600px' }}
      />
      
      <button
        onClick={handleMaximizeClick}
        className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
        aria-label="Maximize image"
      >
        <Maximize2 className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ImageBox;
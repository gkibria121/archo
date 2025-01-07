'use client'
import { useProject } from "@/app/contexts/ProjectContext";

export const ImageUploadSection = ({ title, field, images }) => {
    const { handleImageUpload, removeImage } = useProject();
    
    return (
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">{title}</label>
        <input
          type="file"
          multiple
          onChange={(e) => handleImageUpload(Array.from(e.target.files), field)}
          className="w-full mb-2"
          accept="image/*"
        />
        <div className="grid grid-cols-4 gap-2">
          {images && images.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`${field} ${index + 1}`}
                className="w-full h-24 object-cover rounded"
              />
              <button
                type="button"
                onClick={() => removeImage(field, index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
// components/ProjectForm/ImageUploadSection.js
export const ImageUploadSection = ({
    title,
    field,
    images,
    onUpload,
    onRemove
  }) => (
    <div className="mb-6" data-testid={`image-upload-${field}`}>
      <label className="block text-sm font-medium mb-2">{title}</label>
      <input
        type="file"
        multiple
        onChange={(e) => onUpload(e, field)}
        className="w-full mb-2"
        accept="image/*"
        data-testid={`file-input-${field}`}
      />
      <div className="grid grid-cols-4 gap-2">
        {images?.map((img, index) => (
          <div key={index} className="relative">
            
            <img
              src={img}
              alt={`${field} ${index + 1}`}
              className="w-full h-24 object-cover rounded"
            />
            <button
              type="button"
              onClick={() => onRemove(field, index)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6"
              data-testid={`remove-image-${field}-${index}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
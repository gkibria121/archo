// hooks/useProjectForm.js
import { useState, useCallback } from 'react';

export const useProjectForm = (initialData) => {
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mapUrl, setMapUrl] = useState("");
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const handleLocationChange = useCallback((location) => {
    setFormData(prev => ({ ...prev, location }));
    if (location) {
      const encodedLocation = encodeURIComponent(location);
      setMapUrl(`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${encodedLocation}`);
    }
  }, []);

  const handleImageUpload = useCallback(async (files, field) => {
    try {
      const base64Array = await Promise.all(
        files.map(file => fileToBase64(file))
      );

      setFormData(prev => ({
        ...prev,
        [field]: field === 'mainImage' ? base64Array[0] : [...(prev[field] || []), ...base64Array]
      }));
    } catch (error) {
      console.log(error)
      setError("Failed to process image. Please try again.");
    }
  }, []);

  return {
    formData,
    error,
    isSubmitting,
    mapUrl,
    setFormData,
    setError,
    setIsSubmitting,
    handleLocationChange,
    handleImageUpload
  };
};

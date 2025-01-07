import React, { createContext, useContext, useState, useEffect } from 'react';

const ProjectContext = createContext();
const MAX_STORAGE_SIZE = 4.5 * 1024 * 1024; // 4.5MB limit

export const ProjectProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [mapUrl, setMapUrl] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    client: '',
    date: '',
    type: '',
    services: '',
    concept: '',
    challenge: '',
    solution: '',
    quote: '',
    quoteAuthor: '',
    quotePosition: '',
    mainImage: null,
    conceptImages: [],
    challengeImages: [],
    solutionImages: [],
  });

  useEffect(() => {
    try {
      const storedProjects = sessionStorage.getItem('projects');
      if (storedProjects) {
        setProjects(JSON.parse(storedProjects));
      }
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  }, []);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const compressImage = async (base64String) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = base64String;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        let width = img.width;
        let height = img.height;
        
        // Maximum dimensions
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 600;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.7));
      };
    });
  };

  const handleLocationChange = (location) => {
    setFormData(prev => ({ ...prev, location }));
    if (location) {
      const encodedLocation = encodeURIComponent(location);
      setMapUrl(`https://www.google.com/maps/embed/v1/place?key=AIzaSyBG_KpmlY_ldrkT1d32Y74Q3i5eQgocNJI&q=${encodedLocation}`);
    }
  };

  const handleImageUpload = async (files, field) => {
    try {
      const base64Array = await Promise.all(files.map(file => fileToBase64(file)));
      const compressedImages = await Promise.all(base64Array.map(compressImage));
      
      if (field === 'mainImage') {
        setFormData(prev => ({ ...prev, [field]: compressedImages[0] }));
      } else {
        setFormData(prev => ({
          ...prev,
          [field]: [...(prev[field] || []), ...compressedImages]
        }));
      }
    } catch (error) {
      console.error('Error processing image:', error);
      setError('Failed to process image. Please try again.');
    }
  };

  const removeImage = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const saveToStorage = async (data) => {
    try {
      const serializedData = JSON.stringify(data);
      if (serializedData.length > MAX_STORAGE_SIZE) {
        throw new Error('Data size exceeds storage limit');
      }
      sessionStorage.setItem('projects', serializedData);
      return true;
    } catch (error) {
      if (error.name === 'QuotaExceededError' || error.message === 'Data size exceeds storage limit') {
        // Remove oldest projects until it fits
        const updatedData = [...data];
        while (JSON.stringify(updatedData).length > MAX_STORAGE_SIZE && updatedData.length > 1) {
          updatedData.shift(); // Remove oldest project
        }
        
        if (updatedData.length > 0) {
          sessionStorage.setItem('projects', JSON.stringify(updatedData));
          setProjects(updatedData);
          setError('Some older projects were removed due to storage limitations');
          return true;
        }
      }
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const newProject = {
        ...formData,
        id: formData.id || Date.now().toString(),
        category: formData.type.toLowerCase(),
        mainImageUrl: formData.mainImage,
      };

      let updatedProjects;
      if (formData.id) {
        updatedProjects = projects.map(p => 
          p.id === formData.id ? newProject : p
        );
      } else {
        updatedProjects = [...projects, newProject];
      }

      await saveToStorage(updatedProjects);
      setProjects(updatedProjects);
      setShowUploadForm(false);
      resetForm();
      
    } catch (error) {
      setError('Failed to save project. Please try reducing image sizes or removing old projects.');
      console.error('Error saving project:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      location: '',
      client: '',
      date: '',
      type: '',
      services: '',
      concept: '',
      challenge: '',
      solution: '',
      quote: '',
      quoteAuthor: '',
      quotePosition: '',
      mainImage: null,
      conceptImages: [],
      challengeImages: [],
      solutionImages: [],
    });
    setMapUrl('');
  };

  const handleDelete = async (projectId) => {
    try {
      const updatedProjects = projects.filter(project => project.id !== projectId);
      await saveToStorage(updatedProjects);
      setProjects(updatedProjects);
    } catch (error) {
      setError('Failed to delete project. Please try again.');
    }
  };

  const handleEdit = (project) => {
    setFormData({
      ...project,
      conceptImages: project.conceptImages || [],
      challengeImages: project.challengeImages || [],
      solutionImages: project.solutionImages || [],
    });
    setShowUploadForm(true);
    if (project.location) {
      const encodedLocation = encodeURIComponent(project.location);
      setMapUrl(`https://www.google.com/maps/embed/v1/place?key=AIzaSyBG_KpmlY_ldrkT1d32Y74Q3i5eQgocNJI&q=${encodedLocation}`);
    }
    window.scrollTo(0, 0);
  };

  const value = {
    isSubmitting,
    error,
    projects,
    showUploadForm,
    mapUrl,
    formData,
    setFormData,
    setShowUploadForm,
    handleLocationChange,
    handleImageUpload,
    removeImage,
    handleSubmit,
    handleDelete,
    handleEdit,
    resetForm
  };

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
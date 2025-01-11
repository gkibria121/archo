'use client';
import { createContext, useContext, useState, useCallback } from 'react';

const DashboardContext = createContext(null);

const MAX_STORAGE_SIZE = 5 * 1024 * 1024; 

const storageAvailable = (type) => {
  try {
    const storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
};

const safeSetItem = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    const valueSize = new Blob([serializedValue]).size;
    
    if (valueSize > MAX_STORAGE_SIZE) {
      throw new Error('Data exceeds storage limit');
    }

    if (!storageAvailable('localStorage')) {
      localStorage.clear();
    }

    localStorage.setItem(key, serializedValue);
    return true;
  } catch (e) {
    if (e.name === 'QuotaExceededError' || e.message === 'Data exceeds storage limit') {
      const currentData = JSON.parse(localStorage.getItem(key) || '[]');
      while (currentData.length > 0) {
        currentData.shift(); 
        try {
          localStorage.setItem(key, JSON.stringify(currentData));
          localStorage.setItem(key, JSON.stringify(value));
          return true;
        } catch (innerError) {
          if (currentData.length === 0) {
            throw new Error('Unable to store data even after clearing');
          }
          continue;
        }
      }
    }
    throw e;
  }
};

export const DashboardProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadProjects = useCallback(() => {
    setIsLoading(true);
    try {
      const data = localStorage.getItem('projects');
      const parsedData = data ? JSON.parse(data) : [];
      setProjects(parsedData);
      setError(null);
    } catch (err) {
      setError('Failed to load projects');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getProjectById = useCallback((id) => {
    try {
      const project = projects.find(p => p.id === id);
      if (!project) {
        setError('Project not found');
        return null;
      }
      setError(null);
      return project;
    } catch (err) {
      setError('Failed to get project');
      console.error(err);
      return null;
    }
  }, [projects]);

  const createProject = async (projectData) => {
    setIsLoading(true);
    try {
      const newProject = {
        ...projectData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const updatedProjects = [...projects, newProject];
      await safeSetItem('projects', updatedProjects);
      setProjects(updatedProjects);
      setError(null);
      return newProject;
    } catch (err) {
      setError('Failed to create project: Storage quota exceeded');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProject = async (id, projectData) => {
    setIsLoading(true);
    try {
      const updatedProjects = projects.map(p => 
        p.id === id ? { ...p, ...projectData, updatedAt: new Date().toISOString() } : p
      );
      
      await safeSetItem('projects', updatedProjects);
      setProjects(updatedProjects);
      setError(null);
      return updatedProjects.find(p => p.id === id);
    } catch (err) {
      setError('Failed to update project: Storage quota exceeded');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProject = async (id) => {
    setIsLoading(true);
    try {
      const updatedProjects = projects.filter(p => p.id !== id);
      await safeSetItem('projects', updatedProjects);
      setProjects(updatedProjects);
      setError(null);
    } catch (err) {
      setError('Failed to delete project');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (files) => {
    try {
      const uploads = Array.from(files).map(file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = () => reject(new Error('Failed to read file'));
          reader.readAsDataURL(file);
        });
      });
      
      const results = await Promise.all(uploads);
      setError(null);
      return results;
    } catch (err) {
      setError('Failed to upload images');
      console.error(err);
      throw err;
    }
  };

  return (
    <DashboardContext.Provider value={{
      projects,
      isLoading,
      error,
      loadProjects,
      getProjectById,
      createProject,
      updateProject,
      deleteProject,
      handleImageUpload,
      setError
    }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
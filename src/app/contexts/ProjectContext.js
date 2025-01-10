'use client';
import { createContext, useContext, useState, useCallback } from 'react';

const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');

  const loadProjects = useCallback(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      const parsedProjects = JSON.parse(storedProjects);
      setProjects(parsedProjects);
      setFilteredProjects(parsedProjects);
    }
  }, []);

  const filterProjects = (category) => {
    setCurrentFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <ProjectContext.Provider value={{
      projects,
      filteredProjects,
      currentFilter,
      loadProjects,
      filterProjects
    }}>
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
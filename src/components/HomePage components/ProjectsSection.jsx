'use client'
import React, { useState, useEffect } from 'react';

const DynamicProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');

  useEffect(() => {
    const storedProjects = sessionStorage.getItem('projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  const filterProjects = (category) => {
    setCurrentFilter(category);
  };

  const getFilteredProjects = () => {
    if (currentFilter === 'all') return projects;
    return projects.filter(project => 
      project.category.toLowerCase() === currentFilter.toLowerCase()
    );
  };

  return (
    <section className="gallery-section">
      <div className="auto-container">
        <div className="sortable-masonry">
          <div className="sec-title">
            <h2>Latest Works</h2>
          </div>
          
          <div className="filters">
            <ul className="filter-tabs filter-btns clearfix">
              <li
                className={`filter ${currentFilter === 'all' ? 'active' : ''}`}
                onClick={() => filterProjects('all')}
              >
                all
              </li>
              <li
                className={`filter ${currentFilter === 'residential' ? 'active' : ''}`}
                onClick={() => filterProjects('residential')}
              >
                residentials
              </li>
              <li
                className={`filter ${currentFilter === 'commercial' ? 'active' : ''}`}
                onClick={() => filterProjects('commercial')}
              >
                commercials
              </li>
              <li
                className={`filter ${currentFilter === 'architecture' ? 'active' : ''}`}
                onClick={() => filterProjects('architecture')}
              >
                architecture
              </li>
              <li
                className={`filter ${currentFilter === 'interior' ? 'active' : ''}`}
                onClick={() => filterProjects('interior')}
              >
                interior
              </li>
            </ul>
          </div>

          <div className="items-container row clearfix">
            {getFilteredProjects().map((project, index) => (
              <div key={project.id || index} className="gallery-block-two masonry-item col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href={`projects-detail/${project.id}`}>
                      <img src={project.mainImageUrl || `images/gallery/${(index % 4) + 1}.jpg`} alt={project.title} />
                    </a>
                  </div>
                  <div className="lower-content">
                    <div className="designation">{project.type}</div>
                    <h4>
                      <a href={`projects-detail/${project.id}`}>
                        {project.title}, {project.location}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="load-more text-center">
            <a href="projects">See All Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicProjectsSection;
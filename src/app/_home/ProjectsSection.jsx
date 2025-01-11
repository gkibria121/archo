'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const DynamicProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects).slice(0, 4));
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
              {['all', 'residential', 'commercial', 'architecture', 'interior'].map(category => (
                <li
                  key={category}
                  className={`filter ${currentFilter === category ? 'active' : ''}`}
                  onClick={() => filterProjects(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="items-container row clearfix">
            {getFilteredProjects().map((project) => (
              <div key={project.id} className={`gallery-block-two all masonry-item ${project.category} col-lg-3 col-md-6 col-sm-12`}>
                <div className="inner-box">
                  <div className="image">
                    <Link href={`/projects/${project.id}`}>
                      <img src={project.mainImage} alt={project.title} />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <div className="designation">{project.category}</div>
                    <h4>
                      <Link href={`/projects/${project.id}`}>
                        {project.title}, {project.location}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="load-more text-center">
            <Link href="/projects">See All Projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicProjectsSection;
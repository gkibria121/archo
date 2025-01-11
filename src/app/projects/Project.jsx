'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useProject } from '../contexts/ProjectContext';
import Link from 'next/link';

const Project = () => {
  const { 
    filteredProjects, 
    currentFilter, 
    loadProjects, 
    filterProjects 
  } = useProject();

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  return (
    <div className="page-wrapper">
      <Header isFixed={true}/>

      <div className="page-title-section">
        <div className="auto-container">
          <h2>Our Works</h2>
          <ul className="post-meta">
            <li><Link href="/">Home</Link></li>
            <li>Works</li>
          </ul>
        </div>
      </div>

      <section className="gallery-section">
        <div className="auto-container">
          <div className="sortable-masonry">
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
              {filteredProjects.map((project) => (
                <div key={project.id} className={`gallery-block-two all masonry-item ${project.category} col-lg-4 col-md-6 col-sm-12`}>
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
          </div>
        </div>
      </section>

      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
};

export default Project;
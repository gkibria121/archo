'use client'
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');

  useEffect(() => {
    // Load projects from session storage
    const storedProjects = sessionStorage.getItem('projects');
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
    <> 

      <div className="page-wrapper">
      <Header isFixed={true}/>

        <div className="page-title-section">
          <div className="auto-container">
            <h2>Our Works</h2>
            <ul className="post-meta">
              <li>
                <a href="index">Home</a>
              </li>
              <li>Works</li>
            </ul>
          </div>
        </div>

        <section className="gallery-section">
          <div className="auto-container">
            <div className="sortable-masonry">
              <div className="filters">
                <ul className="filter-tabs filter-btns clearfix">
                  <li
                    className={`filter ${currentFilter === 'all' ? 'active' : ''}`}
                    data-role="button"
                    data-filter=".all"
                    onClick={() => filterProjects('all')}
                  >
                    all{" "}
                  </li>
                  <li
                    className={`filter ${currentFilter === 'residential' ? 'active' : ''}`}
                    data-role="button"
                    data-filter=".residentials"
                    onClick={() => filterProjects('residential')}
                  >
                    residentials{" "}
                  </li>
                  <li
                    className={`filter ${currentFilter === 'commercial' ? 'active' : ''}`}
                    data-role="button"
                    data-filter=".commercials"
                    onClick={() => filterProjects('commercial')}
                  >
                    commercials{" "}
                  </li>
                  <li
                    className={`filter ${currentFilter === 'architecture' ? 'active' : ''}`}
                    data-role="button"
                    data-filter=".architecture"
                    onClick={() => filterProjects('architecture')}
                  >
                    architecture{" "}
                  </li>
                  <li 
                    className={`filter ${currentFilter === 'interior' ? 'active' : ''}`}
                    data-role="button" 
                    data-filter=".interior"
                    onClick={() => filterProjects('interior')}
                  >
                    interior{" "}
                  </li>
                </ul>
              </div>

              <div className="items-container row clearfix">
                {filteredProjects.map((project) => (
                  <div key={project.id} className={`gallery-block-two all masonry-item ${project.category} col-lg-4 col-md-6 col-sm-12`}>
                    <div className="inner-box">
                      <div className="image">
                        <a href={`projects//${project.id}`}>
                          <img src={project.mainImageUrl || "images/gallery/5.jpg"} alt="" />
                        </a>
                      </div>
                      <div className="lower-content">
                        <div className="designation">{project.type}</div>
                        <h4>
                          <a href={`projects//${project.id}`}>
                            {project.title}, {project.location}
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="load-more text-center">
                <a href="#">...Load more...</a>
              </div>
            </div>
          </div>
        </section>

        <Footer/>

        <ScrollToTopButton/>
      </div>
    </>
  );
};

export default Project;
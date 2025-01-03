'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const ImageBox = ({ image, onMaximize, alt }) => {
  const handleMaximizeClick = (e) => {
    e.stopPropagation();
    if (onMaximize) {
      onMaximize([image], 0);
    }
  };

  return (
    <div className="relative">
      <img 
        src={image} 
        alt={alt}
        className="w-full object-cover rounded"
        style={{ height: '600px' }}
      />
      
      <button
        onClick={handleMaximizeClick}
        className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
        aria-label="Maximize image"
      >
        <Maximize2 className="w-6 h-6" />
      </button>
    </div>
  );
};

const ProjectDetails = () => {
  const params = useParams();
  const id = params?.id;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextProject, setNextProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);
  const [mapUrl, setMapUrl] = useState('');
  
  // Slider states
  const [sectionImageIndex, setSectionImageIndex] = useState({
    concept: 0,
    challenge: 0,
    solution: 0
  });
  
  // Gallery states
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Zoom states
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const loadProject = () => {
      const storedProjects = JSON.parse(sessionStorage.getItem('projects') || '[]');
      const currentProject = storedProjects.find(p => p.id === id);
      
      if (currentProject) {
        setProject(currentProject);
        if (currentProject.location) {
          const encodedLocation = encodeURIComponent(currentProject.location);
          setMapUrl(`https://www.google.com/maps/embed/v1/place?key=AIzaSyBG_KpmlY_ldrkT1d32Y74Q3i5eQgocNJI&q=${encodedLocation}`);
        }
        
        const currentIndex = storedProjects.findIndex(p => p.id === id);
        setPrevProject(storedProjects[currentIndex - 1] || null);
        setNextProject(storedProjects[currentIndex + 1] || null);
      }
      
      setLoading(false);
    };

    loadProject();
  }, [id]);

  const handleSectionSlideChange = (section, direction) => {
    setSectionImageIndex(prev => {
      const images = section === 'concept' ? project.conceptImages || [] :
                    section === 'challenge' ? project.challengeImages || [] :
                    project.solutionImages || [];
      
      const maxIndex = images.length - 1;
      let newIndex = prev[section] + (direction === 'next' ? 1 : -1);
      
      if (newIndex > maxIndex) newIndex = 0;
      if (newIndex < 0) newIndex = maxIndex;
      
      return { ...prev, [section]: newIndex };
    });
  };

  const ImageSlider = ({ images, section }) => {
    if (!images || images.length === 0) return null;
    
    return (
      <div className="relative mt-8 mb-8">
        <div className="image-box relative">
          <img 
            src={images[sectionImageIndex[section]]} 
            alt={`${section} ${sectionImageIndex[section] + 1}`}
            className="w-full object-cover rounded"
            style={{ height: '600px' }}
          />
          
          <button
            onClick={() => openGallery(images, sectionImageIndex[section])}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            aria-label="Maximize image"
          >
            <Maximize2 className="w-6 h-6" />
          </button>

          {images.length > 1 && (
            <>
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSectionSlideChange(section, 'prev');
                  }}
                  className="bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSectionSlideChange(section, 'next');
                  }}
                  className="bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === sectionImageIndex[section] ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSectionImageIndex(prev => ({ ...prev, [section]: index }));
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const openGallery = (images, startIndex = 0) => {
    setGalleryImages(images);
    setCurrentImageIndex(startIndex);
    setIsGalleryOpen(true);
    setIsZooming(false);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setIsZooming(false);
    setCurrentImageIndex(0);
  };

  const navigateGallery = (direction) => {
    setCurrentImageIndex(prevIndex => {
      let newIndex = prevIndex + direction;
      if (newIndex >= galleryImages.length) newIndex = 0;
      if (newIndex < 0) newIndex = galleryImages.length - 1;
      return newIndex;
    });
  };

  const handleMouseMove = (e) => {
    if (!isZooming) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  if (loading) return <div className="auto-container">Loading...</div>;
  if (!project) return <div className="auto-container">Project not found</div>;

  return (
    <>
      <meta charSet="UTF-8" />
      <title>{`${project.title} - Archo Architecture & Interior`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="profile" href="https://gmpg.org/xfn/11" />
      <link href="/css/bootstrap.css" rel="stylesheet" />
      <link href="/css/main.css" rel="stylesheet" />
      <link href="/css/responsive.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&family=Teko:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />

      <div className="page-wrapper">
        <Header />

        <div className="project-banner-section">
          <ImageBox 
            image={project.mainImageUrl || "/images/background/3.jpg"}
            alt={project.title}
            onMaximize={(images) => openGallery(images, 0)}
          />
        </div>

        <section className="project-detail-section">
          <div className="auto-container">
            <div className="inner-container">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              
              <div className="info-boxed">
                <ul>
                  <li><span>location</span>{project.location}</li>
                  <li><span>client</span>{project.client}</li>
                  <li><span>date</span>{project.date}</li>
                  <li><span>type</span>{project.type}</li>
                  <li><span>Service</span>{project.services}</li>
                </ul>
              </div>

              {mapUrl && (
                <div className="map-section mt-8">
                  <h3 className="text-2xl font-bold mb-4">Project Location</h3>
                  <iframe
                    width="100%"
                    height="500"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={mapUrl}
                    allowFullScreen
                  />
                </div>
              )}

              {project.concept && (
                <div className="concept-section mt-20">
                  <h2>Concept</h2>
                  <p>{project.concept}</p>
                  <ImageSlider images={project.conceptImages} section="concept" />
                </div>
              )}

              {project.challenge && (
                <div className="challenge-section mt-20">
                  <h2>Challenge</h2>
                  <p>{project.challenge}</p>
                  <ImageSlider images={project.challengeImages} section="challenge" />
                </div>
              )}

              {project.solution && (
                <div className="solution-section mt-20">
                  <h2>Solution</h2>
                  <p>{project.solution}</p>
                  <ImageSlider images={project.solutionImages} section="solution" />
                </div>
              )}

              {project.quote && (
                <div className="project-quote">
                  <p>"{project.quote}"</p>
                  <div className="author-info">
                    {project.quoteAuthor} <span>{project.quotePosition}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="new-projects-section">
          <div className="auto-container">
            <div className="clearfix">
              <div className="pull-left">
                {prevProject && (
                  <Link href={`/projects-detail/${prevProject.id}`}>
                    <span className="arrow icofont-rounded-left" /> {prevProject.title}
                  </Link>
                )}
              </div>
              <div className="pull-right">
                {nextProject && (
                  <Link href={`/projects-detail/${nextProject.id}`}>
                    {nextProject.title} <span className="arrow icofont-rounded-right" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50"
          onClick={closeGallery}
        >
          <div 
            className="absolute inset-0 flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-40 right-5 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors z-20"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
              onClick={() => navigateGallery(-1)}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div 
              className="relative overflow-hidden cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
            >
              <img
                src={galleryImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
              {isZooming && (
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `url(${galleryImages[currentImageIndex]})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    backgroundSize: '200%',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.9,
                  }}
                />
              )}
            </div>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
              onClick={() => navigateGallery(1)}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
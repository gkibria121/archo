'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Footer from '@/components/Footer'; 
import ImageBox from './ImageBox';
import ImageSlider from './ImageSlider';
import ProjectInfo from './ProjectInfo'; 
import ProjectSectionContainer from '../ProjectSectionContainer';
import GalleryModal from './GalleryModal';
import MapBox from '@/components/MapBox';
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
    solution: 0,
  });

  // Gallery states
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);



  useEffect(() => {
    const loadProject = () => {
      const storedProjects = JSON.parse(sessionStorage.getItem('projects') || '[]');
      const currentProject = storedProjects.find(p => p.id === id);

      if (currentProject) {
        setProject(currentProject);
        if (currentProject.location) {
          const encodedLocation = encodeURIComponent(currentProject.location);
          setMapUrl(
            `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${encodedLocation}`
          );
        }

        const currentIndex = storedProjects.findIndex(p => p.id === id);
        setPrevProject(storedProjects[currentIndex - 1] || null);
        setNextProject(storedProjects[currentIndex + 1] || null);
      }

      setLoading(false);
    };

    loadProject();
  }, [id]);

  const openGallery = (images, startIndex = 0) => {
    setGalleryImages(images);
    setCurrentImageIndex(startIndex);
    setIsGalleryOpen(true);
     
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  
    setCurrentImageIndex(0);
  };




  if (loading) return <div className="auto-container">Loading...</div>;
  if (!project) return <div className="auto-container">Project not found</div>;

  return (
    <>
      <div className="page-wrapper">
        <Header />

        <div className="project-banner-section">
          <ImageBox
            image={project.mainImageUrl || '/images/background/3.jpg'}
            alt={project.title}
            onMaximize={images => openGallery(images, 0)}
          />
        </div>

    m    <section className="project-detail-section">
          <div className="auto-container">
            <div className="inner-container">
              <ProjectInfo project={project} />

              <MapBox src={mapUrl}  title={"Project Location"}/>

              <ProjectSectionContainer
                heading="Concept"
                className="concept-section mt-20"
                desc={project.concept}
              >
                <ImageSlider
                  images={project.conceptImages}
                  section="concept"
                  sectionImageIndex={sectionImageIndex}
                  openGallery={openGallery}
                  setSectionImageIndex={setSectionImageIndex}
                />
              </ProjectSectionContainer>
              <ProjectSectionContainer
                heading="Challenge"
                className="challenge-section mt-20"
                desc={project.challenge}
              >
                <ImageSlider
                  images={project.challengeImages}
                  section="challenge"
                  sectionImageIndex={sectionImageIndex}
                  openGallery={openGallery}
                  setSectionImageIndex={setSectionImageIndex}
                />
              </ProjectSectionContainer>

              <ProjectSectionContainer
                heading="Solution"
                className="challenge-section mt-20"
                desc={project.solution}
              >
                <ImageSlider
                  images={project.challengeImages}
                  section="challenge"
                  sectionImageIndex={sectionImageIndex}
                  openGallery={openGallery}
                  setSectionImageIndex={setSectionImageIndex}
                />
              </ProjectSectionContainer>
            </div>
          </div>
        </section>

        <section className="new-projects-section">
          <div className="auto-container">
            <div className="clearfix">
              <div className="pull-left">
                {prevProject && (
                  <Link href={`/projects/${prevProject.id}`}>
                    <span className="arrow icofont-rounded-left" /> {prevProject.title}
                  </Link>
                )}
              </div>
              <div className="pull-right">
                {nextProject && (
                  <Link href={`/projects/${nextProject.id}`}>
                    {nextProject.title} <span className="arrow icofont-rounded-right" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        closeGallery={closeGallery}
        galleryImages={galleryImages}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        isModalOpen={isGalleryOpen}
      />
    </>
  );
};

export default ProjectDetails;

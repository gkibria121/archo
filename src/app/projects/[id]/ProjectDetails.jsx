'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ImageBox from './ImageBox';
import ImageSlider from './ImageSlider';
import GalleryModal from './GalleryModal';
import MapBox from '@/components/MapBox';

const ProjectDetails = () => {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);
  const [mapUrl, setMapUrl] = useState('');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sectionImageIndex, setSectionImageIndex] = useState({
    concept: 0,
    challenge: 0,
    solution: 0,
  });

  useEffect(() => {
    const loadProject = () => {
      const storedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
      const currentProject = storedProjects.find(p => p.id === params.id);

      if (currentProject) {
        setProject(currentProject);
        if (currentProject.location) {
          const encodedLocation = encodeURIComponent(currentProject.location);
          setMapUrl(
            `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${encodedLocation}`
          );
        }

        const currentIndex = storedProjects.findIndex(p => p.id === params.id);
        setPrevProject(storedProjects[currentIndex - 1] || null);
        setNextProject(storedProjects[currentIndex + 1] || null);
      }
    };

    if (params?.id) {
      loadProject();
    }
  }, [params?.id]);

  const openGallery = (images, startIndex = 0) => {
    setGalleryImages(images);
    setCurrentImageIndex(startIndex);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setCurrentImageIndex(0);
  };

  if (!project) {
    return <div className="auto-container">Project not found</div>;
  }

  return (
    <div className="page-wrapper">
      <Header />

      <div className="project-banner-section">
        <ImageBox
          image={project.mainImage}
          alt={project.title}
          onMaximize={images => openGallery([project.mainImage], 0)}
        />
      </div>

      <section className="project-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p>{project.location}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Category</h3>
                <p className="capitalize">{project.category}</p>
              </div>
            </div>

            <MapBox src={mapUrl} title="Project Location" />

            {['concept', 'challenge', 'solution'].map((section) => (
              <div key={section} className="mt-12">
                <h3 className="text-2xl font-semibold mb-4 capitalize">{section}</h3>
                <p className="mb-4">{project[section]}</p>
                <ImageSlider
                  images={project[`${section}Images`]}
                  section={section}
                  sectionImageIndex={sectionImageIndex}
                  setSectionImageIndex={setSectionImageIndex}
                  openGallery={openGallery}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-12 mb-8">
            {prevProject && (
              <Link 
                href={`/projects/${prevProject.id}`}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                ← {prevProject.title}
              </Link>
            )}
            {nextProject && (
              <Link 
                href={`/projects/${nextProject.id}`}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                {nextProject.title} →
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />

      <GalleryModal
        closeGallery={closeGallery}
        galleryImages={galleryImages}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        isModalOpen={isGalleryOpen}
      />
    </div>
  );
};

export default ProjectDetails;

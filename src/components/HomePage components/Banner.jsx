'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "https://www.realestate.com.au/news-image/w_1280,h_720/v1659684233/news-lifestyle-content-assets/wp-content/production/capi_986b21b13d4883ef0fa9ea627349a368_99f40675efc6a3032d01b6aa710e0255.jpeg?_i=AA",
      title: "Residence",
      heading: "Dustin Villa, Spain",
      year: "2017",
      description: "Combine with ideas of owner, Dustin Mahone. Arquito's team completed a super villa with many powerful features, help owner really enjoy his life beside the beach"
    },
    {
      id: 2,
      image: "https://static.vecteezy.com/system/resources/thumbnails/023/122/853/small_2x/modern-office-building-exterior-3d-render-business-architecture-concept-ai-generated-free-photo.jpg",
      title: "Commercial",
      heading: "Modern Office Complex",
      year: "2023",
      description: "A state-of-the-art commercial development featuring sustainable design and innovative workspace solutions"
    },
    {
      id: 3,
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/307530892.jpg?k=28e51300a7004f1ab32fc88cb926c27f3bd5f8c6bb4e0ca8a5653320cee6baff&o=&hp=1",
      title: "Residential",
      heading: "Seaside Apartments",
      year: "2022",
      description: "Luxury beachfront living with panoramic ocean views and premium amenities for modern lifestyle"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out
            ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.heading}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50">
              <div className="container mx-auto px-4 h-full flex items-center">
                <div className="max-w-3xl">
                  <div className="text-white/80 text-xl mb-4">{slide.title}</div>
                  <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
                    {slide.heading}
                    <span className="block text-xl md:text-2xl italic mt-2 text-white/80">
                      completed {slide.year}
                    </span>
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <button className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                    See project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute z-20 bottom-12 left-1/2 -translate-x-1/2 space-y-2">
        <div className="w-5 h-5 border-t-2 border-white transform rotate-45 animate-bounce"></div>
        <div className="w-5 h-5 border-t-2 border-white transform rotate-45 animate-bounce animation-delay-200"></div>
        <div className="w-5 h-5 border-t-2 border-white transform rotate-45 animate-bounce animation-delay-400"></div>
      </div>

      <div className="absolute z-20 bottom-12 left-8 space-x-4 text-white">
        <a href="tel:+068-5568-48-34" className="hover:text-gray-300 transition-colors">
          (+068) 5568 48 34
        </a>
        <span>/</span>
        <a href="mailto:hello@archo.co" className="hover:text-gray-300 transition-colors">
          hello@archo.co
        </a>
      </div>

      <button
        onClick={handlePrev}
        className="absolute z-20 left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-colors"
        disabled={isTransitioning}
      >
        <ChevronLeft size={36} />
      </button>

      <button
        onClick={handleNext}
        className="absolute z-20 right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-colors"
        disabled={isTransitioning}
      >
        <ChevronRight size={36} />
      </button>

      <div className="absolute z-20 right-8 bottom-12 flex space-x-6">
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Banner;
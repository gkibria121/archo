import React from 'react';
import Home from '@/components/Home';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';
import BlogDetails from '@/components/BlogDetails';
import Project from '@/components/Project';
import ProjectDetails from '@/components/ProjectDetails';

const page = () => {
  return (
    <>
      <Home />
      <About />
      <Contact />
      <Blog />
      <BlogDetails />
      <Project />
      <ProjectDetails />
    </>
  );
};

export default page;

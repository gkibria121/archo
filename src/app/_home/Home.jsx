import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from './Banner'
import Experience from './Experience'
import ProjectsSection from './ProjectsSection'
import Services from './Services'
import Counter from './Counter'
import HowWeWork from './HowWeWork'
import Testimonial from './Testimonial'
import Sponsors from './Sponsors' 
import ScrollToTopButton from '@/components/ScrollToTopButton'


const Home = () => {
  return (
    <>

  <div className="page-wrapper">
   
    <Banner/>
    <Experience/>
    <ProjectsSection/>
    <Services/>
    <Counter/>
    <HowWeWork/>
    <Testimonial/>
    <Sponsors/> 
    
  </div>
  <ScrollToTopButton/>
</>

  )
}

export default Home
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from '../app/_home/Banner'
import Experience from '../app/_home/Experience'
import ProjectsSection from '../app/_home/ProjectsSection'
import Services from '../app/_home/Services'
import Counter from '../app/_home/Counter'
import HowWeWork from '../app/_home/HowWeWork'
import Testimonial from '../app/_home/Testimonial'
import Sponsors from '../app/_home/Sponsors'
import NewsSection from '../app/_home/NewsSection'


const Home = () => {
  return (
    <>

  <div className="page-wrapper">
    <Header />
    <Banner/>
    <Experience/>
    <ProjectsSection/>
    <Services/>
    <Counter/>
    <HowWeWork/>
    <Testimonial/>
    <Sponsors/>
    <NewsSection/>
    <Footer/>
  </div>
  <div className="scroll-to-top scroll-to-target" data-target="html">
    <span className="fa fa-arrow-circle-up" />
  </div>
</>

  )
}

export default Home
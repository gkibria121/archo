import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Testimonial from '../_home/Testimonial'
import Counter from '../_home/Counter'
import Services from '../_home/Services'
import Team from './Team'
import Experience from '../_home/Experience'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const About = () => {
  return (
    <> 
  <div className="page-wrapper">
    <Header />
    {/* Page Banner Section */}
    <section
      className="page-banner-section"
      style={{ backgroundImage: "url(images/background/2.jpg)" }}
    >
      <div className="auto-container">
        <h1>archo</h1>
      </div>
    </section>
    {/* End Page Banner Section */}
    <Experience/>
    <Team/>
    <Services/>
    <Counter/>
    <Testimonial/>
    <Footer/>
  </div>
   <ScrollToTopButton/>
</>

  )
}

export default About
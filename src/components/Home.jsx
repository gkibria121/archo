import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './HomePage components/Banner'
import Experience from './HomePage components/Experience'
import ProjectsSection from './HomePage components/ProjectsSection'
import Services from './HomePage components/Services'
import Counter from './HomePage components/Counter'
import HowWeWork from './HomePage components/HowWeWork'
import Testimonial from './HomePage components/Testimonial'
import Sponsors from './HomePage components/Sponsors'
import NewsSection from './HomePage components/NewsSection'


const Home = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <title>Archo - Architecture &amp; Interior HTML Template</title>
  <meta
    name="description"
    content="Archo is a beautifully unique Architecture & Interior HTML Template. It is a great choice for any type of architecture or construction-related company"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="profile" href="https://gmpg.org/xfn/11" />
  <link rel="canonical" href="Replace_with_your_PAGE_URL" />
  {/* Stylesheets */}
  <link href="/css/bootstrap.css" rel="stylesheet" />
  <link href="/css/main.css" rel="stylesheet" />
  <link href="/css/responsive.css" rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&family=Teko:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  {/* Add site Favicon */}
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
  <link rel="icon" href="images/favicon.png" type="image/x-icon" />
  <meta name="msapplication-TileImage" content="images/favicon.png" />

  
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
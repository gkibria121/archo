import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Testimonial from './HomePage components/Testimonial'
import Counter from './HomePage components/Counter'
import Services from './HomePage components/Services'
import Team from './Team'
import Experience from './HomePage components/Experience'

const About = () => {
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
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
  <link rel="icon" href="images/favicon.png" type="image/x-icon" />
  <meta name="msapplication-TileImage" content="images/favicon.png" />
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
  <div className="scroll-to-top scroll-to-target" data-target="html">
    <span className="fa fa-arrow-circle-up" />
  </div>
</>

  )
}

export default About
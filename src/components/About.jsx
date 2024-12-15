import React from 'react'

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
  {/* Open Graph (OG) meta tags are snippets of code that control how URLs are displayed when shared on social media
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Archo - Bootstrap HTML Template" />
    <meta property="og:url" content="PAGE_URL" />
    <meta property="og:site_name" content="SITE_NAME" />
    */}
  {/* For the og:image content, replace the # with a link of an image
    <meta property="og:image" content="#" />
    <meta property="og:description" content="Archo is a free Bootstrap HTML Template" />
    */}
  {/* Fonts */}
  <link
    href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&family=Teko:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  {/* Add site Favicon */}
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
  <link rel="icon" href="images/favicon.png" type="image/x-icon" />
  <meta name="msapplication-TileImage" content="images/favicon.png" />
  {/* Structured Data
    
    */}
  <div className="page-wrapper">
    {/* Main Header*/}
    <header className="main-header">
      {/* Header Upper */}
      <div className="header-upper">
        <div className="outer-container">
          <div className="inner-container clearfix">
            <div className="pull-left logo-box">
              <div className="logo">
                <a href="index.html">
                  <img src="images/logo.png" alt="" title="" />
                </a>
              </div>
            </div>
            <div className="nav-outer pull-left clearfix">
              {/* Mobile Navigation Toggler */}
              <div className="mobile-nav-toggler">
                <span className="icon ti-menu" />
              </div>
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-md">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className="navbar-collapse show collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="current">
                      <a href="about.html">About</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Projects</a>
                      <ul>
                        <li>
                          <a href="projects.html">Projects</a>
                        </li>
                        <li>
                          <a href="projects-detail.html">Projects Detail</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">Our Blog</a>
                        </li>
                        <li>
                          <a href="blog-detail.html">Blog Detail</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* Outer Box */}
            <div className="outer-box clearfix">
              <ul className="language-list">
                <li>
                  <a href="#">End</a>
                </li>
                <li>
                  <a href="#">Fra</a>
                </li>
              </ul>
              {/* Mobile Navigation Toggler */}
              <div className="mobile-nav-toggler">
                menu <span className="icon ion-android-menu" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <span className="icon lnr lnr-cross" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="index.html">
              <img src="images/logo-2.png" alt="" title="" />
            </a>
          </div>
          <div className="menu-outer">
            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
    {/*End Main Header */}
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
    {/* Experiance Section */}
    <section className="experiance-section style-two">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Title Column */}
          <div className="title-column col-lg-5 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="image">
                <img src="images/resource/experiance.png" alt="" />
              </div>
              <h2>
                50 Years <br /> Experience
              </h2>
              <div className="text">
                Helping people find the <br /> best solutions.
              </div>
            </div>
          </div>
          {/* Content Column */}
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="title-box">
                <h2>Archo studio</h2>
                <p>
                  Founded in Lebanon in 1967, Archo Architecture Company (KCC)
                  has grown to become one of <br /> the Middle East's leading
                  construction contractors.
                </p>
                <p>
                  We specialise in complex and prestigious construction and
                  infrastructure projects. Our portfolio includes some of the
                  region’s most iconic landmarks, from super high-rise luxury
                  developments, to five star hotels, hospitals and intricately
                  sophisticated smart buildings.
                </p>
              </div>
              <div className="specialization-box">
                <h2>our specialization</h2>
                {/* Specialise Box */}
                <div className="specialise-box">
                  <div className="inner-box">
                    <div className="content">
                      <div className="icon icofont-building-alt" />
                      <h5>
                        <a href="projects-detail.html">
                          Architectural Building
                        </a>
                      </h5>
                      <p>
                        We provide all materials, labor, equipment and services,
                        etc and ensure a safe and secure project site.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Specialise Box */}
                <div className="specialise-box">
                  <div className="inner-box">
                    <div className="content">
                      <div className="icon icofont-livejournal" />
                      <h5>
                        <a href="projects-detail.html">Interior Design</a>
                      </h5>
                      <p>
                        Meaningful preconstruction services bring value,
                        potential cost savings, and provide you with a
                        predictable outcome.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Specialise Box */}
                <div className="specialise-box">
                  <div className="inner-box">
                    <div className="content">
                      <div className="icon icofont-toy-horse" />
                      <h5>
                        <a href="projects-detail.html">Furnitures Production</a>
                      </h5>
                      <p>
                        We developed strong relationships with contractors and
                        specialist companies offering discounted prices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Experiance Section */}
    {/* Team Section */}
    <section className="team-section">
      <div className="auto-container">
        <div className="sec-title">
          <h2>our team</h2>
        </div>
        <div className="row clearfix">
          {/* Team Block */}
          <div className="team-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <a href="#">
                  <img src="images/resource/team-1.jpg" alt="" />
                </a>
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://twitter.com/"
                      className="icofont-twitter"
                    />
                  </li>
                  <li>
                    <a
                      href="http://facebook.com/"
                      className="icofont-facebook"
                    />
                  </li>
                  <li>
                    <a
                      href="http://google.com/"
                      className="icofont-instagram"
                    />
                  </li>
                  <li>
                    <a
                      href="http://linkedin.com/"
                      className="icofont-linkedin"
                    />
                  </li>
                </ul>
              </div>
              <div className="lower-content">
                <h4>
                  <a href="#">Edward Eric Jr</a>
                </h4>
                <div className="designation">CEO Founder</div>
              </div>
            </div>
          </div>
          {/* Team Block */}
          <div className="team-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <a href="#">
                  <img src="images/resource/team-2.jpg" alt="" />
                </a>
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://twitter.com/"
                      className="icofont-twitter"
                    />
                  </li>
                  <li>
                    <a
                      href="http://facebook.com/"
                      className="icofont-facebook"
                    />
                  </li>
                  <li>
                    <a
                      href="http://google.com/"
                      className="icofont-instagram"
                    />
                  </li>
                  <li>
                    <a
                      href="http://linkedin.com/"
                      className="icofont-linkedin"
                    />
                  </li>
                </ul>
              </div>
              <div className="lower-content">
                <h4>
                  <a href="#">Tom Holland</a>
                </h4>
                <div className="designation">
                  Architect &amp; Project Management
                </div>
              </div>
            </div>
          </div>
          {/* Team Block */}
          <div className="team-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInRight"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <a href="#">
                  <img src="images/resource/team-3.jpg" alt="" />
                </a>
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://twitter.com/"
                      className="icofont-twitter"
                    />
                  </li>
                  <li>
                    <a
                      href="http://facebook.com/"
                      className="icofont-facebook"
                    />
                  </li>
                  <li>
                    <a
                      href="http://google.com/"
                      className="icofont-instagram"
                    />
                  </li>
                  <li>
                    <a
                      href="http://linkedin.com/"
                      className="icofont-linkedin"
                    />
                  </li>
                </ul>
              </div>
              <div className="lower-content">
                <h4>
                  <a href="#">Laura Erakovic</a>
                </h4>
                <div className="designation">
                  Executive &amp; Marketing Management
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Team Section */}
    {/* Services Section */}
    <section className="services-section style-two">
      <div className="auto-container">
        <div className="sec-title">
          <h2>Why Choose Us</h2>
        </div>
        <div className="inner-container">
          <div className="clearfix">
            {/* Service Block */}
            <div className="service-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <h5>
                  <a href="projects-detail.html">
                    profressional and dedicate team
                  </a>
                </h5>
                <p>Building architectures with modern technology.</p>
                <div className="icon icofont-labour" />
                <a href="projects-detail.html" className="more">
                  more
                </a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <h5>
                  <a href="projects-detail.html">unique design</a>
                </h5>
                <p>Bring the beautifully for your house. Just enjoy!</p>
                <div className="icon icofont-ruler-compass-alt" />
                <a href="projects-detail.html" className="more">
                  more
                </a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <h5>
                  <a href="projects-detail.html">affordable and flexiable</a>
                </h5>
                <p>Bring nature in your house. Health is important</p>
                <div className="icon icofont-credit-card" />
                <a href="projects-detail.html" className="more">
                  more
                </a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <h5>
                  <a href="projects-detail.html">24/7 support</a>
                </h5>
                <p>Consulting solutions and make plan to renovation</p>
                <div className="icon icofont-live-support" />
                <a href="projects-detail.html" className="more">
                  more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}
    {/* Counter Section */}
    <section className="counter-section">
      <div className="auto-container">
        <div className="inner-container">
          {/* Fact Counter */}
          <div className="fact-counter">
            <div className="row clearfix">
              {/* Column */}
              <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="count-outer count-box">
                      <span
                        className="count-text"
                        data-speed={4500}
                        data-stop={8000}
                      >
                        0
                      </span>
                    </div>
                    <h4 className="counter-title">
                      Partner <br /> worldwide
                    </h4>
                  </div>
                </div>
              </div>
              {/* Column */}
              <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner wow fadeInLeft"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="count-outer count-box alternate">
                      <span
                        className="count-text"
                        data-speed={3500}
                        data-stop={1250}
                      >
                        0
                      </span>
                    </div>
                    <h4 className="counter-title">
                      employees and <br /> staffs
                    </h4>
                  </div>
                </div>
              </div>
              {/* Column */}
              <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner wow fadeInLeft"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="count-outer count-box">
                      <span
                        className="count-text"
                        data-speed={3000}
                        data-stop={904}
                      >
                        0
                      </span>
                    </div>
                    <h4 className="counter-title">
                      project completed <br /> on 60 countries
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Counter Section */}
    {/* Testimonial Section */}
    <section
      className="testimonial-section style-two"
      style={{ backgroundImage: "url(images/background/pattern-1.png)" }}
    >
      <div className="auto-container">
        <div className="row clearfix">
          {/* Carousel Column */}
          <div className="carousel-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="single-item-carousel owl-carousel owl-theme">
                {/* Testimonial Block */}
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="quote-icon ion-quote" />
                    <h2>
                      Good companies will <br /> meet needs; great companies{" "}
                      <br /> will create markets.
                    </h2>
                    <p>
                      We thought a lot before choosing the Archo WordPress{" "}
                      <br /> Theme because we wanted to sure our investment
                      would yield results. This was clearly the best choice.
                    </p>
                    <div className="category">
                      <span>Van Helsing</span> - DIrector at Envato LLC
                    </div>
                  </div>
                </div>
                {/* Testimonial Block */}
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="quote-icon ion-quote" />
                    <h2>
                      Good companies will <br /> meet needs; great companies{" "}
                      <br /> will create markets.
                    </h2>
                    <p>
                      We thought a lot before choosing the Archo WordPress{" "}
                      <br /> Theme because we wanted to sure our investment
                      would yield results. This was clearly the best choice.
                    </p>
                    <div className="category">
                      <span>Van Helsing</span> - DIrector at Envato LLC
                    </div>
                  </div>
                </div>
                {/* Testimonial Block */}
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="quote-icon ion-quote" />
                    <h2>
                      Good companies will <br /> meet needs; great companies{" "}
                      <br /> will create markets.
                    </h2>
                    <p>
                      We thought a lot before choosing the Archo WordPress{" "}
                      <br /> Theme because we wanted to sure our investment
                      would yield results. This was clearly the best choice.
                    </p>
                    <div className="category">
                      <span>Van Helsing</span> - DIrector at Envato LLC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div
                className="image wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <img src="images/resource/testimonial.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Testimonial Section */}
    {/* Main Footer */}
    <footer className="main-footer">
      <div className="auto-container">
        <div className="logo">
          <a href="index.html">
            <img src="images/logo-3.png" alt="" />
          </a>
        </div>
        <ul className="footer-page-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="contact-info">
          11 Broadway St, 12nd Floor, New York, NY 10004 <br />{" "}
          <a href="tel:+012-432-7121-20">(+012) 432-7121-20</a> <br />{" "}
          <a href="mailto:contact@konswptheme.com">contact@konswptheme.com</a>
        </div>
        <ul className="footer-social-icons">
          <li>
            <a href="http://facebook.com/" className="icofont-facebook" />
          </li>
          <li>
            <a href="https://twitter.com/" className="icofont-twitter" />
          </li>
          <li>
            <a href="http://google.com/" className="icofont-google-plus" />
          </li>
          <li>
            <a href="http://linkedin.com/" className="icofont-linkedin" />
          </li>
          <li>
            <a href="http://rss.com/" className="icofont-rss" />
          </li>
          <li>
            <a href="http://dribbble.com/" className="icofont-dribbble" />
          </li>
        </ul>
        <div className="copyright">
          Copyright © All rights reserved | Made with{" "}
          <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
          <a href="https://hasthemes.com/" target="_blank">
            HasThemes
          </a>
        </div>
      </div>
    </footer>
    {/* End Main Footer */}
  </div>
  {/*End pagewrapper*/}
  {/* Scroll To Top */}
  <div className="scroll-to-top scroll-to-target" data-target="html">
    <span className="fa fa-arrow-circle-up" />
  </div>
</>

  )
}

export default About
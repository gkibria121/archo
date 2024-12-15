import React from 'react'

const ProjectDetails = () => {
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
    <header className="main-header header-style-two">
      {/* Header Upper */}
      <div className="header-upper">
        <div className="outer-container">
          <div className="inner-container clearfix">
            <div className="pull-left logo-box">
              <div className="logo">
                <a href="index.html">
                  <img src="images/logo-4.png" alt="" title="" />
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
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li className="current dropdown">
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
    {/* End Main Header */}
    {/* Project Banner Section */}
    <div className="project-banner-section">
      <div className="image">
        <img src="images/background/3.jpg" alt="" />
      </div>
    </div>
    {/* End Project Banner Section */}
    {/* Project Detail Section */}
    <section className="project-detail-section">
      <div className="auto-container">
        <div className="inner-container">
          <h2>Culture House</h2>
          <p>
            The Mercedes-Benz Museum is the only museum in the world that can
            document in a single continuous timeline the more than 130 years of
            auto industry history from its very beginnings to the present day.
            On nine levels and covering a floor space of 16,500 square metres,
            the museum presents 160 vehicles and over 1,500 exhibits. As a place
            of innovation, it also demonstrates that history can point the way
            ahead
          </p>
          <div className="info-boxed">
            <ul>
              <li>
                <span>location</span>246 Sample Street, ABB Dist, Belgium
              </li>
              <li>
                <span>client</span>Belgium Goverment
              </li>
              <li>
                <span>date</span>2020
              </li>
              <li>
                <span>type</span>Architecture, Interior
              </li>
              <li>
                <span>Service</span>Design, Construction, Consulting
              </li>
            </ul>
          </div>
          <h2>Concept</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
        {/* Carousel Box */}
        <div className="carousel-box">
          <div className="single-item-carousel owl-carousel owl-theme">
            <div className="slide">
              <div className="image">
                <img src="images/gallery/14.jpg" alt="" />
              </div>
            </div>
            <div className="slide">
              <div className="image">
                <img src="images/gallery/14.jpg" alt="" />
              </div>
            </div>
            <div className="slide">
              <div className="image">
                <img src="images/gallery/14.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* End Carousel Box */}
        <div className="inner-container">
          {/* Challenge Boxed */}
          <div className="challenge-boxed">
            <div className="row clearfix">
              {/* Image Column */}
              <div className="image-column col-lg-10 col-md-12 col-sm-12">
                <div className="image">
                  <img src="images/gallery/15.jpg" alt="" />
                </div>
              </div>
              {/* Content Column */}
              <div className="content-column col-lg-2 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h3>Challenge</h3>
                  <p>
                    One of the most successful designer solutions was the use of
                    unifying concept for the meeting rooms through a common
                    design theme: each of the meeting rooms is named after one
                    of the planets of our solar system and is decorated with the
                    relevant cosmic images.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Challenge Boxed */}
          {/* Challenge Boxed Two */}
          <div className="challenge-boxed-two">
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-4 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h3>Solution</h3>
                  <p>
                    A modern engineering system with a high degree of automation
                    was installed in the building. In order to guarantee the
                    uninterrupted functioning of all systems and maintain a
                    comfortable climate in the office, an additional high-power
                    cooler was installed on the roof of the business center.
                  </p>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-8 col-md-12 col-sm-12">
                <div className="image">
                  <img src="images/gallery/16.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* End Challenge Boxed */}
          {/* Project Quote */}
          <div className="project-quote">
            <p>
              “ The secret to the successful implementation of this project is
              simple. We just brought together the best people and understood
              that we were facing a task that is unique in its scale and
              significance. ”
            </p>
            <div className="author-info">
              John Doe <span>Project Director</span>
            </div>
          </div>
          {/* End Project Quote */}
        </div>
      </div>
    </section>
    {/* End Project Detail Section */}
    {/* New Projects Section */}
    <section className="new-projects-section">
      <div className="auto-container">
        <div className="clearfix">
          <div className="pull-left">
            <a href="#">
              <span className="arrow icofont-rounded-left" /> Dustin Villam,
              Spain
            </a>
          </div>
          <div className="pull-right">
            <a href="#">
              Cubic House <span className="arrow icofont-rounded-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* End New Projects Section */}
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

export default ProjectDetails
import React from 'react'

const Blog = () => {
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
                {" "}
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
                    <li className="current dropdown">
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
    {/* Page Title Section */}
    <div className="page-title-section">
      <div className="auto-container">
        <h2>Our Blog</h2>
        <ul className="post-meta">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
    {/* End Page Title Section */}
    {/* Blog Page Section */}
    <section className="blog-page-section">
      <div className="auto-container">
        {/* MixitUp Galery */}
        <div className="mixitup-gallery">
          {/* Filter */}
          <div className="filters clearfix">
            <ul className="filter-tabs filter-btns clearfix">
              <li
                className="active filter"
                data-role="button"
                data-filter="all"
              >
                All
              </li>
              <li
                className="filter"
                data-role="button"
                data-filter=".residentials"
              >
                residentials
              </li>
              <li
                className="filter"
                data-role="button"
                data-filter=".commercials"
              >
                commercials
              </li>
              <li
                className="filter"
                data-role="button"
                data-filter=".architecture"
              >
                architecture
              </li>
              <li className="filter" data-role="button" data-filter=".interior">
                interior
              </li>
            </ul>
          </div>
          <div className="filter-list clearfix">
            {/* News Block Two */}
            <div className="news-block-two mix commercials architecture">
              <div className="inner-box">
                <div className="row clearfix">
                  {/* Image Column */}
                  <div className="image-column col-lg-8 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div
                        className="image-layer"
                        style={{
                          backgroundImage: "url(images/resource/news-5.jpg)"
                        }}
                      />
                      <div className="image">
                        <a href="blog-detail.html">
                          <img src="images/resource/news-5.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Content Column */}
                  <div className="content-column col-lg-4 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <ul className="info-list">
                        <li>Dec 23 ,2020</li>
                        <li>news</li>
                      </ul>
                      <h4>
                        <a href="blog-detail.html">The Way Of Building</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus faucibus est sed facilisis viverra. Praesent
                        nec accumsan nibh, eu grav da metus. Curabitur quis
                        sagittis nisl. In lectus ligula, varius quis...
                      </p>
                      <a href="blog-detail.html" className="article">
                        full article{" "}
                        <span className="arrow icofont-rounded-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* News Block Two */}
            <div className="news-block-two mix interior residentials">
              <div className="inner-box">
                <div className="row clearfix">
                  {/* Image Column */}
                  <div className="image-column col-lg-8 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div
                        className="image-layer"
                        style={{
                          backgroundImage: "url(images/resource/news-6.jpg)"
                        }}
                      />
                      <div className="image">
                        <a href="blog-detail.html">
                          <img src="images/resource/news-6.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Content Column */}
                  <div className="content-column col-lg-4 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <ul className="info-list">
                        <li>Dec 23 ,2020</li>
                        <li>inspiration</li>
                      </ul>
                      <h4>
                        <a href="blog-detail.html">
                          The Arch In Modern Architecture, Art and Aesthetic
                          More
                        </a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus faucibus est sed facilisis viverra. Praesent
                        nec accumsan nibh, eu grav da metus. Curabitur quis
                        sagittis nisl. In lectus ligula, varius quis...
                      </p>
                      <a href="blog-detail.html" className="article">
                        full article{" "}
                        <span className="arrow icofont-rounded-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* News Block Two */}
            <div className="news-block-two mix interior architecture">
              <div className="inner-box">
                <div className="row clearfix">
                  {/* Image Column */}
                  <div className="image-column col-lg-8 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div
                        className="image-layer"
                        style={{
                          backgroundImage: "url(images/resource/news-7.jpg)"
                        }}
                      />
                      <div className="image">
                        <a href="blog-detail.html">
                          <img src="images/resource/news-7.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Content Column */}
                  <div className="content-column col-lg-4 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <ul className="info-list">
                        <li>Dec 23 ,2020</li>
                        <li>tips &amp; tricks</li>
                      </ul>
                      <h4>
                        <a href="blog-detail.html">
                          Spiral Stair, New Interior Design Trends 2020
                        </a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus faucibus est sed facilisis viverra. Praesent
                        nec accumsan nibh, eu grav da metus. Curabitur quis
                        sagittis nisl. In lectus ligula, varius quis...
                      </p>
                      <a href="blog-detail.html" className="article">
                        full article{" "}
                        <span className="arrow icofont-rounded-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* News Block Two */}
            <div className="news-block-two mix architecture residentials">
              <div className="inner-box">
                <div className="row clearfix">
                  {/* Image Column */}
                  <div className="image-column col-lg-8 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div
                        className="image-layer"
                        style={{
                          backgroundImage: "url(images/resource/news-8.jpg)"
                        }}
                      />
                      <div className="image">
                        <a href="blog-detail.html">
                          <img src="images/resource/news-8.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Content Column */}
                  <div className="content-column col-lg-4 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <ul className="info-list">
                        <li>Dec 23 ,2020</li>
                        <li>others</li>
                      </ul>
                      <h4>
                        <a href="blog-detail.html">Nordic Interior Style</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus faucibus est sed facilisis viverra. Praesent
                        nec accumsan nibh, eu grav da metus. Curabitur quis
                        sagittis nisl. In lectus ligula, varius quis...
                      </p>
                      <a href="blog-detail.html" className="article">
                        full article{" "}
                        <span className="arrow icofont-rounded-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Load More */}
          <div className="load-more text-center">
            <a href="#">...Load more...</a>
          </div>
        </div>
      </div>
    </section>
    {/* End Blog Page Section */}
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

export default Blog
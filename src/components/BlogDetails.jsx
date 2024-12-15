import React from 'react'

const BlogDetails = () => {
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
  <link href="/src/css/bootstrap.css" rel="stylesheet" />
  <link href="/src/css/main.css" rel="stylesheet" />
  <link href="/src/css/responsive.css" rel="stylesheet" />
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
    {/* Blog Banner Section */}
    <div className="blog-banner-section">
      <div className="image">
        <img src="images/background/4.jpg" alt="" />
      </div>
    </div>
    {/* End Blog Banner Section */}
    {/* Blog Detail Section */}
    <section className="blog-detail-section">
      <div className="auto-container">
        <div className="inner-container">
          {/* Page Breadcrumbs */}
          <ul className="page-breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="projects.html">Works</a>
            </li>
            <li>Nordic Interior STyle</li>
          </ul>
          <h2>Nordic Interior Style</h2>
          <ul className="info-list">
            <li>Dec 23 ,2020</li>
            <li>news</li>
          </ul>
          <div className="big-text">
            To mark the first UK show of artist <br /> Henri Barande, graphic
            designer Alex Maxell and German studio Schultzschultz have created{" "}
            <br /> The Lodge Wooden
          </div>
          <p>
            This response is important for our ability to learn from mistakes,
            but it also <br /> gives rise to self-criticism, because it is part
            of the threat-protection system. In other words, what keeps us safe
            can go too far, and keep us too safe. In fact <br /> it can trigger
            self-censoring.
          </p>
          <ul className="list-style-one">
            <li>Welsh novelist Sarah Waters sums it up eloquently</li>
            <li>
              In their classic book, Creativity in Business, based on a popular
              course they co-taught
            </li>
            <li>Novelist and screenwriter Steven Pressfield</li>
            <li>
              A possible off-the-wall idea or solution appears like a blip and
              disappears without us
            </li>
          </ul>
          <h3>Defaulting to Mindfulness</h3>
          <p>
            Everything along the way, to and from, fascinated her: every pebble,
            ant, stick, leaf, blade of grass, and crack in the sidewalk was
            something to be picked up, looked at, tasted, smelled, and shaken.
            Everything was interesting to her. She knew nothing. <br />I knew
            everything…been there, done that. She was in the moment, I was in
            the past. She was mindful. I was mindless.
          </p>
          {/* BlockQuote */}
          <blockquote>
            <p>
              Our greatest weakness lies in giving up. <br /> The most certain
              way to succeed is always to <br /> try just one more time.
            </p>
            <div className="author-info">
              Aslam Habib <span>Envato Author</span>
            </div>
          </blockquote>
          {/* End BlockQuote */}
          <p>
            Both of these assumptions, of course, could be entirely false.
            Self-censoring is firmly rooted in our experiences with mistakes in
            the past and not the present. The brain messages arising from those
            experiences can be deceptive.{" "}
          </p>
          {/* Post Share Options*/}
          <div className="post-share-options">
            <div className="post-share-inner">
              <div className="post-title">Tags:</div>
              <ul className="tags">
                <li>
                  <a href="#">Construction,</a>
                </li>
                <li>
                  <a href="#">Building,</a>
                </li>
                <li>
                  <a href="#">Structure,</a>
                </li>
              </ul>
              <br />
              <ul className="social-box">
                <li className="facebook">
                  <a href="http://facebook.com/">
                    <span className="ion-social-facebook" />
                  </a>
                </li>
                <li className="twitter">
                  <a href="http://twitter.com/">
                    <span className="ion-social-twitter" />
                  </a>
                </li>
                <li className="linkedin">
                  <a href="https://myaccount.google.com/">
                    <span className="ion-social-google" />
                  </a>
                </li>
                <li className="rss">
                  <a href="https://www.rss.com/">
                    <span className="ion-social-rss" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Blog Related Projects */}
        <div className="blog-related-projects">
          <div className="title-box">
            <h4>Related Posts</h4>
          </div>
          <div className="row clearfix">
            {/* News Block */}
            <div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <a href="blog-detail.html">
                    <img src="images/resource/news-9.jpg" alt="" />
                  </a>
                </div>
                <div className="lower-content">
                  <ul className="info-list">
                    <li>Dec 23 ,2020</li>
                    <li>news</li>
                  </ul>
                  <h4>
                    <a href="blog-detail.html">The Way Of Building</a>
                  </h4>
                </div>
              </div>
            </div>
            {/* News Block */}
            <div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <a href="blog-detail.html">
                    <img src="images/resource/news-10.jpg" alt="" />
                  </a>
                </div>
                <div className="lower-content">
                  <ul className="info-list">
                    <li>Dec 23 ,2020</li>
                    <li>inspiration</li>
                  </ul>
                  <h4>
                    <a href="blog-detail.html">
                      The Arch In Modern Architecture, Art &amp; Aesthetic More
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            {/* News Block */}
            <div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <a href="blog-detail.html">
                    <img src="images/resource/news-11.jpg" alt="" />
                  </a>
                </div>
                <div className="lower-content">
                  <ul className="info-list">
                    <li>Dec 23 ,2020</li>
                    <li>tips &amp; tricks</li>
                  </ul>
                  <h4>
                    <a href="blog-detail.html">
                      Spiral Stair, New Interior Design Trends 2020
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Blog Detail Section */}
    {/* Blog New Posts Section */}
    <section className="blog-new-posts-section">
      <div className="auto-container">
        <div className="clearfix">
          <div className="pull-left">
            <a href="#">
              Older <span>The Way Of Building</span>
            </a>
          </div>
          <div className="pull-right new-post">
            <a href="#">
              Newer <span>Spiral Stair, New Interior Design Trends 2020</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* End Blog New Posts Section */}
    {/* Blog Comment Section */}
    <section className="blog-comment-section">
      <div className="auto-container">
        <div className="inner-container">
          {/* Comment Form */}
          <div className="comment-form">
            <div className="group-title">
              <h4>Leave A Comment</h4>
            </div>
            {/*Comment Form*/}
            <form method="post" action="blog.html">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Name *"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required=""
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject (Optinal)"
                    required=""
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea
                    className="darma"
                    name="message"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <button
                    className="theme-btn btn-style-one"
                    type="submit"
                    name="submit-form"
                  >
                    <span className="txt">Post Comments</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* End Blog Comment Section */}
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

export default BlogDetails
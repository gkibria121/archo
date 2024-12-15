import React from 'react'
import Header from './Header'

const Contact = () => {
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
      <Header />
      {/* End Main Header */}
      {/* Map Section */}
      <section className="map-section">
        <div className="outer-container">
          {/* Map Outer */}
          <div className="map-outer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s"
              width="100%"
              height="560px"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
            />
          </div>
        </div>
      </section>
      {/* End Map Section */}
      {/* Contact Page Section */}
      <section className="contact-page-section">
        <div className="auto-container">
          {/* Contact Info Boxed */}
          <div className="contact-info-boxed">
            <div className="row clearfix">
              {/* Column */}
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <h2>
                  Brooklyn, <span>New York</span>
                </h2>
                <div className="text">
                  849 Diamond Str, 07th Floor, NY 10012, New York, <br /> United
                  State America
                </div>
                <div className="email">
                  Email:{" "}
                  <a href="mailto:infor@yourdomain.com">infor@yourdomain.com</a>
                </div>
              </div>
              {/* Column */}
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <div className="call">
                  Call directly:
                  <br />
                  <a href="tel:+035-527-1710-70">(+035) 527-1710-70</a>
                </div>
                <ul className="location-list">
                  <li>
                    <span>Brand Offices:</span>Allentown PA | Allanta, GA |
                    Chicago, IL | Dallas, TX, <br /> Edison, NJ | Houston, TX
                  </li>
                  <li>
                    <span>Work Hours:</span>Mon - Sat: 8.00 - 17.00, Sunday closed
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Form Boxed */}
          <div className="form-boxed">
            <div className="sec-title centered">
              <h2>Have A Question? Contact Us</h2>
            </div>
            <div className="boxed-inner">
              {/* Contact Form */}
              <div className="contact-form">
                {/* Contact Form */}
                <form method="post" action="sendemail.php" id="contact-form">
                  <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        name="username"
                        placeholder="Enter your name..."
                        required=""
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject (optional)"
                        required=""
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea
                        name="message"
                        placeholder="Here goes your message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        name="submit-form"
                      >
                        <span className="txt">Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/*End Contact Form */}
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Detail Section */}
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
    {/*Google Map APi Key*/}
    {/*End Google Map APi*/}
    
  </>
  
  )
}

export default Contact
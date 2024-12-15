import React from 'react'
import Header from './Header'


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
  {/* Structured Data
    
    */}
  <div className="page-wrapper">
    {/* Main Header*/}
      <Header />
    {/*End Main Header */}
    {/* Banner Section */}
    <section className="banner-section">
      <div className="main-slider-carousel owl-carousel owl-theme">
        <div
          className="slide"
          style={{ backgroundImage: "url(images/main-slider/image-1.jpg)" }}
        >
          <div className="auto-container">
            {/* Content Boxed */}
            <div className="content-boxed">
              <div className="inner-boxed">
                <div className="title">Residence</div>
                <h1>
                  Dustin Villa, <br /> Spain{" "}
                  <span>
                    <i>completed</i> 2017
                  </span>
                </h1>
                <p>
                  Combine with ideas of owner, Dustin Mahone. <br /> Arquito’s
                  team completed a super villa with many powerful features,{" "}
                  <br /> help owner really enjoy his life beside the beach
                </p>
                <div className="btn-box">
                  <a href="about" className="see-projects">
                    See project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{ backgroundImage: "url(/images/main-slider/image-1.jpg)" }}
        >
          <div className="auto-container">
            {/* Content Boxed */}
            <div className="content-boxed">
              <div className="inner-boxed">
                <div className="title">Residence</div>
                <h1>
                  Dustin Villa, <br /> Spain{" "}
                  <span>
                    <i>completed</i> 2017
                  </span>
                </h1>
                <p>
                  Combine with ideas of owner, Dustin Mahone. <br /> Arquito’s
                  team completed a super villa with many powerful features,{" "}
                  <br /> help owner really enjoy his life beside the beach
                </p>
                <div className="btn-box">
                  <a href="about" className="see-projects">
                    See project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{ backgroundImage: "url(images/main-slider/image-1.jpg)" }}
        >
          <div className="auto-container">
            {/* Content Boxed */}
            <div className="content-boxed">
              <div className="inner-boxed">
                <div className="title">Residence</div>
                <h1>
                  Dustin Villa, <br /> Spain{" "}
                  <span>
                    <i>completed</i> 2017
                  </span>
                </h1>
                <p>
                  Combine with ideas of owner, Dustin Mahone. <br /> Arquito’s
                  team completed a super villa with many powerful features,{" "}
                  <br /> help owner really enjoy his life beside the beach
                </p>
                <div className="btn-box">
                  <a href="about" className="see-projects">
                    See project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Scroll Dwwn Btn*/}
      <div
        className="mouse-btn-down scroll-to-target"
        data-target=".experiance-section"
      >
        <div className="chevron" />
        <div className="chevron" />
        <div className="chevron" />
      </div>
      {/* Social Box */}
      <ul className="social-box">
        <li>
          <a href="#" className="ion-social-twitter" />
        </li>
        <li>
          <a href="#" className="ion-social-facebook" />
        </li>
        <li>
          <a href="#" className="fab fa-behance" />
        </li>
      </ul>
      {/* Info */}
      <div className="info">
        <a href="tel:+068-5568-48-34">(+068) 5568 48 34</a> /{" "}
        <a href="tel:+hello@archo.co">hello@archo.co</a>
      </div>
    </section>
    {/* End Banner Section */}
    {/* Experiance Section */}
    <section className="experiance-section">
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
                        <a href="projects-detail">
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
                        <a href="projects-detail">Interior Design</a>
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
                        <a href="projects-detail">Furnitures Production</a>
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
    {/* Project Section */}
    <section className="project-section">
      {/* Project Tabs */}
      <div className="project-tab">
        <div className="auto-container">
          <div className="tab-btns-box">
            {/*Tabs Header*/}
            <div className="tabs-header">
              <div className="clearfix">
                <div className="pull-left">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <h2>latest Works</h2>
                  </div>
                </div>
                <div className="pull-left">
                  <ul className="product-tab-btns clearfix">
                    <li className="p-tab-btn active-btn" data-tab="#p-tab-1">
                      All
                    </li>
                    <li className="p-tab-btn" data-tab="#p-tab-2">
                      architecture
                    </li>
                    <li className="p-tab-btn" data-tab="#p-tab-3">
                      interior
                    </li>
                    <li className="p-tab-btn" data-tab="#p-tab-4">
                      landscape
                    </li>
                  </ul>
                </div>
                <div className="pull-right">
                  <a href="projects" className="projects">
                    see all projects{" "}
                    <span className="arrow icofont-rounded-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Tabs Content*/}
        <div className="p-tabs-content">
          {/* Portfolio Tab / Active Tab */}
          <div className="p-tab active-tab" id="p-tab-1">
            <div className="project-carousel owl-theme owl-carousel">
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/1.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Residential</div>
                        <h2>
                          <a href="projects-detail">Cubic Villa</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/2.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Architecture</div>
                        <h2>
                          <a href="projects-detail">Culture House</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/3.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Commercial</div>
                        <h2>
                          <a href="projects-detail">ABC Financial Bank</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/4.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Interior</div>
                        <h2>
                          <a href="projects-detail">B6-No.5 OLA Tower</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/1.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Residential</div>
                        <h2>
                          <a href="projects-detail">Cubic Villa</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/2.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Architecture</div>
                        <h2>
                          <a href="projects-detail">Culture House</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/3.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Commercial</div>
                        <h2>
                          <a href="projects-detail">ABC Financial Bank</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/4.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Interior</div>
                        <h2>
                          <a href="projects-detail">B6-No.5 OLA Tower</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Tab */}
          <div className="p-tab" id="p-tab-2">
            <div className="project-carousel owl-theme owl-carousel">
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/1.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Residential</div>
                        <h2>
                          <a href="projects-detail">Cubic Villa</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/3.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Commercial</div>
                        <h2>
                          <a href="projects-detail">ABC Financial Bank</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/2.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Architecture</div>
                        <h2>
                          <a href="projects-detail">Culture House</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/4.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Interior</div>
                        <h2>
                          <a href="projects-detail">B6-No.5 OLA Tower</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/1.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Residential</div>
                        <h2>
                          <a href="projects-detail">Cubic Villa</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/3.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Commercial</div>
                        <h2>
                          <a href="projects-detail">ABC Financial Bank</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/2.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Architecture</div>
                        <h2>
                          <a href="projects-detail">Culture House</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/4.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Interior</div>
                        <h2>
                          <a href="projects-detail">B6-No.5 OLA Tower</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Tab */}
          <div className="p-tab" id="p-tab-3">
            <div className="project-carousel owl-theme owl-carousel">
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/1.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Residential</div>
                        <h2>
                          <a href="projects-detail">Cubic Villa</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/2.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Architecture</div>
                        <h2>
                          <a href="projects-detail">Culture House</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/3.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Commercial</div>
                        <h2>
                          <a href="projects-detail">ABC Financial Bank</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/4.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Interior</div>
                        <h2>
                          <a href="projects-detail">B6-No.5 OLA Tower</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/1.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Residential</div>
                        <h2>
                          <a href="projects-detail">Cubic Villa</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/2.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Architecture</div>
                        <h2>
                          <a href="projects-detail">Culture House</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/3.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Commercial</div>
                        <h2>
                          <a href="projects-detail">ABC Financial Bank</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/4.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Interior</div>
                        <h2>
                          <a href="projects-detail">B6-No.5 OLA Tower</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Tab */}
          <div className="p-tab" id="p-tab-4">
            <div className="project-carousel owl-theme owl-carousel">
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/1.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Residential</div>
                        <h2>
                          <a href="projects-detail">Cubic Villa</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/3.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Commercial</div>
                        <h2>
                          <a href="projects-detail">ABC Financial Bank</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/2.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Architecture</div>
                        <h2>
                          <a href="projects-detail">Culture House</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/4.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Interior</div>
                        <h2>
                          <a href="projects-detail">B6-No.5 OLA Tower</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/1.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Residential</div>
                        <h2>
                          <a href="projects-detail">Cubic Villa</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/3.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Commercial</div>
                        <h2>
                          <a href="projects-detail">ABC Financial Bank</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/2.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Architecture</div>
                        <h2>
                          <a href="projects-detail">Culture House</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block">
                <div className="inner-box">
                  <div className="image">
                    <img src="images/gallery/4.jpg" alt="" />
                    <div className="overlay-box">
                      <div className="content">
                        <div className="category">Interior</div>
                        <h2>
                          <a href="projects-detail">B6-No.5 OLA Tower</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Project Section */}
    {/* Services Section */}
    <section className="services-section">
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
                  <a href="projects-detail">
                    profressional and dedicate team
                  </a>
                </h5>
                <p>Building architectures with modern technology.</p>
                <div className="icon icofont-labour" />
                <a href="projects-detail" className="more">
                  more
                </a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <h5>
                  <a href="projects-detail">unique design</a>
                </h5>
                <p>Bring the beautifully for your house. Just enjoy!</p>
                <div className="icon icofont-ruler-compass-alt" />
                <a href="projects-detail" className="more">
                  more
                </a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <h5>
                  <a href="projects-detail">affordable and flexiable</a>
                </h5>
                <p>Bring nature in your house. Health is important</p>
                <div className="icon icofont-credit-card" />
                <a href="projects-detail" className="more">
                  more
                </a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <h5>
                  <a href="projects-detail">24/7 support</a>
                </h5>
                <p>Consulting solutions and make plan to renovation</p>
                <div className="icon icofont-live-support" />
                <a href="projects-detail" className="more">
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
    {/* Work Section */}
    <section
      className="work-section"
      style={{ backgroundImage: "url(images/background/1.jpg)" }}
    >
      <div className="auto-container">
        <div className="content">
          <div className="title">how we work</div>
          <h1>
            Easy &amp; Trusted <br /> Progress
          </h1>
          <p>
            We understand that you’re hiring us to actually listen, and more{" "}
            <br /> importantly, understand your vision, so that your home
            reflects your spirit and <br /> personality, not ours. Above all
            else, when the project is finished, <br /> we want you to LOVE WHERE
            YOU LIVE
          </p>
          <a href="#" className="pdf-file">
            <span className="icon icofont-file-pdf" />
            Download Offer [.PDF]
          </a>
          <a
            href="https://www.youtube.com/watch?v=kxPCFljwJws"
            className="lightbox-image video-box clearfix"
          >
            See How we work
            <br />
            <span className="fa fa-play">
              <i className="ripple" />
            </span>
          </a>
        </div>
      </div>
    </section>
    {/* End Work Section */}
    {/* Testimonial Section */}
    <section
      className="testimonial-section"
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
    {/* Sponsors Section */}
    <section className="sponsors-section">
      <div className="auto-container">
        <div className="carousel-outer">
          {/*Sponsors Slider*/}
          <ul className="sponsors-carousel owl-carousel owl-theme">
            <li>
              <div className="image-box">
                <a href="#">
                  <img src="images/clients/1.png" alt="" />
                </a>
              </div>
            </li>
            <li>
              <div className="image-box">
                <a href="#">
                  <img src="images/clients/2.png" alt="" />
                </a>
              </div>
            </li>
            <li>
              <div className="image-box">
                <a href="#">
                  <img src="images/clients/3.png" alt="" />
                </a>
              </div>
            </li>
            <li>
              <div className="image-box">
                <a href="#">
                  <img src="images/clients/4.png" alt="" />
                </a>
              </div>
            </li>
            <li>
              <div className="image-box">
                <a href="#">
                  <img src="images/clients/5.png" alt="" />
                </a>
              </div>
            </li>
            <li>
              <div className="image-box">
                <a href="#">
                  <img src="images/clients/1.png" alt="" />
                </a>
              </div>
            </li>
            <li>
              <div className="image-box">
                <a href="#">
                  <img src="images/clients/2.png" alt="" />
                </a>
              </div>
            </li>
            <li>
              <div className="image-box">
                <a href="#">
                  <img src="images/clients/3.png" alt="" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* End Sponsors Section */}
    {/* News Section */}
    <section className="news-section">
      <div className="outer-container">
        <div className="clearfix">
          {/* News Block */}
          <div className="news-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image">
                <a href="blog-detail">
                  <img src="images/resource/news-1.jpg" alt="" />
                </a>
              </div>
              <div className="lower-content">
                <ul className="info-list">
                  <li>Dec 23 ,2020</li>
                  <li>news</li>
                </ul>
                <h4>
                  <a href="blog-detail">The Way Of Building</a>
                </h4>
              </div>
            </div>
          </div>
          {/* News Block */}
          <div className="news-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image">
                <a href="blog-detail">
                  <img src="images/resource/news-2.jpg" alt="" />
                </a>
              </div>
              <div className="lower-content">
                <ul className="info-list">
                  <li>Dec 23 ,2020</li>
                  <li>inspiration</li>
                </ul>
                <h4>
                  <a href="blog-detail">
                    The Arch In Modern Architecture, Art &amp; Aesthetic More
                  </a>
                </h4>
              </div>
            </div>
          </div>
          {/* News Block */}
          <div className="news-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image">
                <a href="blog-detail">
                  <img src="images/resource/news-3.jpg" alt="" />
                </a>
              </div>
              <div className="lower-content">
                <ul className="info-list">
                  <li>Dec 23 ,2020</li>
                  <li>tips &amp; tricks</li>
                </ul>
                <h4>
                  <a href="blog-detail">
                    Spiral Stair, New Interior Design Trends 2020
                  </a>
                </h4>
              </div>
            </div>
          </div>
          {/* News Block */}
          <div className="news-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image">
                <a href="blog-detail">
                  <img src="images/resource/news-4.jpg" alt="" />
                </a>
              </div>
              <div className="lower-content">
                <ul className="info-list">
                  <li>Dec 23 ,2020</li>
                  <li>others</li>
                </ul>
                <h4>
                  <a href="blog-detail">Nordic Interior Style</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End News Section */}
    {/* Main Footer */}
    <footer className="main-footer">
      <div className="auto-container">
        <div className="logo">
          <a href="index">
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

export default Home
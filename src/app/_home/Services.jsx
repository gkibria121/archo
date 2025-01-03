import React from 'react'

const Services = () => {
  return (
    <div>
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
                  <a href="projects/">
                    profressional and dedicate team
                  </a>
                </h5>
                <p>Building architectures with modern technology.</p>
                <div className="icon icofont-labour" />
                <a href="projects/" className="more">
                  more
                </a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <h5>
                  <a href="projects/">unique design</a>
                </h5>
                <p>Bring the beautifully for your house. Just enjoy!</p>
                <div className="icon icofont-ruler-compass-alt" />
                <a href="projects/" className="more">
                  more
                </a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <h5>
                  <a href="projects/">affordable and flexiable</a>
                </h5>
                <p>Bring nature in your house. Health is important</p>
                <div className="icon icofont-credit-card" />
                <a href="projects/" className="more">
                  more
                </a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <h5>
                  <a href="projects/">24/7 support</a>
                </h5>
                <p>Consulting solutions and make plan to renovation</p>
                <div className="icon icofont-live-support" />
                <a href="projects/" className="more">
                  more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Services
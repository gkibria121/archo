import React from 'react'

const Testimonial = () => {
  return (
    <div>
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
    </div>
  )
}

export default Testimonial
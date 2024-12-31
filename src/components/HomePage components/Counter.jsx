import React from 'react'

const Counter = () => {
  return (
    <div>
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
    </div>
  )
}

export default Counter
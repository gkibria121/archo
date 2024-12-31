import React from 'react'

const Team = () => {
  return (
    <div>
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
    </div>
  )
}

export default Team
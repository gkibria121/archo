import React from 'react'

const Experience = () => {
  return (
    <div>
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
    </div>
  )
}

export default Experience
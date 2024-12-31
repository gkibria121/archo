import React from 'react'

const HowWeWork = () => {
  return (
    <div>
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
    </div>
  )
}

export default HowWeWork
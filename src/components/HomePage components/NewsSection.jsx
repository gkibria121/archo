import React from 'react'

const NewsSection = () => {
  return (
    <div>
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
    </div>
  )
}

export default NewsSection
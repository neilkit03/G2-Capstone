import React from "react";

const Portfolio = () => {
  return (
    <>
      <div id='portfolio'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Works</h2>
          </div>
          <div className='row'>
            <div className='portfolio-items'>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {" "}
                    <a
                      href='img/portfolio/01-large.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Two Storey House</h4>
                      </div>
                      <img
                        src='img/portfolio/01-small.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {" "}
                    <a
                      href='img/portfolio/02-large.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Kitchenette</h4>
                      </div>
                      <img
                        src='img/portfolio/02-small.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {" "}
                    <a
                      href='img/portfolio/03-large.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Galley</h4>
                      </div>
                      <img
                        src='img/portfolio/03-small.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {" "}
                    <a
                      href='img/portfolio/04-large.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Canopy</h4>
                      </div>
                      <img
                        src='img/portfolio/04-small.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {" "}
                    <a
                      href='img/portfolio/05-large.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Parkade & Entrance</h4>
                      </div>
                      <img
                        src='img/portfolio/05-small.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {" "}
                    <a
                      href='img/portfolio/06-large.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Single-family detached home</h4>
                      </div>
                      <img
                        src='img/portfolio/06-small.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {" "}
                    <a
                      href='img/portfolio/07-large.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Bathroom</h4>
                      </div>
                      <img
                        src='img/portfolio/07-small.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {" "}
                    <a
                      href='img/portfolio/08-large.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Scullery</h4>
                      </div>
                      <img
                        src='img/portfolio/08-small.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {" "}
                    <a
                      href='img/portfolio/09-large.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Cockloft</h4>
                      </div>
                      <img
                        src='img/portfolio/09-small.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

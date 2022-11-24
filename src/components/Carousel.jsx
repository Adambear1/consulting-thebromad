import React from 'react'

export default function Carousel() {
  return (
    <div id="introCarousel" className="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
      <ol className="carousel-indicators">
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" className="active"></li>
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="mask" id="carousel-mask-1">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white text-center">
                <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
                <h5 className="mb-4">Best & free guide of responsive web design</h5>
                <a className="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                  role="button" rel="nofollow" target="_blank">Start tutorial</a>
                <a className="btn btn-outline-light btn-lg m-2" href="https://mdbootstrap.com/docs/standard/"
                  target="_blank" role="button">Download MDB UI KIT</a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="mask" id="carousel-mask-2">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white text-center">
                <h2>You can place here any content</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="mask" id="carousel-mask-3">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white text-center">
                <h2>And cover it with any mask</h2>
                <a className="btn btn-outline-light btn-lg m-2"
                  href="https://mdbootstrap.com/docs/standard/content-styless/masks/" target="_blank" role="button">Learn
                  about masks</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

import React from 'react'

export default function AboutSection() {
  return (
    <section>
      <div className="row">
        <div className="col-md-6 gx-5 mb-4">
          <h1 id="about">About</h1>
          <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/new/slides/031.jpg" className="img-fluid"/>
            <a href="#!">
              <div className="mask" id="about-mask"></div>
            </a>
          </div>
        </div>
        <div className="col-md-6 gx-5 mb-4">
          <h4>
            <strong>Facilis consequatur eligendi</strong>
          </h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
            eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
            sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
          </p>
          <p>
            <strong>Doloremque vero ex debitis veritatis?</strong>
          </p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
            nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
            alias, unde optio accusantium soluta, iusto molestiae adipisci et?
          </p>
        </div>
      </div>
    </section>
  )
}

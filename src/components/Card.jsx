import React from 'react'

export default function Card({img, title, info}) {
  return (
    <div className="card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={img} className="img-fluid"/>
        <a href="#!">
          <div className="mask" styles="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
         {info}
        </p>
        {/* <a href="#!" className="btn btn-primary">Button</a> */}
      </div>
    </div>
  )
}

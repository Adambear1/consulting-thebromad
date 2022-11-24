import React from 'react'
import Icons from './Icons'
import Links from './Links'

function Navbar() {
  const icons = [
    {
      href: "",
      classes: "fab fa-youtube"
    }, {
      href: "",
      classes: "fab fa-facebook-f"
    }, {
      href: "",
      classes: "fab fa-twitter"
    }, {
      href: "",
      classes: "fab fa-github"
    },
  ]
  const links = [
    {
      href: "#home",
      name: "Home"
    }, {
      href: "#learnmore",
      name: "Learn More"
    }, {
      href: "#testimonials",
      name: "Testimonials"
    }
  ]
  return (
    <nav className="navbar navbar-expand-lg navbar-dark d-lg-block" id="navbar-main">
      <div className="container-fluid">
        <a className="navbar-brand nav-link" target="_blank" href="https://mdbootstrap.com/docs/standard/">
          <strong>MDB</strong>
        </a>
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
            links.map(({
              href,
              name
            }, index) => <Links key={index}
              href={href}
              name={name}/>)
          } </ul>
          <ul className="navbar-nav list-inline">
            {
            icons.map(({
              href,
              classes
            }, index) => <Icons key={index}
              href={href}
              classes={classes}/>)
          } </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

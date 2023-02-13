import React from 'react'

function Icons({href, classes}) {
  return (
    <li className="">
      <a className="nav-link"
        href={href}
        rel="nofollow"
        target="_blank" style={{color: "gray"}}>
        <i className={classes}></i>
      </a>
    </li>
  )
}

export default Icons

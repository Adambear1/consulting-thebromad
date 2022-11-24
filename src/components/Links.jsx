import React from 'react'

function Links({name, href}) {
  return (
    <li className="nav-item active">
      <a className="nav-link" aria-current="page" href={href}>{name}</a>
    </li>
  )
}

export default Links

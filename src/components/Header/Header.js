import React from "react";
import {Link} from "react-router-dom";
import './Header.scss';


export default function Header({display}) {
  return (
    <nav className='navigation navbar navbar-expand-sm fixed-top pb-3'>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link className="nav-link" to="/">Skills</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to="/projects">Projects</Link>
      </li>
      <li class="nav-item dropdown">
      <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
    <div className='hexagon-nav'><div class='hexagon-wrap'><div className='hexagon big-hex'>
    <div>{display.description}</div>
    </div></div></div>

  </nav>
  );
}


import React from "react";
import {Link} from "react-router-dom";
import './Header.scss';


export default function Header() {
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
    <div className='hexagon-nav'><div className='hexagon big-hex'>
    <div>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.</div>
    </div></div>

  </nav>
  );
}

import React from "react";
import {Link} from "react-router-dom";
import { Navbar,Nav, NavItem } from "react-bootstrap";
import './Header.scss';


export default function Header() {
  return (
    <Navbar variant='dark' fixed='top' className='navigation'>
    <Nav className="mr-auto">
        <NavItem><Link className="nav-link" to="/">Skills</Link></NavItem>
        <NavItem><Link className="nav-link" to="/projects">Projects</Link></NavItem>
        <NavItem><Link className="nav-link" to="/about">About</Link></NavItem>
    </Nav>
    <div className='hexagon-nav'><div className='hexagon big-hex'><div>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.</div></div></div>

  </Navbar>
  );
}

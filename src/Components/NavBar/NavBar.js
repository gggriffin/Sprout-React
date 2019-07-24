import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navBar">
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#login">Sign Up/Login</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="navLinks">
          <Nav>
            <Nav.Link href="/trending">
              Trending
              <i className="fas fa-fire" id="navIcon"></i>
            </Nav.Link>
            <Nav.Link href="/collaborate">
              Collaborate
              <i className="fas fa-book-open" id="navIcon"></i>
            </Nav.Link>
            <Nav.Link href="/projects">
              Projects
              <i className="fas fa-project-diagram" id="navIcon"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
import React from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import '../App.css';

const Header = () => {
  return (
    <header className="header-section">
      <Navbar expand="lg" variant="light">
        <Container>
          {/* Brand on the left */}
          <Navbar.Brand href="#home" className="brand-name"><img src="./images/mibo-logo.png" alt="Mibo" /></Navbar.Brand>

          {/* Toggler for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Centered Nav links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-wrapper mx-auto">
              <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#features" className="nav-link">Feature</Nav.Link>
              <Nav.Link href="#about" className="nav-link">About</Nav.Link>
              <Nav.Link href="#buy" className="nav-link">How To Buy</Nav.Link>
            </Nav>

            {/* CTA Button on the right */}
            <Button href='#buy' variant="primary" className="cta-btn">Buy Mibo</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
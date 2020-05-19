import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const Navigation = () => (
  <Navbar expand="md" sticky="bottom">
    <Navbar.Brand href="/">Ek Tuhi Charitable Society</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation

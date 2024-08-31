import React from 'react'
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
      <Navbar className='custom-nav'>
        <Container>
          <Navbar.Brand href="/" className='custom-pill' >My Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className='custom-pill'>Home</Nav.Link>
            <Nav.Link href="#features" className='custom-pill'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='custom-pill'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation
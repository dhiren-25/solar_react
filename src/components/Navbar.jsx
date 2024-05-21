import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navb = () => {
  return (
    <div>
       
       <Navbar bg="dark" data-bs-theme="dark" fixed='top' className='navbar navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret fixed-top'>
        <Container>
          <Navbar.Brand href="#home">Vidhyut Energy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>

          <Button variant="warning">Place Your Query</Button>

        </Container>
      </Navbar>
    </div>
  )
}

export default Navb

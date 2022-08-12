import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbar1() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className="d-flex justify-content-evenly text-white fst-italic fs-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#students">Students</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbar1
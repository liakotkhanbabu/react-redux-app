import React from "react"
import { Navbar, Container } from "react-bootstrap"

function Header() {
   return (
      <Navbar bg="light" expand="lg">
         <Container fluid>
            <Navbar.Brand>SpaceX</Navbar.Brand>
         </Container>
      </Navbar>
   )
}

export default Header

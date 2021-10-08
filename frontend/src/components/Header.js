import React from "react"
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap"

function Header() {
   return (
      <Navbar bg="light" expand="lg">
         <Container fluid>
            <Navbar.Brand href="#">SpaceX</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Form className="d-flex">
                  <FormControl
                     type="search"
                     placeholder="Search"
                     className="me-2"
                     aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
               </Form>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default Header

import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"

function BasicNavbar(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">CarsAlot</Navbar.Brand>
                <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/">Compare</Nav.Link>
                     <Nav.Link href="/">Timeline</Nav.Link>
                </Nav>
                   
            </Container>
        </Navbar>
    )
}
export default BasicNavbar;
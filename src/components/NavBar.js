import React from "react";
import "./NavBar.css";
import { Navbar, Nav, Button, FormControl, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const wrapper = <FontAwesomeIcon icon={faCoffee} size="sm" />;

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/Home">
        <h1 className="Cursive">
          Chai <div className="rotate">{wrapper}</div>
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/LogIn">Log In</Nav.Link>
          <Nav.Link href="/Products">Products</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link disabled href="/comingSoon">
            Coming Soon
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search..."
            className="mr-sm-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

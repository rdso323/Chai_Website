import React from "react";
import NavBar from "./NavBar";
import store from "./Store";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./Login.css";
import { faRemoveFormat } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function LogIn() {
  store.dispatch({ type: "ADD" });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  return (
    <div>
      <NavBar />
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlID="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            <Link to="/Home" style={{ color: "white", textDecoration: "none" }}>
              Log In
            </Link>
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LogIn;

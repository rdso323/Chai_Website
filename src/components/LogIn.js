import React from "react";
import NavBar from "./NavBar";
import store from "./Store";
import chaiBackground from "../images/chai_login_background.tiff"
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./Login.css";
import { faRemoveFormat } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



function LogIn() {
  store.dispatch({ type: "ADD" });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory()
  
  const firebaseConfig = {
    apiKey: "AIzaSyC1XgGS9aw1sio4FTeuXyeaEuwbXrSZ4bY",
    authDomain: "chai-website-rohan.firebaseapp.com",
    projectId: "chai-website-rohan",
    storageBucket: "chai-website-rohan.appspot.com",
    messagingSenderId: "1099002210953",
    appId: "1:1099002210953:web:e6745350dbb635b08d7458",
    measurementId: "G-4FC54PCXWZ"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function handleSubmit(event) {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        history.push('/Home')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage("Incorrect Password")
      });

    // if (password != "password"){
    //   setMessage("Incorrect Password")
    // }
    // else{ 
    //   history.push('/Home')
    // }
  }

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };


  return (
    <div>
      <NavBar />
      {/* <div className="background" style={{backgroundImage:`url(${chaiBackground})`}}> */}
        {/* <img className="backgroundImage" src={chaiBackground} alt="pic" /> */}
        <div className="Login" style={{backgroundImage:`url(${chaiBackground})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',
        height: '100vh', width: '100%'}}>
          <div className="form">
          <Form onSubmit={handleSubmit} style={{backgroundColor: 'rgb(240, 240, 240)'}}>
            <Form.Group size="lg" controlID="email" >
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
              Log In
            </Button>
            <p style={{color:"red"}}> {message} </p>
          </Form>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default LogIn;

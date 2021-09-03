import "./App.css";
import React, { useState, useEffect } from "react";
import Firebase from "./components/Firebase/Firebase";
import Login from "./components/Login/Login";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [oasswordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  //functions

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();

    Firebase.auth()
      .signInWtihEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-alreay-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    Firebase.auth().signOut();
  };

  const authListner = () => {
    Firebase.aut().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListner();
  }, []);

  return <div className="App">
    <Login email={email} setEmail={setEmail} password ={password} setPassword={setPassword}  />
  </div>;
}

export default App;

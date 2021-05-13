import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth, generateUserDocument, signInWithGoogle } from "../firebase/config"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <div className="full-page">
      <h1 className="sign-up-header">Sign Up</h1>
      <div className="full-page-inner">
        {error !== null && (
          <div className="error">
            {error}
          </div>
        )}
        <form className="">
          <h3 htmlFor="displayName" className="displayname">
            Display Name:
          </h3>
          <input
            type="text"
            className="display-input"
            name="displayName"
            value={displayName}
            placeholder="joeShlomo"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />
          <h3 htmlFor="userEmail" className="email">
            Email:
          </h3>
          <input
            type="email"
            className="email-input"
            name="userEmail"
            value={email}
            placeholder="ex. joe.shlomo@gmail.com"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          <h3 htmlFor="userPassword" className="password">
            Password:
          </h3>
          <input
            type="password"
            className="password-input"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          <button
            className="signup-button"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
        </form>
        <p className="or">or</p>
        <button
          className="google-sign-up"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </button>
        <p className="already-account">
          Already have an account?{" "}
          <Link to="/" className="sign-in-link">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
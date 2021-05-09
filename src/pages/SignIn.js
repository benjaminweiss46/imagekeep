import React, {useState} from "react";
import { Link } from "@reach/router";
import { auth} from "../firebase/config"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
          setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
          setEmail(value);
        }
        else if(name === 'userPassword'){
          setPassword(value);
        }
    };

  return (
    <div className="sign-in-holder">
      <h1 className="sign-in-header">ImageKeep</h1>
      <div className="sign-in">
        {error !== null && <div className = "error-message">{error}</div>}
        <form className="sign-in-info">
          <h3 htmlFor="userEmail" className="email">
            Email:
          </h3>
          <input
            type="email"
            className="email-input"
            name="userEmail"
            value = {email}
            placeholder="ex. joe.shlomo@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <h3 htmlFor="userPassword" className="password">
            Password:
          </h3>
          <input
            type="password"
            className="password-input"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button className="sign-in-button" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p className="or">or</p>
        <button
          className="sign-in-google-button">
          Sign in with Google
        </button>
        <p className="create-account">
          Don't have an account?{" "}
          <Link to="signUp" className="sign-up-page-link">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "PasswordReset" className="reset-password-link">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;
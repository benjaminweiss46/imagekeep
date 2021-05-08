import React from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ImageRepo from "./ImageRepo";
import PasswordReset from "./PasswordReset.js";
function Application() {
  const user = null;
  return (
        user ?
        <ImageRepo />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>

  );
}
export default Application;
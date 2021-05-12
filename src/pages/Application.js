import React, { useContext, userContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ImageRepo from "./ImageRepo";
import PasswordReset from "./PasswordReset.js";
import { UserContext } from "../providers/UserProvider"
function Application() {
  const user = useContext(UserContext);
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
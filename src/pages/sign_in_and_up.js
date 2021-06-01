import React from "react";
import SignIn from "../components/sign_in";
import SignUp from "../components/sign_up";
import "./styles/sign_in_and_up.scss";

const SignInAndUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndUp;

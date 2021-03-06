import React from "react";
import "./styles/fancy_button.scss";

const FancyButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default FancyButton;

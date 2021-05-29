import React from "react";
import {Link} from "react-router-dom";
import {auth} from "../firebase/firebase.utils";
import {ReactComponent as Logo} from "../assets/logo.svg";
import "./styles/header.scss";

const Header = ({currentUser}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/signin">
          {currentUser ? (
            <div className="options" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="options" to="/signin">
              SIGN IN
            </Link>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;

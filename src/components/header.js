import React from "react";
import {Link} from "react-router-dom";
import {auth} from "../firebase/firebase.utils";
import {connect} from "react-redux";
import {ReactComponent as Logo} from "../assets/logo.svg";
import CartIcon from "./cart_icon";
import Cart from "./cart_dropdown";
import "./styles/header.scss";

const Header = ({currentUser, hidden}) => {
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
        <CartIcon />
      </div>
      {hidden ? null : <Cart />}
    </div>
  );
};

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);

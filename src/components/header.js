import React from "react";
import {Link} from "react-router-dom";
import * as userActions from "../redux/user/user_actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {ReactComponent as Logo} from "../assets/logo.svg";
import CartIcon from "./cart_icon";
import Cart from "./cart_dropdown";
import "./styles/header.scss";

const Header = ({userActions, currentUser, hidden}) => {
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
        <Link className="option" to="/">
          {currentUser ? (
            <div className="options" onClick={() => userActions.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <div />
          )}
        </Link>
        <CartIcon />
      </div>
      {hidden ? null : <Cart />}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

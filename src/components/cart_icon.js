import React from "react";
import "./styles/cart_icon.scss";
import {connect} from "react-redux";
import {toggleCartHidden} from "../redux/cart/cart_actions";
import {selectCartItemsCount} from "../redux/cart/cart_selectors";

import {ReactComponent as ShoppingIcon} from "../assets/shopping-bag.svg";

const CartIcon = ({toggleCartHidden, cartCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  cartCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

import React from "react";
import {connect} from "react-redux";
import {clearItemFromCart} from "../redux/cart/cart_actions";
import "./styles/checkout_item.scss";

const CheckoutItem = ({cartItem, clearItem}) => {
  const {name, photos, price, quantity} = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={photos[0]} alt="item" />
      </div>
      <span className="name">{name.split("_").join(" ")}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);

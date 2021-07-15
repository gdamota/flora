import React from "react";
import "./styles/cart_item.scss";

const CartItem = ({item: {photos, price, name, quantity}}) => {
  return (
    <div className="cart-item">
      <img src={photos[0]} alt="item" />
      <div className="item-details">
        <span className="name">{name.split("_").join(" ")}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

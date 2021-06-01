import React from "react";
import FancyButton from "./fancy_button";
import {connect} from "react-redux";
import {addItem} from "../redux/cart/cart_actions";
import "./styles/shopping_item.scss";

const ShoppingItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
      <div className="collection=footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <FancyButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </FancyButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ShoppingItem);

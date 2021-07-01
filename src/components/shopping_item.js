import React from "react";
import FancyButton from "./fancy_button";
import {connect} from "react-redux";
import {addItem} from "../redux/cart/cart_actions";
import {withRouter} from "react-router-dom";
import "./styles/shopping_item.scss";

const ShoppingItem = ({item, addItem, history, routeName, match}) => {
  const {name, price, imageUrl, id} = item;
  const onClickFunc = match => {
    if (match.path === "/shop/:categoryId") {
      return history.push(`/shop/${id}`);
    } else {
      return history.push(`/shop/${routeName}/${id}`);
    }
  };
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + imageUrl})`}}
        onClick={onClickFunc}
      />
      <div className="collection=footer">
        <p className="name">{name.split("_").join(" ") + "  $" + price}</p>
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

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ShoppingItem)
);

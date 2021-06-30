import React from "react";
import FancyButton from "../components/fancy_button";
import {connect} from "react-redux";
import {selectItem} from "../redux/shop/shop_selector";
import {addItem} from "../redux/cart/cart_actions";
import "./styles/item.scss";

const ItemPage = ({item, addItem}) => {
  console.log(item);
  const {name, imageUrl, price, description} = item;
  return (
    <div className="item-page">
      <div className="item-header">
        <h2 className="title">{name}</h2>
        <img
          src={process.env.PUBLIC_URL + imageUrl}
          alt={name}
          width="500"
          height="500"
        />
        <div className="item-description">
          <p className="description">{description}</p>
          <p className="price">{"Price: $" + price}</p>
        </div>
      </div>
      <div className="checkout-button">
        <FancyButton inverted onClick={() => addItem(item)}>
          Add to Cart
        </FancyButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(state, ownProps.match.params)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPage);

import React, {useEffect} from "react";
import FancyButton from "../components/fancy_button";
import {connect} from "react-redux";
import {selectItem} from "../redux/shop/shop_selector";
import {addItem} from "../redux/cart/cart_actions";
import {bindActionCreators} from "redux";
import * as shopActions from "../redux/shop/shop_actions";
import ImageSlider from "../components/image_slider";

import "./styles/item.scss";

const ItemPage = ({item, shopActions, addItem, match}) => {
  const {name, imageUrl, price, description} = item;
  useEffect(
    () => {
      shopActions.getItem(match.params.itemId);
    },
    [shopActions, match.params.itemId]
  );

  const images = [
    {url: process.env.PUBLIC_URL + imageUrl},
    {url: process.env.PUBLIC_URL + imageUrl},
    {url: process.env.PUBLIC_URL + imageUrl}
  ];
  return (
    <div className="item-page">
      <div className="item-header">
        <h2 className="title">{name.split("_").join(" ")}</h2>
        <ImageSlider images={[process.env.PUBLIC_URL + imageUrl]} />
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
  addItem: item => dispatch(addItem(item)),
  shopActions: bindActionCreators(shopActions, dispatch)
});

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(state, ownProps.match.params)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPage);

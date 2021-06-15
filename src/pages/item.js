import React from "react";
import FancyButton from "../components/fancy_button";
import {connect} from "react-redux";
import {selectItem} from "../redux/shop/shop_selector";
import {addItem} from "../redux/cart/cart_actions";
// import "./styles/description.scss";

const ItemPage = ({item, addItem}) => {
  console.log(item);
  return (
    <div className="description">
      <h2>Item Page</h2>
      <p>item description</p>
      <p>reviews from people</p>
      <FancyButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </FancyButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);

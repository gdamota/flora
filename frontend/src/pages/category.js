import React from "react";
import {connect} from "react-redux";
import ShoppingItem from "../components/shopping_item";
import {selectCollection} from "../redux/shop/shop_selector";
import "./styles/category.scss";

const CategoryPage = ({collection}) => {
  const {title, items, routeName} = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <ShoppingItem key={item.id} item={item} routeName={routeName} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);

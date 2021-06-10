import React from "react";
import {Route} from "react-router-dom";
import CollectionsOverview from "../components/collections_overview";
import CategoryPage from "./category";

const Shop = ({match}) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default Shop;

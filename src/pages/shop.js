import React from "react";
import {Route} from "react-router-dom";
import CollectionsOverview from "../components/collections_overview";
import CategoryPage from "./category";
import ItemPage from "./item";

const Shop = ({match, directoryActions}) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:categoryId`}
        component={CategoryPage}
      />
      <Route path={`${match.path}/:categoryId/:itemId`} component={ItemPage} />
    </div>
  );
};

export default Shop;

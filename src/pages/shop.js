import React, {useEffect} from "react";
import {Route} from "react-router-dom";
import CollectionsOverview from "../components/collections_overview";
import CategoryPage from "./category";
import ItemPage from "./item";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as directoryActions from "../redux/directory/directory_actions";

const Shop = ({match, directoryActions}) => {
  useEffect(
    () => {
      directoryActions.getCategorys();
    },
    [directoryActions]
  );
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

function mapDispatchToProps(dispatch) {
  return {
    directoryActions: bindActionCreators(directoryActions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Shop);

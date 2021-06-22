import React from "react";
import Preview from "../components/preview";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopItems} from "../redux/shop/shop_selector";
import "./styles/collections_overview.scss";

const CollectionsOverview = ({collections}) => (
  <div className="collections-overview">
    {collections.map(({id, ...otherProps}) => (
      <Preview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems
});

export default connect(mapStateToProps)(CollectionsOverview);

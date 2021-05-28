import {Component} from "react";
import Preview from "../components/preview";
import SHOP_DATA from "./shop.data.js";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {items: SHOP_DATA};
  }

  render() {
    const {items} = this.state;
    return (
      <div className="shop-page">
        {items.map(({id, ...otherProps}) => (
          <Preview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;

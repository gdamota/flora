import {combineReducers} from "redux";
import userReducer from "./user/user_reducer";
import cartReducer from "./cart/cart_reducer";
import shopReducer from "./shop/shop_reducer";
import directoryReducer from "./directory/directory_reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

import {CartActionTypes} from "./cart_types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_HIDE_CART
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

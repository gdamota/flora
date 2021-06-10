import {CartActionTypes} from "./cart_types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_HIDE_CART
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

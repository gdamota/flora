import {ShopActionTypes} from "./shop_types";

const INITIAL_STATE = {
  collections: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.SET_CATEGORY:
      return {
        ...state,
        collections: action.payload
      };
    case ShopActionTypes.SET_PRODUCT:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;

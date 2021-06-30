import {ShopActionTypes} from "./shop_types";

const INITIAL_STATE = {
  collections: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.SET_PRODUCTS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;

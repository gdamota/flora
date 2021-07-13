import {ShopActionTypes} from "./shop_types";

const INITIAL_STATE = {
  item: {
    imageUrl: "",
    name: "",
    price: "",
    description: "",
    photos: []
  }
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.SET_PRODUCT:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;

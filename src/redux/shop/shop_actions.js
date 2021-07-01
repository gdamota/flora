import {API} from "aws-amplify";
import {getProduct} from "../../graphql/queries";
import {ShopActionTypes} from "./shop_types";

const COLLECTION_ID_MAP = {
  "fe1a274d-3460-4c3f-814c-6fd7a40c969d": "bouquets",
  "88cb9fb7-285b-495b-b9d4-2027c01f3d97": "boutonnieres",
  "d6f63ade-c560-477e-9989-85b1d204b50c": "bracelets",
  "2a64e1db-3ea1-4438-9e6f-51017517442f": "earrings",
  "cfa85a57-44c2-4e1f-a1ce-2c7d7f244e43": "wearables",
  "6c798218-1945-4a2b-86e4-49ddd65cb80e": "necklaces"
};

export function getItem(productID) {
  return async function(dispatch) {
    const response = await API.graphql({
      query: getProduct,
      variables: {id: productID}
    });
    const product = {
      ...response.data.getProduct,
      imageUrl: `/photos/${
        COLLECTION_ID_MAP[response.data.getProduct.categoryID]
      }/${response.data.getProduct.name.toLowerCase()}.jpg`
    };
    console.log(product);
    return dispatch({
      type: ShopActionTypes.SET_PRODUCT,
      payload: product
    });
  };
}

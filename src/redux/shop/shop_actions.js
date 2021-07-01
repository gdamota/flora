import {API, graphqlOperation} from "aws-amplify";
import {getCategory, getProduct} from "../../graphql/queries";
import {ShopActionTypes} from "./shop_types";

const COLLECTION_ID_MAP = {
  "fe1a274d-3460-4c3f-814c-6fd7a40c969d": "bouquets",
  "88cb9fb7-285b-495b-b9d4-2027c01f3d97": "boutonnieres",
  "d6f63ade-c560-477e-9989-85b1d204b50c": "bracelets",
  "2a64e1db-3ea1-4438-9e6f-51017517442f": "earrings"
};

// export function getAProduct(productID) {
//   return async function(dispatch, getState) {
//     const response = await API.graphql(graphqlOperation(getProduct(productID)));
//     const products = response.data.getProduct.items.map(item => ({
//       ...item,
//       imageUrl: `/photos/bouquets/${item.name.toLowerCase()}.jpg`
//     }));
//
//     return dispatch({
//       type: ShopActionTypes.SET_PRODUCTS,
//       payload: catalog
//     });
//   };
// }

export function getCat(categoryID) {
  return async function(dispatch, getState) {
    const response = await API.graphql(
      graphqlOperation(getCategory(COLLECTION_ID_MAP[categoryID]))
    );
    console.log(response);
    // const products = response.data.getCategory.items.map(item => ({
    //   ...item,
    //   imageUrl: `/photos/bouquets/${item.name.toLowerCase()}.jpg`
    // }));

    return dispatch({
      type: "SET_CATEGORY",
      payload: response.data.getCategory.items
    });
  };
}

const generateCatalog = (sections, products) => {
  return sections.map(section => ({
    ...section,
    items: products.filter(product => product.categoryID === section.id)
  }));
};

const mock = {
  id: 1,
  title: "Bouquets",
  routeName: "bouquets",
  items: [
    {
      id: 1,
      name: "Bouquet",
      imageUrl: "/photos/flower1.jpg",
      price: 25,
      description: "A super awesome some french word"
    },
    {
      id: 2,
      name: "Bouquet",
      imageUrl: "/photos/flower2.jpg",
      price: 20,
      description: "A super awesome some french word"
    },
    {
      id: 3,
      name: "Bouquet",
      imageUrl: "/photos/flower3.jpg",
      price: 20,
      description: "A super awesome some french word"
    },
    {
      id: 4,
      name: "Bouquet",
      imageUrl: "/photos/flower4.jpg",
      price: 20,
      description: "A super awesome some french word"
    },
    {
      id: 5,
      name: "Bouquet",
      imageUrl: "/photos/flower5.jpg",
      price: 20,
      description: "A super awesome some french word"
    }
  ]
};

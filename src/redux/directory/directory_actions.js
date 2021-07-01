import {API, graphqlOperation} from "aws-amplify";
import {listCategorys, listProducts} from "../../graphql/queries";
import {DirectoryActionTypes} from "./directory_types";

const COLLECTION_ID_MAP = {
  "fe1a274d-3460-4c3f-814c-6fd7a40c969d": "bouquets",
  "88cb9fb7-285b-495b-b9d4-2027c01f3d97": "boutonnieres",
  "d6f63ade-c560-477e-9989-85b1d204b50c": "bracelets",
  "2a64e1db-3ea1-4438-9e6f-51017517442f": "earrings",
  "cfa85a57-44c2-4e1f-a1ce-2c7d7f244e43": "wearables",
  "6c798218-1945-4a2b-86e4-49ddd65cb80e": "necklaces"
};

export function getCategorys() {
  return async function(dispatch) {
    const cat_response = await API.graphql(graphqlOperation(listCategorys));
    const categorys = cat_response.data.listCategorys.items.map(category => ({
      ...category,
      linkUrl: `shop/${category.title.toLowerCase()}`,
      routeName: category.title.toLowerCase(),
      imageUrl: `/photos/${category.title.toLowerCase()}.jpg`
    }));
    const response = await API.graphql(graphqlOperation(listProducts));
    const products = response.data.listProducts.items.map(item => ({
      ...item,
      imageUrl: `/photos/${
        COLLECTION_ID_MAP[item.categoryID]
      }/${item.name.toLowerCase()}.jpg`
    }));

    const catalog = generateCatalog(categorys, products);
    console.log(catalog);
    return dispatch({
      type: DirectoryActionTypes.SET_CATEGORYS,
      payload: catalog
    });
  };
}

const generateCatalog = (sections, products) => {
  return sections.map(section => ({
    ...section,
    items: products.filter(product => product.categoryID === section.id)
  }));
};

import {API, graphqlOperation} from "aws-amplify";
import {listCategorys, listProducts} from "../../graphql/queries";
import {DirectoryActionTypes} from "./directory_types";

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
    const catalog = generateCatalog(
      categorys,
      response.data.listProducts.items
    );
    return dispatch({
      type: DirectoryActionTypes.SET_CATEGORYS,
      payload: catalog
    });
  };
}

const generateCatalog = (sections, products) => {
  return sections.map(section => ({
    ...section,
    items: products.filter(
      product => (product.categoryID === section.id) & (product.quantity > 0)
    )
  }));
};

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
      imageUrl: `https://floraphotos145849-dev.s3.amazonaws.com/public/photos/${category.title.toLowerCase()}.jpg`
    }));
    categorys.sort(function(a, b) {
      return b.title.localeCompare(a.title);
    });
    const response = await await API.graphql({
      query: listProducts,
      variables: {limit: 10000}
    });
    console.log(response.data.listProducts);
    const catalog = generateCatalog(
      categorys,
      response.data.listProducts.items
    );
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
    items: products
      .filter(
        product => (product.categoryID === section.id) & (product.quantity > 0)
      )
      .map(item => {
        return {
          ...item,
          photos: item.photos.map(url => {
            return (
              "https://floraphotos145849-dev.s3.amazonaws.com/public" + url
            );
          })
        };
      })
  }));
};

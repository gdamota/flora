import {API, graphqlOperation} from "aws-amplify";
import {listProducts} from "../../graphql/queries";
import {ShopActionTypes} from "./shop_types";

export function getProducts() {
  return async function(dispatch, getState) {
    const response = await API.graphql(graphqlOperation(listProducts));
    const products = response.data.listProducts.items.map(item => ({
      ...item,
      imageUrl: `/photos/bouquets/${item.name.toLowerCase()}.jpg`
    }));

    const catalog = generateCatalog(getState().directory.sections, products);
    return dispatch({
      type: ShopActionTypes.SET_PRODUCTS,
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

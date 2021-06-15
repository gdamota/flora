import {createSelector} from "reselect";

const COLLECTION_ID_MAP = {
  blocks: 1,
  towels: 2,
  mats: 3,
  bands: 4,
  accessories: 5
};

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopItems],
    collections =>
      collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
  );

export const selectItem = (state, urlParams) => {
  return state.shop.collections
    .find(
      collection => collection.id === COLLECTION_ID_MAP[urlParams.categoryId]
    )
    .items.find(({id}) => id === parseInt(urlParams.itemId));
};

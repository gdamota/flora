import {createSelector} from "reselect";

const COLLECTION_ID_MAP = {
  bouquets: "fe1a274d-3460-4c3f-814c-6fd7a40c969d",
  boutonnieres: "88cb9fb7-285b-495b-b9d4-2027c01f3d97",
  bracelets: "d6f63ade-c560-477e-9989-85b1d204b50c",
  earrings: "2a64e1db-3ea1-4438-9e6f-51017517442f",
  wear: 5
};

const selectShop = state => state.directory;

export const selectShopItems = createSelector(
  [selectShop],
  directory => directory.sections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopItems],
    sections =>
      sections.find(
        section => section.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
  );

export const selectItem = (state, urlParams) => {
  return state.directory.sections
    .find(section => section.id === COLLECTION_ID_MAP[urlParams.categoryId])
    .items.find(({id}) => id === urlParams.itemId);
};

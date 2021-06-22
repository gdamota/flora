const INITIAL_STATE = {
  sections: [
    {
      title: "Bouquets",
      imageUrl: "/photos/flower1.jpg",
      id: 1,
      linkUrl: "shop/blocks"
    },
    {
      title: "Necklaces",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2036/8849/products/effy-necklace-yczbx94dd4.jpg?v=1552578988",
      id: 2,
      linkUrl: "shop/towels"
    },
    {
      title: "Bracelets",
      imageUrl:
        "https://i.etsystatic.com/13266670/r/il/16bb1b/1151970005/il_570xN.1151970005_auwy.jpg",
      id: 3,
      linkUrl: "shop/accessories"
    },
    {
      title: "Earings",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51VDK6afYGL._AC_UY695_.jpg",
      id: 4,
      size: "large",
      linkUrl: "shop/mats"
    },
    {
      title: "Flowers to Wear",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61brlyX6EzL._SY355_.jpg",
      id: 5,
      size: "large",
      linkUrl: "shop/bands"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

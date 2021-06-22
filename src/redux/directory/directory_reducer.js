const INITIAL_STATE = {
  sections: [
    {
      title: "BOUQUETS",
      imageUrl: "/photos/flower1.jpg",
      id: 1,
      linkUrl: "shop/blocks"
    },
    {
      title: "Towels",
      imageUrl:
        "https://www.ippinka.com/wp-content/uploads/2018/10/charcoal-yoga-towel-03.jpg",
      id: 2,
      linkUrl: "shop/towels"
    },
    {
      title: "Accessories",
      imageUrl:
        "https://i.etsystatic.com/13266670/r/il/16bb1b/1151970005/il_570xN.1151970005_auwy.jpg",
      id: 3,
      linkUrl: "shop/accessories"
    },
    {
      title: "Yoga Mats",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRbF_7c1L08H__8IXnMmfEIs_WgG8_ocjpJA&usqp=CAU",
      id: 4,
      size: "large",
      linkUrl: "shop/mats"
    },
    {
      title: "Resistance Bands",
      imageUrl:
        "http://cdn.shopify.com/s/files/1/1177/8032/products/setof4_grande.png?v=1586992520",
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

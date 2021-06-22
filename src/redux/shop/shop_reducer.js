const INITIAL_STATE = {
  collections: [
    {
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
    },
    {
      id: 2,
      title: "Necklaces",
      routeName: "necklaces",
      items: [
        {
          id: 6,
          name: "Blue Towel",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/51EDliuZmoL._AC_SX466_.jpg",
          price: 17,
          description: "A super awesome blue yoga towel"
        },
        {
          id: 7,
          name: "Black Towel",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/1728/2157/products/05-63519_GAIAM-NO-SLIP-YOGA-MAT-TOWEL-GRANITE_A.jpg?v=1615835569",
          price: 15,
          description: "A super awesome black yoga towel"
        },
        {
          id: 8,
          name: "Red Towel",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/91vG7vN2aPL._AC_SL1500_.jpg",
          price: 17,
          description: "A super awesome red yoga towel"
        },
        {
          id: 9,
          name: "Grey Towel",
          imageUrl:
            "http://cdn.shopify.com/s/files/1/1068/4930/products/shandali-sticky-yoga-towel_700x550_grande.jpg?v=1452752128",
          price: 15,
          description: "A super awesome grey yoga towel"
        },
        {
          id: 10,
          name: "Green Towel",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54flQy5dHOSu5-jGs5tyC7nLSd8tlP5VoSA&usqp=CAU",
          price: 17,
          description: "A super awesome green yoga towel"
        }
      ]
    },
    {
      id: 3,
      title: "Bracelets",
      routeName: "bracelets",
      items: [
        {
          id: 11,
          name: "Blue Yoga Mat",
          imageUrl:
            "https://m.media-amazon.com/images/I/81xTckVQwgL._AC_SY355_.jpg",
          price: 25,
          description: "A super awesome blue yoga mat"
        },
        {
          id: 12,
          name: "Black Yoga Mat",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/61rO%2BhiwlOL._AC_SY550_.jpg",
          price: 18,
          description: "A super awesome black yoga mat"
        },
        {
          id: 13,
          name: "Red Yoga Mat",
          imageUrl:
            "https://target.scene7.com/is/image/Target/GUEST_ba6075f3-4424-43ce-8a03-24c8d78beaed",
          price: 35,
          description: "A super awesome red yoga mat"
        },
        {
          id: 14,
          name: "Green Yoga Mat",
          imageUrl:
            "https://www.home-fit.com/sites/default/files/jasmine-yoga-mat-neon-green-lrg_0.jpg",
          price: 25,
          description: "A super awesome green yoga mat"
        }
      ]
    },
    {
      id: 4,
      title: "Earings",
      routeName: "earings",
      items: [
        {
          id: 15,
          name: "Blue Band",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/41R-4hitUsL._AC_SX425_.jpg",
          price: 25,
          description: "A super awesome blue resistance band"
        },
        {
          id: 16,
          name: "Black Band",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5QXIUvbASmz_WpnakQ-0ZGE0yMlIJk-vnO-AllzIrlxHLgAgRnNtM_BpKvoQMqywZnM&usqp=CAU",
          price: 18,
          description: "A super awesome black resistance band"
        },
        {
          id: 17,
          name: "Red Band",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3KSW4z2I6JYUkpnd1QB4H6po1KGaaOGEBkA&usqp=CAU",
          price: 35,
          description: "A super awesome red resistance band"
        },
        {
          id: 18,
          name: "Yellow Band",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/59da6fed017db2e1bf1170b8/1615292441254-5U43G1M65V1PXQNBEE2Z/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/PSCbands-51.jpg?format=1000w",
          price: 25,
          description: "A super awesome yellow resistance band"
        }
      ]
    },
    {
      id: 5,
      title: "Flowers to Wear",
      routeName: "wear",
      items: [
        {
          id: 19,
          name: "Black and Blue Bead Braclet",
          imageUrl:
            "https://passportocean.com/wp-content/uploads/2018/09/ocean-bead-bracelet.jpg",
          price: 125,
          description: "high quality braclet"
        },
        {
          id: 20,
          name: "Marbel Bead Braclet",
          imageUrl:
            "https://cdn11.bigcommerce.com/s-ibcgn58hrf/images/stencil/1280x1280/products/201/601/whitwhowlitemarble10mm-2__50201.1528088875.jpg?c=2",
          price: 90,
          description: "high quality braclet"
        },
        {
          id: 21,
          name: "Glass Bead Braclet",
          imageUrl:
            "https://cdn11.bigcommerce.com/s-7bde5/images/stencil/1280x1280/products/1894/5588/SECRET_LIMITED_EDITION_BRACELET__74096.1572883461.png?c=2",
          price: 90,
          description: "high quality braclet"
        },
        {
          id: 22,
          name: "Red Bead Braclet",
          imageUrl:
            "https://jadejewelrystore.com/store/images/a657-chinese-red-jade-bead-bracelet.jpg",
          price: 165,
          description: "high quality braclet"
        }
      ]
    }
  ]
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;

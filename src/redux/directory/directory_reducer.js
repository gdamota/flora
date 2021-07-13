import {DirectoryActionTypes} from "./directory_types";

const INITIAL_STATE = {
  sections: [
    {
      id: "88cb9fb7-285b-495b-b9d4-2027c01f3d97",
      title: "Boutonnieres",
      routeName: "boutonnieres",
      items: [
        {
          id: "",
          name: "",
          photos: [],
          price: "",
          description: ""
        }
      ]
    },
    {
      id: "d6f63ade-c560-477e-9989-85b1d204b50c",
      title: "Bracelets",
      routeName: "bracelets",
      items: [
        {
          id: "",
          name: "",
          photos: [],
          price: "",
          description: ""
        }
      ]
    },
    {
      id: "cfa85a57-44c2-4e1f-a1ce-2c7d7f244e43",
      title: "Wearables",
      routeName: "wearables",
      items: [
        {
          id: "",
          name: "",
          photos: [],
          price: "",
          description: ""
        }
      ]
    },
    {
      id: "6c798218-1945-4a2b-86e4-49ddd65cb80e",
      title: "Necklaces",
      routeName: "necklaces",
      items: [
        {
          id: "",
          name: "",
          photos: [],
          price: "",
          description: ""
        }
      ]
    },
    {
      id: "2a64e1db-3ea1-4438-9e6f-51017517442f",
      title: "Earrings",
      routeName: "earrings",
      items: [
        {
          id: "",
          name: "",
          photos: [],
          price: "",
          description: ""
        }
      ]
    },
    {
      id: "fe1a274d-3460-4c3f-814c-6fd7a40c969d",
      title: "Bouquets",
      routeName: "bouquets",
      items: [
        {
          id: "",
          name: "",
          photos: [],
          price: "",
          description: ""
        }
      ]
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DirectoryActionTypes.SET_CATEGORYS:
      return {
        ...state,
        sections: action.payload
      };
    default:
      return state;
  }
};

export default directoryReducer;

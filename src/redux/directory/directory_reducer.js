import {DirectoryActionTypes} from "./directory_types";

const INITIAL_STATE = {
  sections: []
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

import {UserActionTypes} from "./user_types";
import {Auth} from "aws-amplify";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export function getCurrentUser() {
  return async function(dispatch) {
    let user = await Auth.currentUserInfo();
    if (user === null) {
      user = {attributes: {email: null}};
    }
    return dispatch({
      type: UserActionTypes.SET_CURRENT_USER,
      payload: user
    });
  };
}

export function signOut() {
  return async function(dispatch) {
    await Auth.signOut();
    return dispatch({
      type: UserActionTypes.SET_CURRENT_USER,
      payload: {attributes: {email: null}}
    });
  };
}

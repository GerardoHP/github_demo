import * as actions from './actionTypes';

/**
 * Add a user to the users store.
 * @param {*} user The user to add to the store
 */
export function AddUser(user) {
  return function(dispatch) {
    dispatch(AddUserSuccess(user));
  };
}

export function AddUserSuccess(user) {
  return { type: actions.addUser, user };
}

import * as actions from '../actions/actionTypes';

export default function users(state = [], action) {
  switch (action.type) {
    case actions.addUser:
      return [...state, { ...action.user }];
    default:
      return state;
  }
}

import { GET_ALL_USERS } from "../actionTypes";

import { GET_ALL_USERS } from '../actionTypes'

export const allUsersReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return [...state, action.payload];

    default:
      return state;
  }
}

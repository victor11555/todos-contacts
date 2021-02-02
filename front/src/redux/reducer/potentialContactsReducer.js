import { GET_POTENTIAL_CONTACTS } from '../actionTypes';

export const potentialContactsReducer = (state=[], action) => {
  switch (action.type) {
    case GET_POTENTIAL_CONTACTS:
      
      return [...state, ...action.payload.users];

    default:
      return state;
  }
}

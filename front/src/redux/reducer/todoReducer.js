import { ADD_TODO } from '../actionTypes';

export function todoReducer(state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      
      return [...state, ...action.payload.user.todos]

    default:
      return state;
  }

}

import { ADD_TODO, EDIT_TODO } from '../actionTypes'

export function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:

      return [...state, ...action.payload]

    case EDIT_TODO:
      
    default:
      return state;

  }
}

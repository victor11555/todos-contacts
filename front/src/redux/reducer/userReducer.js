import { AUTH_FAILURE, AUTH_SUCCESS, ADD_TODO } from "../actionTypes";

export function userReducer(state = { user: {}, isLogged: false }, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, user: action.payload, isLogged: true };

    case AUTH_FAILURE:
      return { ...state, user: {}, isLogged: false };

    case ADD_TODO:
      let user = {...state.user, todos: [...state.user.todos, action.payload]}    
        return {...state, ...user};

    default:
      return state;
  }
}

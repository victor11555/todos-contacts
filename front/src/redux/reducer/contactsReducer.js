import {ADD_CONTACT, GET_CONTACT, EDIT_CONTACT, DELETE_CONTACT} from '../actionTypes';

export function contactsReducer(state = [], action) {
    switch (action.type) {
        case ADD_CONTACT:

            return [...state,  ...action.payload]
        case EDIT_CONTACT:

            return action.payload;
        case DELETE_CONTACT:

            return action.payload;
        case GET_CONTACT:
            
            return action.payload;
        default:
            return state;
    }
}

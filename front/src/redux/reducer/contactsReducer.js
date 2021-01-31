import {ADD_CONTACT} from '../actionTypes';
import {EDIT_CONTACT} from '../actionTypes';
import {DELETE_CONTACT} from '../actionTypes';
import {GET_CONTACT} from '../actionTypes';


export function contactsReducer(state = [], action) {
    switch (action.type) {
        case ADD_CONTACT:

            return action.payload;
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

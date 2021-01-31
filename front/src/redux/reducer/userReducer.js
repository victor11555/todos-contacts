import {SIGN_UP} from '../actionTypes';
import {LOG_IN} from '../actionTypes';


export function userReducer(state = [], action) {
    switch (action.type) {
        case SIGN_UP:

            return action.payload;
        case LOG_IN:

            return action.payload;
        default:
            return state;
    }
}

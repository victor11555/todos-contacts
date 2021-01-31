import {AUTH_SUCCESS, SIGN_UP} from '../actionTypes';
import {LOG_IN} from '../actionTypes';


export function userReducer(state = {}, action) {
    switch (action.type) {
        case AUTH_SUCCESS:

            return {...state,state:action.payload.user};
        case LOG_IN:

            return action.payload;

        default:
            return state;
    }
}

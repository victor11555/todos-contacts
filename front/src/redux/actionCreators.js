import {AUTH_FAILURE, AUTH_SUCCESS} from "./actionTypes";

import {useDispatch} from 'react-redux'


export const signUpAc = ({email, password, name, phone}) => {

    return (dispatch) => {
        fetch('http://localhost:4000/auth/signup',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email.value, password: password.value, name: name.value, phone: phone.value
                })
            })
            .then(res => res.json())
            .then(user => {
                if (user.success) {
                  localStorage.setItem('token',JSON.stringify(user.token))
                }
                dispatch(addUserFailure(user))
            })
    }
}

export const addUserSuccess=(payload)=>{
    return {
        type: AUTH_SUCCESS,
        payload
    }
}

export const addUserFailure=(payload)=>{
    return {
        type: AUTH_FAILURE,
        payload
    }
}


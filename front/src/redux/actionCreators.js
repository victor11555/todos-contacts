import { ADD_TODO, AUTH_FAILURE, AUTH_SUCCESS, GET_ALL_USERS } from "./actionTypes";
import { ADD_CONTACT_URL, ADD_TODO_URL, GET_PROFILE_URL, LOGIN_URL, SIGN_UP_URL, ALL_USERS_URL } from "../utils/urls";

const token = JSON.parse(localStorage.getItem("jwt"));

export const getProfileAC = () => {
    return (dispatch) => {
        if (token) {
            fetch(GET_PROFILE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
            })
                .then((res) => res.json())
                .then((user) => {
                    if (user.success) {
                        dispatch(getProfileSuccess(user.user));
                    } else {
                        localStorage.removeItem("jwt");
                        dispatch(getProfileFailure());
                    }
                });
        }
    };
};

export const addContactAc = ({ contactId }) => {
    return (dispatch) => {
        fetch(ADD_CONTACT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, contactId }),
        })
            .then((res) => res.json())
            .then((user) => {
                if (user.success) {
                    //Все ок
                    dispatch(getProfileSuccess(user.user))
                } else {
                    window.alert("User is not added");
                }
            });
    };
};

export const signUpAc = ({ email, password, name, phone }) => {
    return (dispatch) => {
        fetch(SIGN_UP_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
                name: name.value,
                phone: phone.value,
            }),
        })
            .then((res) => res.json())
            .then((user) => {
                if (user.success) {
                    localStorage.setItem("jwt", JSON.stringify(user.token));
                    dispatch(getProfileSuccess(user.user))
                } else {
                    window.alert("User is not created");
                } //Будет логика с user.failure обрабатывать ошибки, все дела :))
            });
    };
};

export const logInAc = ({ email, password }) => {
    return (dispatch) => {
        fetch(LOGIN_URL, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }),
        })
            .then((res) => res.json())
            .then((user) => {
                if (user.success) {
                    console.log(user.token);
                    localStorage.setItem("jwt", JSON.stringify(user.token));
                    dispatch(getProfileSuccess(user.user))
                } else {
                    window.alert("Auth not succeed");
                }
            });
    };
};

export const addToDoAc = ({ withContact, contactId, todo }) => {
    return (dispatch) => {
        fetch(ADD_TODO_URL, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                withContact,
                token,
                contactId,
                body: todo.value
            })
        })
            .then(res => res.json())
            .then((user) => {
                if (user.success) {
                    dispatch(getProfileSuccess(user.user))
                } else {
                    window.alert("Add todo not succeed");
                }
            });
    }
}

export const getProfileSuccess = (payload) => {
    return {
        type: AUTH_SUCCESS,
        payload,
    };
};

export const getProfileFailure = () => {
    localStorage.removeItem("jwt");
    return {
        type: AUTH_FAILURE,
    };
};

export const addToDo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const allUsersAC = () => {
    return (dispatch) => {
        fetch(ALL_USERS_URL)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    dispatch(allUsers(data.users))
                } else {
                    window.alert(data.message);
                }
            });
    };
}

export const allUsers = (payload) => {
    return {
        type: GET_ALL_USERS,
        payload
    }
}

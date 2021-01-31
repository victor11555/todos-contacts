import React, {useState} from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm'
import SignupForm from '../../Components/SignupForm/SignupForm'

function LoginPage() {
    const [state, setState] = useState(false)
    const loginStateHandler = (e) => {
        e.preventDefault()
        setState(!state)
    }
    return (
        <>
            {state ? <SignupForm setState={loginStateHandler}/> : <LoginForm setState={loginStateHandler}/>}
        </>
    )
}

export default LoginPage;

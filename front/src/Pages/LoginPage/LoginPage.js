import React, {useState} from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm'
import SignupForm from '../../Components/SignupForm/SignupForm'

function LoginPage() {
    const [state, setState] = useState(false)

    return (
        <>
            {state ? <SignupForm/> : <LoginForm/>}
        </>
    )
}
export default LoginPage;

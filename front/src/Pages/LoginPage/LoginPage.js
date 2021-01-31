import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import LoginForm from '../../Components/LoginForm/LoginForm'
import SignupForm from '../../Components/SignupForm/SignupForm'

function LoginPage() {
    const [state, setState] = useState(false)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchGetUsersAC())
    // }, [dispatch])
    //
    // const loginTogleHandler = () => {
    //     setState(!state)
    // }

    return (
        <>
            {/*{state ? <SignUpForm loginTogleHandler={loginTogleHandler}/> : <LoginForm loginTogleHandler={loginTogleHandler}/>}*/}
            {state ? <SignupForm/> : <LoginForm/>}
        </>
    )
}
export default LoginPage;

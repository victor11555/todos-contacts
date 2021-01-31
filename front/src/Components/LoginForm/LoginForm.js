import React from 'react';
import {Button, Container, Form} from 'react-bootstrap'
import {useDispatch} from "react-redux";
import { logInAc } from '../../redux/actionCreators';
import NavBar from "../NavBar/NavBar";

function LoginForm({setState}) {
  const dispatch = useDispatch()
  const loginHandler =(e)=> {
    e.preventDefault()
    const {email, password} = e.target
    dispatch(logInAc({email, password}))
  }
    return (
        <Container >
            <Form onSubmit={loginHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button onClick={setState} variant="primary" type="submit">
                    Don't have an account
                </Button>
            </Form>
        </Container>
    );
}

export default LoginForm;

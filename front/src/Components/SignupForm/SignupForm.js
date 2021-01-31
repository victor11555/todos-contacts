import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {signUpAc} from "../../redux/actionCreators";



function SignupForm({setState}) {
    const dispatch = useDispatch()
    const handleForm=(e)=>{
        e.preventDefault()
        const{email, name, password, phone} = e.target
        dispatch(signUpAc({email, password, name, phone}))
    }
    return (
        <Container >
            <Form onSubmit={handleForm}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name={'email'} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name={'password'} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name={'name'} type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control name={'phone'} type="tel" placeholder="Phone" />
                </Form.Group>
                <Button  variant="primary" type="submit">
                    Sign Up
                </Button>
                <Button onClick={setState} variant="primary" type="submit">
                    Already have an account?
                </Button>
            </Form>
        </Container>
    );
}

export default SignupForm;

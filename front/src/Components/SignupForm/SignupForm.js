import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import NavBar from "../NavBar/NavBar";

function SignupForm({setState}) {
    return (
        <Container >
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="tel" placeholder="Phone" />
                </Form.Group>
                <Button variant="primary" type="submit">
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

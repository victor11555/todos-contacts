import React, { useEffect } from 'react';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import Select from 'react-dropdown-select'
import { useDispatch, useSelector } from "react-redux";
import Userlist from "../../UserList/Userlist";
import { addContactAc, addToDoAc, getProfileAC, allUsersAC, getPotencialContactsAC } from "../../redux/actionCreators";

function ContentPage() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getProfileAC())
        dispatch(allUsersAC())
        dispatch(getPotencialContactsAC())
    }, [])

    const user = useSelector(state => state.user)
    const allUsers = useSelector(state => state.allUsers)
    const potencialUser = useSelector(state => state.potentialContacts)
    
    let values = []
    let values2 = []
    useEffect(() => {
        if (user.isLogged) {
            user.user.contacts.map(el => {
                values.push({ label: `${el.name} : ${el.phone}`, value: el._id })
            })
        }
        if (allUsers) {
            allUsers.map(el => {
                values2.push({ label: `${el.name} : ${el.phone}`, value: el._id })
            })
        }
    }, [user.isLogged, user.user.contacts, allUsers, potencialUser])

    const handleSubmitAddContact = (e) => {
        e.preventDefault()
        const { contacts } = e.target
        let contactId = values2.filter(el => el.label == contacts.value)
        dispatch(addContactAc({ contactId }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const { number, todo } = e.target
        let value = number.value.split(': ');
        let contact = user.user.contacts.filter((el) => value[0] === el.name && value[1] === el.phone)[0]
        if (!contact) {
            dispatch(addToDoAc({ withContact: false, contactId: '', todo }))
        }
        else {
            dispatch(addToDoAc({ withContact: true, contactId: contact._id, todo }))

        }
    }

    return (

        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmitAddContact}>
                            <Form.Group align={'center'}>
                                <Form.Label >Найти контакт по имени</Form.Label>
                                <Select name={'contacts'}
                                    options={values2}
                                    closeOnSelect={true}
                                        onChange={(values2)=>console.log(values2)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="outline-info" size={'sm'} block type="submit">
                                    Add contact
                            </Button>
                            </Form.Group>
                        </Form>
                        {potencialUser && <Userlist potentialContacts={potencialUser} />}
                    </Col>
                    <Col xs={5}>
                        <Form align={'center'} onSubmit={handleSubmit}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Enter your todo</Form.Label>
                                <Form.Control name={'todo'} type="text" placeholder="Write your todo here" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select contact</Form.Label>
                                <Select name={'number'}
                                    options={values}
                                    closeOnSelect={true}
                                />
                            </Form.Group>
                            <Button variant="outline-info" size={'sm'} block type="submit">
                                Add to do
                            </Button>
                        </Form>
                        <ListGroup style={{ margin: '2rem' }} align={'center'}>
                            {user.isLogged && user.user.todos.map(el => {
                                return <ListGroup.Item>{el.body}</ListGroup.Item>
                            })}
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup align={'center'}>
                            <ListGroup.Item>Test todo </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ContentPage;

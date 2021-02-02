import React, {useEffect} from 'react';
import {Button, Col, Container, Form, ListGroup, Row} from 'react-bootstrap'
import Select from 'react-dropdown-select'
import {useDispatch, useSelector} from "react-redux";
import Userlist from "../../UserList/Userlist";
import {getProfileAC} from "../../redux/actionCreators";

function ContentPage(props) {
const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProfileAC())
    }, [])

    const user= useSelector(state => state.user)
    let values = []
    useEffect(()=>{
        if(user.isLogged) {
            user.user.contacts.map(el => {
                values.push({label: el.name, value: el.phone})
            })
        }
    }, [user.isLogged])

    const handleSubmit = (e) => {
            e.preventDefault()
            const {number, todo} = e.target
            console.log(number.value, todo.value)
            //Здесь логика диспатча для добавления тудухи в базу!
        }
    return (

        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Userlist/>
                    </Col>
                    <Col xs={5}>
                        <Form align={'center'} onSubmit={handleSubmit}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Enter your todo</Form.Label>
                                <Form.Control name={'todo'} type="text" placeholder="Write your todo here"/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select contact</Form.Label>
                                <Select name={'number'}
                                        options={values}
                                        values={[]}
                                        onChange={(value) => console.log(value)}
                                />
                            </Form.Group>
                            <Button variant="outline-info" size={'sm'} block type="submit">
                                Add to do
                            </Button>
                        </Form>
                        <ListGroup style={{margin: '2rem'}} align={'center'}>
                            <ListGroup.Item>Test todo </ListGroup.Item>
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

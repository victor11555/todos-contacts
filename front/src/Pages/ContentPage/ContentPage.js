import React from 'react';
import {Button, Col, Container, Form, ListGroup, Row} from 'react-bootstrap'
import Select from 'react-dropdown-select'
import {useSelector, useDispatch} from "react-redux";
import { addToDoAc } from '../../redux/actionCreators';
import Userlist from "../../UserList/Userlist";

function ContentPage(props) {

  const dispatch = useDispatch()
    const user = useSelector(state => state.user.contacts)
    let values = []
    if (user) {
        values = user.map(el => el.map(user => {
            return {label: user.name, value: user.phone}
        }))
    }

    const options = [{label: 'fs', value: 'lalala'}, {label: '2323', value: '232323'}, {label: '242424'}] //тестовый массив юзеров
    //Ебанем мапом по массиву контактов юзера, чтоб привести к виду: Label:value

    const handleSubmit =
        (e) => {
            e.preventDefault()
            const {number, todo} = e.target
            //Здесь логика диспатча для добавления тудухи в базу!
            dispatch(addToDoAc({ number, todo }))
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

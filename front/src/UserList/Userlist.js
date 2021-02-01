import React from 'react';
import {Button, ListGroup} from "react-bootstrap";
import { addContactAc } from '../redux/actionCreators';
import { useDispatch } from 'react-redux'
const Userlist = () => {
  const dispatch = useDispatch()
  const clickhandler = (e) => {
    e.preventDefault()
    dispatch(addContactAc({contactId : e.target.id}))
  }
  return (
        <div>
            <ListGroup>
                <ListGroup.Item>Test todo <Button onClick={(e)=>clickhandler(e)} className={'col-4 offset-5'}> Добавить контакт</Button></ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Userlist;

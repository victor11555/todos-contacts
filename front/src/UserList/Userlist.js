import React, {useEffect} from 'react';
import {Button, ListGroup} from "react-bootstrap";
import {addContactAc} from '../redux/actionCreators';
import {useDispatch} from 'react-redux'

const Userlist = () => {
    const dispatch = useDispatch()
    const clickhandler = (e) => {
        e.preventDefault()
        dispatch(addContactAc({contactId: e.target.id}))
    }
    let userArr=[{name:'Oleg',number:12345,_id:32323},{name:'Nikolay',number:123123231,_id:123123}] //для теста. потом буду брать юзеров из стейта.

    useEffect(() => {
        //здесь нужен фетч на получение 10 юзеров :)
    }, [])
    return (
        <div>
            <ListGroup>
                {userArr&&userArr.map(el=>{
                    return <ListGroup.Item  key={el._id}><p align={'center'}>{el.name}</p><p align={'center'}>{el.number}</p><Button size={'sm'} block variant={'outline-info'} id={el._id} onClick={clickhandler} > Добавить
                    контакт</Button></ListGroup.Item>})}
            </ListGroup>
        </div>
    );
};

export default Userlist;

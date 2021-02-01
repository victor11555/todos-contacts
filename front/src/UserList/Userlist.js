import React from 'react';
import {Button, ListGroup} from "react-bootstrap";

const Userlist = () => {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item>Test todo <Button className={'col-4 offset-5'}> Добавить контакт</Button></ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Userlist;

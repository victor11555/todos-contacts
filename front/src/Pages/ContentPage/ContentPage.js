import React from "react";
import { Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import Select from "react-dropdown-select";
import { useSelector } from "react-redux";
import Userlist from "../../UserList/Userlist";

function ContentPage(props) {
  const user = useSelector((state) => state.user.contacts);
  let values = [];
  if (user) {
    values = user.map((el) =>
      el.map((user) => {
        return { label: user.name, value: user.phone };
      })
    );
  }

  const options = [
    { label: "fs", value: "lalala" },
    { label: "2323", value: "232323" },
    { label: "242424" },
  ]; //тестовый массив юзеров
  //Ебанем мапом по массиву контактов юзера, чтоб привести к виду: Label:value

  const handleSubmit = (e) => {
    e.preventDefault();
    const { number, todo } = e.target;
    console.log(number.value, todo.value);
    //Здесь логика диспатча для добавления тудухи в базу!
  };
  return (
    <>
      {/*<div className={'container'}>*/}
      <div className="row">
        <div className={"col-3"}>
          <Userlist />
        </div>
        <div className={"col"}>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className={"col-12 "}
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Enter your todo</Form.Label>
              <Form.Control
                name={"todo"}
                type="text"
                placeholder="Write your todo here"
              />
            </Form.Group>
            <Form.Group
              className={"col-12 "}
              controlId="exampleForm.ControlSelect1"
            >
              <Form.Label>Select contact</Form.Label>
              <Select
                name={"number"}
                options={values}
                values={[]}
                onChange={(value) => console.log(value)}
              />
            </Form.Group>

            <Button
              className={"col-10 offset-1 "}
              variant="primary"
              type="submit"
            >
              Add to do
            </Button>
          </Form>
          <div className={"col-12 "} style={{ marginTop: "1%" }}>
            <ListGroup>
              <ListGroup.Item>Test todo </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className={"col-3"}>
          <ListGroup>
            <ListGroup.Item>Test todo </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      {/*</div>*/}
    </>
  );
}

export default ContentPage;

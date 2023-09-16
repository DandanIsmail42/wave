import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { MdOutlineDone } from "react-icons/md";

const List = ({ todo, deleteTodo, finishTodo }) => {
  return todo.map((value, index) => {
    return (
      <Card className="mt-2">
        <Card.Body>
          <Row>
            <Col>
              <h3>{value.todoName}</h3>
            </Col>
            <Col md="2">
              <Button
                onClick={() => finishTodo(index)}
                variant={value.status ? "secondary" : "primary"}
              >
                {value.status ? "Selesai" : <MdOutlineDone />}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="mt-2"
                onClick={() => deleteTodo(index)}
                variant="danger"
              >
                Hapus
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  });
};

export default List;

// eslint-disable-next-line no-lone-blocks
{
  /* <marquee>
        <h1>{hasil}</h1>
      </marquee>
     <h1>pacar idaman : {nama}</h1>
     <i>Realtime data : {pacar}</i>
     <br />
     <br />
     <input type="string"
      placeholder='blog!'
      onChange={(cb) => setPacar(cb.target.value)} />
     <Button variant="outline-success" size='sm' onClick={() => setNama(pacar)}>SET PACAR SEKARANG</Button>
     <br />
     
     <br /> */
}

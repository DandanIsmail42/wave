import React from "react";
import { Button, Card, Form, Stack } from "react-bootstrap";
import { ImPlus } from "react-icons/im";

const AddTodo = ({ handleChange, todoName, addTodo }) => {
  return (
    <div>
      <Card className="mt-5">
        <Card.Body>
          <Stack direction="horizontal" gap="2" className="mt-3">
            <Form.Control
              type="text"
              placeholder="Masukan todo..."
              onChange={handleChange}
              value={todoName}
            />
            <Button onClick={addTodo}>
              <ImPlus />
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddTodo;

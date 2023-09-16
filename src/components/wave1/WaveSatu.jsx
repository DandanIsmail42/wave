import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Add from "./AddTodo.jsx";
import List from "./List.jsx";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

const WaveSatu = () => {
  const [todoName, setTodoName] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    const dataTodo = { todoName, status: false };
    setTodo([dataTodo, ...todo]);
    Store.addNotification({
      title: "Berhasil di tambhkan",
      type: "success",
      insert: "top-right",
      container: "top-left",
      width: 200,
      animationIn: ["animate__animated animate__flipInY"],
      animationOut: ["animate__animated animate__flipOutX"],
      dismiss: {
        duration: 1500,
        onScreen: false,
      },
    });
    setTodoName("");
  };

  const finishTodo = (index) => {
    const cloningTodo = [...todo];
    cloningTodo[index].status = !cloningTodo[index].status;
    setTodo(cloningTodo);
    Store.addNotification({
      title: "Selesai",
      type: "default",
      insert: "top-right",
      container: "top-left",
      width: 200,
      animationIn: ["animate__animated animate__flipInY"],
      animationOut: ["animate__animated animate__flipOutX"],
      dismiss: {
        duration: 1500,
        onScreen: false,
        pauseOnHover: false,
      },
    });
  };

  const deleteTodo = (index) => {
    setTodo(todo.filter((value, idx) => index !== idx));
    Store.addNotification({
      title: "To do dihapus",
      type: "danger",
      insert: "top-right",
      container: "top-left",
      width: 200,
      animationIn: ["animate__animated animate__flipInY"],
      animationOut: ["animate__animated animate__flipOutX"],
      dismiss: {
        duration: 1500,
        onScreen: false,
        pauseOnHover: false,
      },
    });
  };

  const handleChange = (e) => {
    const data = e.target.value;
    setTodoName(data);
  };

  console.log(todo);
  return (
    <div>
      <ReactNotifications style={{ size: "10px" }} />
      <Container>
        <h1 className="mt-3 text-center">To do Web App</h1>

        {/* input todo */}
        <Add
          handleChange={handleChange}
          todoName={todoName}
          addTodo={addTodo}
        />
        {/* <Card className="mt-5">
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
      </Card> */}

        {/* list todo */}
        <div className="mt-5">
          <List todo={todo} deleteTodo={deleteTodo} finishTodo={finishTodo} />
        </div>
      </Container>
    </div>
  );
};

export default WaveSatu;

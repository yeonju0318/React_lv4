import React from "react";
import Template from "./components/Template";
import Todolist from "./components/Todolist";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import styled from "styled-components";
import Todoinsert from "./components/Todoinsert";

const nextId = 4;

function App() {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: false,
    },
    {
      id: 3,
      text: "할일 3",
      checked: true,
    },
  ]);

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  return (
    <Template todoLength={todos.length}>
      <Todolist todos={todos} />
      <AddtodoButton onClick={onInsertToggle}>
        <MdAddCircle />
      </AddtodoButton>
      {insertToggle && (
        <Todoinsert
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
        />
      )}
    </Template>
  );
}

export default App;

const AddtodoButton = styled.div`
  position: fixed; //목록이 길어지면 스크롤이 생기는데 상관없이 위치에 고정되게 하기위해
  right: -5px;
  bottom: 0;
  z-index: 100;
  width: 100px;
  height: 100px;
  cursor: pointer;
  font-size: 5rem;
  color: #f67280;
`;

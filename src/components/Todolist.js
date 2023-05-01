import React from "react";
import Todoitem from "./Todoitem";
import styled from "styled-components";

function Todolist({ todos }) {
  return (
    <List>
      {todos.map((todo) => (
        <Todoitem todo={todo} key={todo.id} />
      ))}
    </List>
  );
}

export default Todolist;

const List = styled.div`
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
`;

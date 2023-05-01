import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import styled from "styled-components";

function Todoinsert({ onInsertToggle, onInsertTodo }) {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };
  return (
    <div>
      <Background onClick={onInsertToggle}></Background>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="please type"
          value={value}
          onChange={onChange}
        ></Input>
        <Button type="submit">
          <MdAddCircle />
        </Button>
      </Form>
    </div>
  );
}

export default Todoinsert;

const Background = styled.div`
  position: fixed;
  z-index: 980;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6c567b;
  opacity: 0.8;
`;

const Form = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 990;
  width: 300px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px #f67280;

  background: white;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #f67280;

  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
`;

const Button = styled.button`
  padding-top: 20px;
  background: none;
  outline: none;
  border: none;
  color: #f67280;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
`;

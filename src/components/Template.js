import React from "react";
import styled from "styled-components";

function Template({ children, todoLength }) {
  return (
    <Top>
      <Title>오늘의 할 일({todoLength})</Title>
      <div>{children}</div>
    </Top>
  );
}

export default Template;

const Top = styled.div`
  padding-top: 20px;
  max-height: 100vh; //viewport 값에 맞게 전체를 보여주기위해서
`;

const Title = styled.div`
  width: 90vw;
  margin-left: auto;
  margin-right: auto;

  padding-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #6c567b;
`;

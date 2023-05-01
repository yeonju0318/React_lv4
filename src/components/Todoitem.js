import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styled from "styled-components";

function Todoitem({ todo }) {
  const { id, text, checked } = todo;
  return (
    <Item>
      <Content>
        {checked ? <Pinkcheckbox1 /> : <Pinkcheckbox2 />}
        <ContentText>
          {checked ? <Checkedcontent>{text}</Checkedcontent> : text}
        </ContentText>
      </Content>
    </Item>
  );
}

export default Todoitem;

const Item = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;

  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px #f67280;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Pinkcheckbox1 = styled(MdCheckBox)`
  font-size: 1.5rem;
  color: #f67280;
`;

const Pinkcheckbox2 = styled(MdCheckBoxOutlineBlank)`
  font-size: 1.5rem;
  color: #f67280;
`;

const ContentText = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`;

const Checkedcontent = styled.div`
  color: #6c567b;
  text-decoration: line-through;
  cursor: pointer;
  opacity: 0.6;
`;

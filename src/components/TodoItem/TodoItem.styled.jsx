import styled from "@emotion/styled";

const crossed = ({ isCompleted }) => {
  return isCompleted ? "line-through" : "none";
};

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #80808035;
`;

export const TaskText = styled.p`
  text-decoration: ${crossed};
  font-size: 20px;
  cursor: default;
`;

export const DeleteBtn = styled.button`
  padding: 5px 10px;
  cursor: pointer;
`;

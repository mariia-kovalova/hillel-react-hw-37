import styled from "@emotion/styled";

const done = ({ isCompleted }) => {
  return isCompleted ? "text-decoration:line-through;color: #808080;" : "";
};

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  flex-basis: 100%;

  padding: 16px;

  background: #262626;
  border: 1px solid #333333;
  border-radius: 8px; 
`;

export const TaskText = styled.p`
  font-size: 14px;
  line-height: 19px;
  color: #F2F2F2;
  cursor: pointer;
  ${done};
  &:hover {
   color: #1E6F9F
  }
`;

export const DeleteBtn = styled.button`
  background: none;
  border: none;
  color: #808080;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
   color: #1E6F9F
  }
`;

import styled from "@emotion/styled";

const color = ({ taskStatus }) => {
  return taskStatus ? "lightgreen" : "gray";
};

export const Item = styled.li`
  background-color: ${color};
`;

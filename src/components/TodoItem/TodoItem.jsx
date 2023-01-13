import { Item } from "./TodoItem.styled";
import PropTypes from "prop-types";

export function TodoItem({ taskText, taskStatus }) {
  return <Item taskStatus={taskStatus}>{taskText}</Item>;
}

TodoItem.propTypes = {
  taskText: PropTypes.string.isRequired,
  taskStatus: PropTypes.bool.isRequired,
};

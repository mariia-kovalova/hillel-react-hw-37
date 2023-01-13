import PropTypes from "prop-types";
import { Item, TaskText, DeleteBtn } from "./TodoItem.styled";

export function TodoItem({ id, taskTitle, isCompleted, onDelete, onComplete }) {
  return (
    <Item>
      <TaskText onClick={() => onComplete(id)} isCompleted={isCompleted}>
        {taskTitle}
      </TaskText>
      <DeleteBtn onClick={() => onDelete(id)}>X</DeleteBtn>
    </Item>
  );
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

import { List } from "./TodoList.styled";
import { TodoItem } from "../TodoItem/TodoItem";
import PropTypes from "prop-types";

export function TodoList({ tasks, onDelete, onComplete }) {
  return (
    <List>
      {tasks.map(({ id, title, isCompleted }) => (
        <TodoItem
          key={id}
          id={id}
          taskTitle={title}
          isCompleted={isCompleted}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </List>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object.isRequired),
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

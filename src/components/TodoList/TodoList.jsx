import { List } from "./TodoList.styled";
import { TodoItem } from "../TodoItem/TodoItem";
import PropTypes from "prop-types";

export function TodoList({ tasks }) {
  return (
    <List>
      {tasks.map(({ id, task, isDone }) => (
        <TodoItem key={id} taskText={task} taskStatus={isDone} />
      ))}
    </List>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.exact({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
};

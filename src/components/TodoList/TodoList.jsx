import { List } from "./TodoList.styled";
import { TodoItem } from "../TodoItem/TodoItem";

export function TodoList({ tasks }) {
  return (
    <List>
      {tasks.map((taskInfo) => (
        <TodoItem key={taskInfo.id} taskInfo={taskInfo} />
      ))}
    </List>
  );
}

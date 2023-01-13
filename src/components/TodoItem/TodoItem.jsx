import { Item } from "./TodoItem.styled";

export function TodoItem({ taskInfo: { task, isDone } }) {
  return <Item>{task}</Item>;
}

import { useSelector } from 'react-redux';
import { List } from './TodoList.styled';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <List>
      {todos.map(({ id, text, isCompleted }) => (
        <TodoItem key={id} id={id} text={text} isCompleted={isCompleted} />
      ))}
    </List>
  );
};

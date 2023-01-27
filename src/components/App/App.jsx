import { TodoList } from '../TodoList/TodoList';
import { TodoForm } from '../TodoForm/TodoForm';
import { Container, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>todo</Title>
      <TodoForm />
      <TodoList />
    </Container>
  );
};

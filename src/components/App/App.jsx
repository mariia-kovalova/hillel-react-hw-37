import { TodoList } from "../TodoList/TodoList";
import data from "../../db.json";
import { Container, Title } from "./App.styled";

export function App() {
  return (
    <Container>
      <Title>todo</Title>
      <TodoList tasks={data.tasks} />
    </Container>
  );
}

// https://github.com/typicode/json-server

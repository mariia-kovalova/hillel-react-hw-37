import { useEffect, useState } from "react";
import { save, load } from "../../utils/storage-api";
import { TodoList } from "../TodoList/TodoList";
import { TodoForm } from "../TodoForm/TodoForm";
import { Container, Title } from "./App.styled";

const LOCAL_STORAGE_KEY = "todo:tasks";

export function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function loadSavedTasks() {
    const saved = load(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(saved);
    }
  }

  function addTask(taskTitle) {
    const newTasks = [
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ];
    setTasks(newTasks);
    save(LOCAL_STORAGE_KEY, newTasks);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    save(LOCAL_STORAGE_KEY, newTasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
    save(LOCAL_STORAGE_KEY, newTasks);
  }

  return (
    <Container>
      <Title>todo</Title>
      <TodoForm handleAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </Container>
  );
}

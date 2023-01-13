import { useState } from "react";
import { Form, Input, CreateBtn } from "./TodoForm.styled";
import PropTypes from "prop-types";

export function TodoForm({ handleAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Add a new task"
        type="text"
        onChange={onChangeTitle}
        value={title}
      />
      <CreateBtn>Create</CreateBtn>
    </Form>
  );
}

TodoForm.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};

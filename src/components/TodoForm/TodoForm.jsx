import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdded } from '../../redux/todoReducer';
import { Notify } from 'notiflix';
import { Form, Input, CreateBtn } from './TodoForm.styled';

export const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setText(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') {
      Notify.warning('Please enter your task');
    }
    dispatch(todoAdded({ text }));
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="todoText"
        placeholder="Add a new task"
        type="text"
        onChange={handleChange}
        value={text}
      />
      <CreateBtn type="submit">Create</CreateBtn>
    </Form>
  );
};

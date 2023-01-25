import { createAction, createReducer } from '@reduxjs/toolkit';

const todoAdded = createAction('todos/todoAdded');
const todoRemoved = createAction('todos/todoRemoved');
const todoToggled = createAction('todos/todoToggled');

export const todosReducer = createReducer([], {
  [todoAdded]: (state, action) => [...state, action.payload],
  [todoRemoved]: (state, action) =>
    state.filter(({ id }) => id !== action.payload.id),
  [todoToggled]: (state, action) =>
    state.map(todo => {
      if (todo.id === action.payload.id) {
        return todo;
      }
      return {
        ...todo,
        completed: !todo.completed,
      };
    }),
});

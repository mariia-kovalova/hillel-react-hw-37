import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: nanoid(),
        text: action.payload.text,
        isCompleted: false,
      });
    },
    todoRemoved(state, action) {
      return state.filter(({ id }) => id !== action.payload.id);
    },
    todoToggled(state, action) {
      for (const todo of state) {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
          break;
        }
      }
    },
  },
});

export const { todoAdded, todoRemoved, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;

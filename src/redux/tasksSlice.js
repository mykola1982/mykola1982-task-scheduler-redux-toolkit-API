import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const taskInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];
const taskSlice = createSlice({
  name: 'task',
  initialState: taskInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            text,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;

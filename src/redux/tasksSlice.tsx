import {createSlice} from '@reduxjs/toolkit';

type InitialStateType = {
  id: number;
  title: String;
  done: boolean;
};

type TaskType = {
  tasks: InitialStateType[];
};

const initialState: TaskType = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: new Date().getTime(),
        title: action.payload.title,
        done: false,
      });
    },
    toggleTaskDone: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        task => task.id === action.payload.id,
      );
      state.tasks[taskIndex].done = !state.tasks[taskIndex].done;
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    },
    updateTaskName: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        task => task.id === action.payload.id,
      );
      state.tasks[taskIndex].title = action.payload.title;
    },
  },
});

export const {addTask, toggleTaskDone, removeTask, updateTaskName} =
  tasksSlice.actions;
export default tasksSlice.reducer;

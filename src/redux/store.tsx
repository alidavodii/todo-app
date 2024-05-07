import {combineReducers, configureStore} from '@reduxjs/toolkit';
import tasksSlice from './tasksSlice';

const reducer = combineReducers({
  tasks: tasksSlice,
});

export default configureStore({
  reducer,
});

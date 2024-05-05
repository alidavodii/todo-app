import {useDispatch, useSelector} from 'react-redux';
import {
  addTask,
  toggleTaskDone,
  removeTask,
  updateTaskName,
} from '../redux/tasksSlice';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  updateTaskName: (id: number, newTaskName: string) => void;
}

const useTask = () => {
  const tasks = useSelector(state => state.tasks.tasks);

  const dispatch = useDispatch();

  const handleAddTask = (newTaskTitle: string) => {
    dispatch(addTask({title: newTaskTitle}));
  };

  const handleToggleTaskDone = (taskId: number) => {
    dispatch(toggleTaskDone({id: taskId}));
  };

  const handleRemoveTask = (taskId: number) => {
    dispatch(removeTask({id: taskId}));
  };

  const handleUpdateTaskName = (taskId: number, newTaskName: string) => {
    dispatch(updateTaskName({id: taskId, title: newTaskName}));
  };

  return {
    handleAddTask,
    handleToggleTaskDone,
    handleRemoveTask,
    handleUpdateTaskName,
    tasks,
  };
};

export default useTask;

import {useState} from 'react';

export interface TodoInputProps {
  addTask: (task: string) => void;
}

const useTodoInput = ({addTask}: TodoInputProps) => {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if (task) {
      addTask(task);
      setTask('');
    }
  }

  return {task, setTask, handleAddNewTask};
};

export default useTodoInput;

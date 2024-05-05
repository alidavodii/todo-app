import {useState} from 'react';
import {Alert} from 'react-native';
import {Task} from './useTask';

export interface TaskItemProps {
  index: number;
  task: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  updateTaskName: (id: number, newTaskName: string) => void;
}
export interface UseTaskItemProps {
  task: Task;
  removeTask: (id: number) => void;
  updateTaskName: (id: number, newTaskName: string) => void;
}

const useTaskItem = ({removeTask, updateTaskName, task}: UseTaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskText, setEditingTaskText] = useState(task.title);

  function handleStartEdition() {
    setIsEditing(true);
  }

  function handleCancelEdition() {
    setIsEditing(false);
    setEditingTaskText(task.title);
  }

  function handleSubmitEditing() {
    updateTaskName(task.id, editingTaskText);
    setIsEditing(false);
  }

  function handleRemoveTask(id: number) {
    if (!isEditing) {
      Alert.alert('Remove task', 'Are you sure you want to remove this task?', [
        {text: 'No'},
        {
          text: 'Yes',
          onPress: () => removeTask(id),
        },
      ]);
    }
  }

  return {
    handleStartEdition,
    handleCancelEdition,
    handleSubmitEditing,
    handleRemoveTask,
    isEditing,
    setEditingTaskText,
    editingTaskText,
    setIsEditing,
  };
};

export default useTaskItem;

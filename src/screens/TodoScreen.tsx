import React from 'react';
import {StyleSheet, View} from 'react-native';

import {TasksList} from '../components/TasksList';
import useTask from '../hook/useTask';
import {TodoInput} from '../components/TodoInput';

export default function TodoScreen() {
  const {
    handleAddTask,
    handleRemoveTask,
    handleToggleTaskDone,
    handleUpdateTaskName,
    tasks,
  } = useTask();

  return (
    <View style={styles.container}>
      <TodoInput addTask={handleAddTask} />
      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
        updateTaskName={handleUpdateTaskName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
});

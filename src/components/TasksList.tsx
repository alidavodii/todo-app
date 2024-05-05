import React from 'react';
import {FlatList} from 'react-native';
import {TaskItem} from './TaskItem';
import {TasksListProps} from '../hook/useTask';

export function TasksList({
  tasks,
  toggleTaskDone,
  removeTask,
  updateTaskName,
}: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{paddingBottom: 24}}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <TaskItem
            index={index}
            task={item}
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
            updateTaskName={updateTaskName}
          />
        );
      }}
      style={{
        marginTop: 32,
      }}
    />
  );
}

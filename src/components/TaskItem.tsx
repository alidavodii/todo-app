import React, {useEffect, useRef} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import useTaskItem, {TaskItemProps} from '../hook/useTaskItem';

export const TaskItem: React.FC<TaskItemProps> = ({
  index,
  task,
  toggleTaskDone,
  removeTask,
  updateTaskName,
}) => {
  const textInputRef = useRef<TextInput>(null);
  const {
    handleCancelEdition,
    handleRemoveTask,
    handleStartEdition,
    handleSubmitEditing,
    isEditing,
    setEditingTaskText,
    editingTaskText,
    setIsEditing,
  } = useTaskItem({removeTask, updateTaskName, task});

  useEffect(() => {
    if (isEditing) {
      textInputRef.current?.focus();
    } else {
      textInputRef.current?.blur();
    }
  }, [isEditing]);

  return (
    <View style={[styles.container]}>
      <View>
        <TouchableOpacity
          testID={`button-${index}`}
          activeOpacity={1}
          style={styles.taskButton}>
          <TouchableOpacity
            testID={`marker-${index}`}
            style={task.done ? styles.taskMarkerDone : styles.taskMarker}
            onPress={() => toggleTaskDone(task.id)}>
            {task.done && <Icon name="check" size={12} color="#FFF" />}
          </TouchableOpacity>
          <TextInput
            ref={textInputRef}
            style={task.done ? styles.taskTextDone : styles.taskText}
            editable={isEditing}
            onChangeText={setEditingTaskText}
            value={editingTaskText}
            onSubmitEditing={handleSubmitEditing}
            onBlur={() => setIsEditing(false)}
            selection={{
              start: editingTaskText.length,
              end: editingTaskText.length,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          testID={`edit-${index}`}
          style={{
            padding: 12,
            borderRightColor: 'rgba(196, 196, 196, 0.24)',
            borderRightWidth: 1,
          }}
          onPress={!isEditing ? handleStartEdition : handleCancelEdition}>
          {!isEditing ? (
            <Icon name="edit" size={16} color="#666" />
          ) : (
            <Icon name="x" size={16} color="#666" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          testID={`trash-${index}`}
          style={{
            paddingLeft: 12,
            paddingRight: 24,
          }}
          onPress={() => handleRemoveTask(task.id)}>
          <Icon
            name="trash"
            size={16}
            style={{opacity: isEditing ? 0.4 : 1}}
            color={'#666'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskButton: {
    paddingHorizontal: 14,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#666',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskText: {
    color: '#666',
    fontFamily: 'Inter-Medium',
    textDecorationLine: 'none',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: '#ffbb00',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskTextDone: {
    color: '#444',
    fontFamily: 'Inter-Medium',
    textDecorationLine: 'line-through',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

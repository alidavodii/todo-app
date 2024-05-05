import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import useTodoInput, {TodoInputProps} from '../hook/useTodoInput';

export function TodoInput({addTask}: TodoInputProps) {
  const {task, setTask, handleAddNewTask} = useTodoInput({addTask});

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add new task..."
        placeholderTextColor="#B2B2B2"
        returnKeyType="send"
        selectionColor="#666666"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        autoFocus
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}>
        <Icon name="plus-circle" size={24} color="#ffbb00" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: '#111',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: '#222',
    color: '#666666',
  },
  addButton: {
    backgroundColor: '#111',
    height: 56,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

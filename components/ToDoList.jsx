import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const ToDoList = () => {
  return (
    <ScrollView style={styles.task}>
      <Text style={styles.taskText}>Task 1</Text>
      <Text style={styles.taskText}>Task 2</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc'
    },
    taskText: {
      fontSize: 16,
    },
});

export default ToDoList;
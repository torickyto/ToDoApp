import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView style={styles.task}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.taskText}>{task}</Text>
      ))}
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
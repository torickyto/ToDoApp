import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const ToDoForm = () => {
    return (
      <View>
        <TextInput style={styles.input} placeholder="Add a new task..." />
        <Button title="Add" />
      </View>
    );
  };

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  }
});

export default ToDoForm;
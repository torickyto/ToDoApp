import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import ToDoList from './components/ToDoList'; 
import ToDoForm from './components/ToDoForm';

function App() {
  return (
    <SafeAreaView>
      <ToDoList/>
      <View style={styles.form}>
        <ToDoForm />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  completed: {
    backgroundColor: '#e0e0e0'
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default App;

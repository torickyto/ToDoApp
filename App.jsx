import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import ToDoList from './components/ToDoList'; 
import ToDoForm from './components/ToDoForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList />
      <View style={styles.form}>
        <ToDoForm />
      </View>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </SafeAreaView>
  );
}

function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>About Screen</Text>
    </SafeAreaView>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
});

export default App;
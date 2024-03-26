import React from 'react';
import { StyleSheet, View, SafeAreaView, Button } from 'react-native';
import ToDoList from '../components/ToDoList'; 
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({ navigation }) => {
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

export default HomeScreen;
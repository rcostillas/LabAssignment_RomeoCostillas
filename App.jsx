import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import ToDoList from './Components/ToDoList';
import ToDoForm from './Components/ToDoForm';

function App() {
  const [tasks, setTasks] = useState(['Do Laundry', 'Go to gym', 'Walk dog']);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <View>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
}
export default App;
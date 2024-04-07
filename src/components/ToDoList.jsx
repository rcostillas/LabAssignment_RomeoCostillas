import {View, Text, ScrollView, StyleSheet} from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task, index) => (
        <View key={index}>
            <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
container: {
    paddingTop: 20,
},
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: 'darkred',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
  });

export default ToDoList;
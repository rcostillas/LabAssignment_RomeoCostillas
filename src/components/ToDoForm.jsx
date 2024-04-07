import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'

function ToDoForm({ addTask}) {
    const [taskText, setTaskText] = React.useState('');

    return (
    <View style={styles.container}>
      <View style={styles.form}>
          <TextInput
              style={styles.input}
              placeholder="Add a new task..."
              onChangeText={(text) => setTaskText(text)}
              value={taskText}
          />
            <TouchableOpacity
                  style={styles.button}
                  onPress={() => addTask(taskText)}
              >
                  <Text style={styles.buttonText}>Add Task</Text>
              </TouchableOpacity>
        </View>
      </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},  
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
      marginTop: 10,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'darkred',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },

    button: {
      backgroundColor: 'darkred',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,  
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    

});
export default ToDoForm;
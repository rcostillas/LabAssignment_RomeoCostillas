import React from 'react';
import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState(['Do Laundry', 'Go to gym', 'Walk dog']);
    const [taskText, setTaskText] = useState('');
    const addTask = (task) => {
      setTasks([...tasks, task]);
      setTaskText('');
    }

    return (
        <MainLayout>
            <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                    color="darkred"
                />
            </View>
            </View>
            <ToDoList tasks={tasks} />
            <ToDoForm
                addTask={addTask}
                setTaskText={setTaskText}
                taskText={taskText}
            />
        </MainLayout>      
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        paddingTop: 20,
    },
    buttonWrapper: {
        width: '50%',
    },
    
});
export default HomeScreen;
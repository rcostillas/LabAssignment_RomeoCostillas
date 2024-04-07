import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>App App and Away</Text>
        <Text style={styles.text}>Romeo Costillas</Text>
        <Text style={styles.text}>{formattedDate}</Text>
        </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
},
});
export default AboutScreen;
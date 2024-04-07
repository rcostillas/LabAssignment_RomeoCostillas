import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'lightyellow',
    padding: 20,
  },
  content:{
    flex: 1,
  }
});

export default MainLayout;
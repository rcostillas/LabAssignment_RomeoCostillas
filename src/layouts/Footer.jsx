import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Lab Assignment 5: Navigation and Routing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 35,
    backgroundColor: 'darkred',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Footer;
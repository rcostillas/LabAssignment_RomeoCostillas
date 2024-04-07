import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>My Amazing App</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    header: {
      height: 75,
      backgroundColor: 'darkred',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,

    },
    title: {
      fontSize: 20,
      color: 'white',
      textShadowColor: 'blue',
    },
  });
  
  export default Header;
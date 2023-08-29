import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomSeparator = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
    width: '80%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'lightgray',
  },
  text: {
    paddingHorizontal: 10,
    color: 'gray',
    fontSize: 16,
  },
});

export default CustomSeparator;

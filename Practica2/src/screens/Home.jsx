import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = ({ setCamera, setVideo }) => {
  return (
    <View style={styles.container}>
      <Button title='Camara' onPress={setCamera} />
      <Button title='Video' onPress={setVideo} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexDirection: 'row',
    marginVertical: 10,
    
  },
});

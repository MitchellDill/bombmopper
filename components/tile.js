import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Tile = props => {
  console.log('tile says hello');
  return (
    <View style={styles.tile}>
      <Button title={'\u2728'} color="gold" />
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'white',
  },
});

export default Tile;
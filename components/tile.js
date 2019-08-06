import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Tile = props => {
  console.log('tile says hello');
  return (
    <View style={styles.tile}>
      <Button title="BOMB" />
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'black',
    color: 'gold',
  },
});

export default Tile;

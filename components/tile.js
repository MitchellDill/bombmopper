import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Tile = props => {
  console.log('tile says hello');
  return (
    <View style={styles.tile}>
      {props.bomb ? (
        <Button title={'\u2728'} color="gold" />
      ) : (
        <Button title={'\u2B50'} color="gold" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'white',
    alignItems: 'center',
  },
});

export default Tile;

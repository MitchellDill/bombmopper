import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tile from './tile.js';

const Row = props => {
  console.log('row says hello');
  return (
    <View style={styles.row}>
      {props.size.map(row => {
        return <Tile />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default Row;

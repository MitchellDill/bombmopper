import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tile from './tile.js';

const Row = props => {
  console.log('row says hello');
  return (
    <View style={styles.row}>
      {[...Array(props.size).keys()].map((row, i) => {
        return <Tile key={`row${row}tile${i}`} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    color: 'yellow',
  },
});

export default Row;

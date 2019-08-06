import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tile from './tile.js';

const Row = props => {
  return (
    <View style={styles.row}>
      {props.bombs.map((tile, i) => {
        return <Tile bomb={tile} key={`row${props.row}tile${i}`} />;
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
    color: 'yellow',
  },
});

export default Row;

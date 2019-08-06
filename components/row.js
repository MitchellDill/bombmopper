import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tile from './tile.js';

const Row = props => {
  return (
    <View style={styles.row}>
      {props.bombs.map((tile, i) => {
        return (
          <Tile
            bomb={tile}
            number={props.numbers[i]}
            cleared={props.cleared}
            click={props.click}
            flag={props.flag}
            identifier={[props.row, i]}
            key={`row${props.row}tile${i}`}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 1,
  },
});

export default Row;

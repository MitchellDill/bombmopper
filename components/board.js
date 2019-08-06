import React from 'react';
import { View, StyleSheet } from 'react-native';
import Row from './row.js';

const Board = props => {
  return (
    <View style={styles.board}>
      {props.board.map((row, i) => {
        return <Row bombs={row} size={props.size} key={`row${i}`} row={i} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flex: 1,
  },
});

export default Board;

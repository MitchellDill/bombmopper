import React from 'react';
import { View, StyleSheet } from 'react-native';
import Row from './row.js';

const Board = props => {
  return (
    <View style={styles.board}>
      {props.board.map((row, i) => {
        return (
          <Row
            bombs={row}
            size={props.size}
            click={props.click}
            flag={props.flag}
            key={`row${i}`}
            row={i}
          />
        );
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

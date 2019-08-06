import React from 'react';
import { View, StyleSheet, Text, Fragment } from 'react-native';
import Row from './row.js';

const Board = props => {
  console.log('board says hello');
  return (
    <View style={styles.board}>
      {props.size.map(row => {
        return <Row size={props.size} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flex: 1,
    borderWidth: 6,
    borderColor: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'yellow',
  },
});

export default Board;

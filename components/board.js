import React from 'react';
import { View, StyleSheet, Text, Fragment } from 'react-native';
import Row from './row.js';

const Board = props => {
  console.log('board says hello');
  return (
    <View style={styles.board}>
      {[...Array(props.size).keys()].map((row, i) => {
        return <Row size={props.size} key={`row${i}`} />;
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
});

export default Board;

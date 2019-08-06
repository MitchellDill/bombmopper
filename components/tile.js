import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Tile = props => {
  console.log('tile says hello');
  return (
    <View style={styles.tile}>
      {props.cleared.some(clearedTiles => {
        return (
          clearedTiles[0] === props.identifier[0] &&
          clearedTiles[1] === props.identifier[1]
        );
      }) ? (
        <Button
          title={props.number.toString()}
          color="black"
          onPress={() => {
            console.log('cleared already');
          }}
          accessibilityLabel={`${props.number} nearby`}
        />
      ) : props.bomb ? (
        <Button
          title={'\u2728'}
          color="gold"
          onPress={() => {
            props.click(props.identifier);
          }}
          accessibilityLabel="mine!"
        />
      ) : (
        <Button
          title={'\u2B50'}
          color="gold"
          onPress={() => {
            props.click(props.identifier);
          }}
          accessibilityLabel="safe!"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'purple',
    backgroundColor: 'pink',
    alignItems: 'center',
    margin: 1,
  },
});

export default Tile;

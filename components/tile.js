import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Tile = props => {
  console.log('tile says hello');
  return (
    <View style={styles.tile}>
      {props.bomb ? (
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

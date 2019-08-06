/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardSize: 10,
      bombsRemaining: 0,
      gameOver: false,
    };
  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <Text style={styles.title}>BOMBMOPPER</Text>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

/*
create board - bomb count, board size (square)

sweep - determine touch spot, read state of every surrounding button

each button component will have prop of isBomb, bombsSurrounding, flagged, swept (bool)


*/

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'crimson',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;

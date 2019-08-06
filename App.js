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
import Tile from './components/tile.js';
import Board from './components/board.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardSize: new Array(10),
      totalBombs: 10,
      bombsRemaining: 0,
      gameOver: false,
    };
  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.screen}>
          <View style={styles.header}>
            <Text style={styles.title}>BOMBMOPPER</Text>
          </View>
          <View style={styles.body}>
            <Board size={this.state.boardSize} bomb={this.state.totalBombs} />
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

/*
create board - bomb count, board size (square)
-determine where bombs go

sweep - determine touch spot, read state of every surrounding button

each button component will have prop of isBomb, bombsSurrounding, flagged, swept (bool)


*/

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  screen: {
    flex: 1,
  },
  body: {
    flex: 8,
    backgroundColor: 'green',
  },
  header: {
    flex: 1,
  },
  title: {
    fontSize: 44,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;

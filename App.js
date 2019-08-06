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
import Board from './components/board.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardSize: 8,
      totalBombs: 8,
      bombsRemaining: 0,
      gameOver: false,
      boardLayout: [],
      flaggedCoordinates: [],
      clearedCoordinates: [],
    };
    this.disperseBombs = this.disperseBombs.bind(this);
    this.createBoard = this.createBoard.bind(this);
  }

  createBoard(board) {
    this.setState({
      boardLayout: board,
    });
  }

  disperseBombs(width, height, bombs) {
    let bombStore = bombs;
    let board = [];
    for (let i = 0; i < height; i++) {
      let bombsInRow = 0;
      let row = new Array(width).fill(null).map(tile => {
        if (
          Math.random() * bombStore > bombStore / 1.25 + bombsInRow &&
          bombStore
        ) {
          bombStore--;
          bombsInRow++;
          return true;
        } else if (
          i === height - 1 &&
          Math.random() * bombStore > bombStore / 1.5 &&
          bombStore
        ) {
          bombStore--;
          bombsInRow++;
          return true;
        } else if (Math.ceil(Math.random() * bombStore >= bombStore - 1)) {
          return false;
        } else {
          return false;
        }
      });
      board.push(row);
    }
    console.log(board, bombStore);
    this.createBoard(board);
  }

  componentDidMount() {
    this.disperseBombs(
      this.state.boardSize,
      this.state.boardSize,
      this.state.totalBombs,
    );
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
            <Board size={this.state.boardSize} board={this.state.boardLayout} />
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
    backgroundColor: 'black',
  },
  body: {
    flex: 8,
  },
  header: {
    flex: 1,
  },
  title: {
    fontSize: 48,
    fontWeight: '800',
    textAlign: 'center',
    color: 'white',
  },
});

export default App;

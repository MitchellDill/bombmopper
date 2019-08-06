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
      message: 'BOMBMOPPER',
      boardSize: 8,
      totalBombs: 8,
      bombsRemaining: 0,
      gameOver: false,
      boardLayout: [],
      numberLayout: [],
      flaggedCoordinates: [],
      clearedCoordinates: [],
    };
    this.disperseBombs = this.disperseBombs.bind(this);
    this.createBoard = this.createBoard.bind(this);
    this.clickTile = this.clickTile.bind(this);
    this.flagTile = this.flagTile.bind(this);
    this.sweepSurroundingTiles = this.sweepSurroundingTiles.bind(this);
    this.clearTile = this.clearTile.bind(this);
    this.loseGame = this.loseGame.bind(this);
  }

  createBoard(board) {
    const numberBoard = [];
    for (let i = 0; i < board.length; i++) {
      const numberRow = new Array(board.length).fill(0);
      numberBoard.push(numberRow);
    }
    this.setState({
      boardLayout: board,
      numberLayout: numberBoard,
    });
    console.log(board, numberBoard);
  }

  clickTile(tileId) {
    console.log(tileId);
    let row = tileId[0];
    let column = tileId[1];
    let updatedClearings = [].concat(this.state.clearedCoordinates);
    updatedClearings.push(tileId);
    this.setState({
      clearedCoordinates: updatedClearings,
    });
    this.state.boardLayout[row][column] ? this.loseGame() : null;
  }

  flagTile(e) {
    console.log(e);
  }

  sweepSurroundingTiles(tileId) {
    let row = tileId[0];
    let column = tileId[1];
    this.clearTile(row - 1, column);
    this.clearTile(row - 1, column - 1);
    this.clearTile(row, column - 1);
    this.clearTile(row, column + 1);
    this.clearTile(row + 1, column);
    this.clearTile(row + 1, column + 1);
    this.clearTile(row - 1, column + 1);
    this.clearTile(row + 1, column - 1);
  }

  clearTile(tileId) {
    let row = tileId[0];
    let column = tileId[1];
    let clearedTiles = [];
    if (!this.state.boardLayout[row][column]) {
      this.sweepSurroundingTiles(tileId);
    }
    clearedTiles.push(tileId);
  }

  loseGame() {
    this.setState({
      gameOver: true,
      message: 'KABOOM YOU LOSE',
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
            <Text style={styles.title}>{this.state.message}</Text>
          </View>
          <View style={styles.body}>
            <Board
              size={this.state.boardSize}
              board={this.state.boardLayout}
              click={this.clickTile}
              flag={this.flagTile}
            />
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

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
    this.sweepMainTile = this.sweepMainTile.bind(this);
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
    this.sweepMainTile(tileId);
    this.state.boardLayout[row][column] ? this.loseGame() : null;
  }

  flagTile(e) {
    console.log(e);
  }

  sweepMainTile(tileId) {
    let row = tileId[0];
    let column = tileId[1];
    this.clearTile(row, column);
    this.sweepSurroundingTiles(tileId);
  }

  sweepSurroundingTiles(tileId) {
    let row = tileId[0];
    let column = tileId[1];
    let clearedTiles = [].concat(this.state.clearedCoordinates);

    const clearTile = function(newRow, newCol) {
      clearedTiles.push([newRow, newCol]);
    };

    if (this.state.boardLayout[row - 1]) {
      if (!this.state.boardLayout[row - 1][column]) {
        clearTile(row - 1, column);
      }
    }
    if (
      this.state.boardLayout[row - 1] &&
      this.state.boardLayout[row][column - 1]
    ) {
      if (!this.state.boardLayout[row - 1][column - 1]) {
        clearTile(row - 1, column - 1);
      }
    }
    if (this.state.boardLayout[row][column - 1]) {
      if (!this.state.boardLayout[row][column - 1]) {
        clearTile(row, column - 1);
      }
    }
    if (this.state.boardLayout[row][column + 1]) {
      if (!this.state.boardLayout[row][column + 1]) {
        clearTile(row, column + 1);
      }
    }
    if (this.state.boardLayout[row + 1]) {
      if (!this.state.boardLayout[row + 1][column]) {
        clearTile(row + 1, column);
      }
    }
    if (
      this.state.boardLayout[row + 1] &&
      this.state.boardLayout[row][column + 1]
    ) {
      if (!this.state.boardLayout[row + 1][column + 1]) {
        clearTile(row + 1, column + 1);
      }
    }
    if (
      this.state.boardLayout[row - 1] &&
      this.state.boardLayout[row][column + 1]
    ) {
      if (!this.state.boardLayout[row - 1][column + 1]) {
        clearTile(row - 1, column + 1);
      }
    }
    if (
      this.state.boardLayout[row + 1] &&
      this.state.boardLayout[row][column - 1]
    ) {
      if (!this.state.boardLayout[row + 1][column - 1]) {
        clearTile(row + 1, column - 1);
      }
    }

    this.setState({
      clearedCoordinates: clearedTiles,
    });
  }

  clearTile(row, column) {
    console.log(row, column);
    console.log(this.state.boardLayout[row][column]);
    let clearedTiles = [].concat(this.state.clearedCoordinates);
    clearedTiles.push([row, column]);
    // if (this.state.boardLayout[row]) {
    //   let clear;
    //   if (
    //     (clear = clearedTiles.some(cleared => {
    //       return cleared[0] !== row && cleared[1] !== column;
    //     }))
    //   ) {
    //     console.log(clear);
    //     // this.sweepSurroundingTiles([row, column]);
    //   }
    // }
    this.setState({
      clearedCoordinates: clearedTiles,
    });
  }

  loseGame() {
    this.setState({
      gameOver: true,
      message: 'KABOOM',
    });
  }

  disperseBombs(width, height, bombs) {
    let bombStore = bombs;
    let bombCoordinates = [];
    let board = [];

    while (bombStore > 0) {
      let bombSpot = [
        Math.round(Math.random() * height),
        Math.round(Math.random() * width),
      ];
      bombCoordinates.push(bombSpot);
      bombStore--;
    }
    for (let i = 0; i < height; i++) {
      let row = new Array(width).fill(null).map((tile, j) => {
        if (
          bombCoordinates.some(spots => {
            return spots[0] === i && spots[1] === j;
          })
        ) {
          return (tile = true);
        } else {
          return (tile = false);
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
              numbers={this.state.numberLayout}
              cleared={this.state.clearedCoordinates}
              click={this.clickTile}
              flag={this.flagTile}
            />
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

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

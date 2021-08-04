import React, { Component } from "react";
import Cell from "./Cell";
import { randomTrueOrFalse } from "./helpers";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board (default: 5)
 * - ncols: number of cols of board (default: 5)
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.5,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
    this.createBoard = this.createBoard.bind(this);
    this.flipCellsAround = this.flipCellsAround.bind(this);
    this.checkIfBoardIsWinnable = this.checkIfBoardIsWinnable.bind(this);
  }

  /** ensure that every came is winnable by ensuring each row and col has an
   * even number of lit cells
   * */

  checkIfBoardIsWinnable(board) {
    const { ncols, nrows } = this.props;
    let winnable = true;

    // make sure an even number of cells are lit each row
    board.forEach((row) => {
      const numTrue = row.filter((e) => e === true).length;
      if (numTrue % 2 !== 0) winnable = false;
    });

    // make sure an even number of cells are lit each column
    for (let col = 0; col < ncols; col++) {
      let numTrue = 0;
      for (let row = 0; row < nrows; row++) {
        if (board[row][col] === true) numTrue++;
      }
      if (numTrue % 2 !== 0) winnable = false;
    }

    return winnable;
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    const { ncols, nrows } = this.props;
    let board = [];
    // creates an array-of-arrays of true/false values
    for (let i = 0; i < nrows; i++) {
      board[i] = [];
      for (let j = 0; j < ncols; j++) {
        board[i][j] = randomTrueOrFalse(this.props.chanceLightStartsOn);
      }
    }

    if (!this.checkIfBoardIsWinnable(board)) {
      board = this.createBoard();
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let hasWon = this.state.hasWon;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y + 1, x);
    flipCell(y - 1, x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);

    // win when every cell is turned off
    if (!board.flat().includes(true)) {
      hasWon = true;
    }

    this.setState({ board, hasWon });
  }

  /** Render game board or winning message. */

  render() {
    // if the game is won, just show a winning msg & render nothing else
    // TODO

    const tableRows = this.state.board.map((e, row) => (
      <tr key={row}>
        {e.map((val, col) => {
          const key = `${row}-${col}`;

          return (
            <Cell
              isLit={val}
              key={key}
              coord={key}
              flipCellsAroundMe={this.flipCellsAround}
            />
          );
        })}
      </tr>
    ));

    return (
      <table className="Board">
        {this.state.hasWon ? (
          <p className="Board-win-msg">You win!</p>
        ) : (
          <tbody>{tableRows}</tbody>
        )}
      </table>
    );
  }
}

export default Board;

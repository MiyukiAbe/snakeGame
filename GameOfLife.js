class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    let board = [];

    for (let i = 0; i < this.height; i++) {
      let subBoard = [];
      for (let j = 0; j < this.width; j++) {
        subBoard.push(0);
      }
      board.push(subBoard);
    }
    return board;
    // TODO: Create and return an 2D Array
    // with `this.heigh` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]
  }

  getCell(row, col) {
    //console.log("board", board, "this.board", this.board);
    if (row >= 0 && row < this.height && col >= 0 && col < this.width) {
      return this.board[row][col];
    }

  }

  setCell(value, row, col) {
    if (value === 1 || value === 0) {
      let cellState = this.getCell(row, col);
      cellState = value;
      this.board[row][col] = cellState;
    }

    return this.board;
  }
  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}

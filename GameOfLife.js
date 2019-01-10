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
  
  // We will come back to this one to check
  toggleCell(row, col) {
    if (this.board[row][col] === 0) this.board[row][col] = 1;
    else this.board[row][col] = 0
    return this.board;
  }
  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    let counter = 0
      counter +=this.board[row-1][col-1];
      counter +=this.board[row-1][col];
      counter +=this.board[row-1][col+1];
      counter +=this.board[row][col-1];
      counter +=this.board[row][col+1];
      counter +=this.board[row+1][col-1];
      counter +=this.board[row+1][col];
      counter +=this.board[row+1][col+1];
    return counter;
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    this.board = newBoard;
    console.log(this.board)
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    //this.board = this.livingNeighbors(row, col);
    return this.board;
  }
}


// livingNeighbors(row, col) {
//   // TODO: Return the count of living neighbors.
//   const newBoard = this.makeBoard(row, col);
//   const counter = livingNeighbors();
  
//   let value;
//   let iIndex;
//   let jIndex;
  
//   for (let i = 0; i < this.height; i++) {
//     let counter = 0;

//     for (let j = 0; j < this.width; j++) {
//       iIndex = i;
//       jIndex = j;
//       counter +=this.board[i-1][j-1];
//       counter +=this.board[i-1][j];
//       counter +=this.board[i-1][j+1];
//       counter +=this.board[i][j-1];
//       counter +=this.board[i][j+1];
//       counter +=this.board[i+1][j-1];
//       counter +=this.board[i+1][j];
//       counter +=this.board[i+1][j+1];
     
//       if (this.board[i][j] === 1) {
//         value = 1;
//       } else {
//         value = 0;
//     }

//     }
//     if (value === 1 && (counter < 2 || counter > 3)) {
//       newBoard.board[iIndex][jIndex] = 0
//       return newBoard.board;
//     } else if (value === 0 && counter === 3) {
//       newBoard.board[iIndex][jIndex] = 1;
//       return newBoard.board;
//     } else {
//       newBoard.board[iIndex][jIndex] = value;
//       return newBoard.board;
//     }
//   }
// }

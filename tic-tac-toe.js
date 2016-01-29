var possiblePlayersOne = [
  {
    name: "Ann",
    pictureURL: "images/ann.png"
  },
  {
    name: "Lucille",
    pictureURL: "images/lucille.png"
  },
  {
    name: "G.O.B.",
    pictureURL: "images/gob.jpg"
  },
  {
    name: "Buster",
    pictureURL: "images/buster.jpg"
  },
  {
    name: "Tobias",
    pictureURL: "images/tobias.jpg"
  },
];

var possiblePlayersTwo = [
  {
    name: "George Michael",
    pictureURL: "images/georgemichael.png"
  },
  {
    name: "George Sr.",
    pictureURL: "images/georgesr.jpg"
  },
  {
    name: "Lindsay",
    pictureURL: "images/lindsay.jpg"
  },
  {
    name: "Michael",
    pictureURL: "images/michael.jpg"
  },
  {
    name: "Maeby",
    pictureURL: "images/maeby.png"
  },
];

function TicTacToe() {
  this.board = [[0,0,0], [0,0,0], [0,0,0]];
  this.playerOne = possiblePlayersOne[Math.floor(Math.random() * possiblePlayersOne.length)]; // random from group 1
  this.playerTwo = possiblePlayersTwo[Math.floor(Math.random() * possiblePlayersTwo.length)]; // random from group 2
  this.currentPlayer = this.playerOne;
  this.turns = 0;
  this.over = false;
}

TicTacToe.prototype.updateBoard = function(square) {
  switch ($(square).attr('id')) {
    case "top-left":
      this.board[0][0] = this.currentPlayer;
      break;
    case "top-mid":
      this.board[0][1] = this.currentPlayer;
      break;
    case "top-right":
      this.board[0][2] = this.currentPlayer;
      break;
    case "mid-left":
      this.board[1][0] = this.currentPlayer;
      break;
    case "mid-mid":
      this.board[1][1] = this.currentPlayer;
      break;
    case "mid-right":
      this.board[1][2] = this.currentPlayer;
      break;
    case "bottom-left":
      this.board[2][0] = this.currentPlayer;
      break;
    case "bottom-mid":
      this.board[2][1] = this.currentPlayer;
      break;
    case "bottom-right":
      this.board[2][2] = this.currentPlayer;
      break;
  }
};

TicTacToe.prototype.play = function() {
  if (this.gameOver() === false) {
    this.switchPlayer();
  } else if (this.gameOver() === true) {
    this.over = true;
    $("body").append("<h2>It's a draw... I guess you could say you're tie-curious...</h2>");
  } else if (this.gameOver().name === "Ann") {
    this.over = true;
    $("body").append("<h2>Her?</h2>");
  } else {
    this.over = true;
    $("body").append("<h2>fAmily LOVe " + this.gameOver().name +  "!</h2>");
  }
};

TicTacToe.prototype.gameOver = function() {
  var b = this.board;
  var one = this.playerOne;
  var two = this.playerTwo;

  // variables for the board
  var topLeft = b[0][0], topMid = b[0][1], topRight = b[0][2]; // top
  var midLeft = b[1][0], midMid = b[1][1], midRight = b[1][2]; // middle
  var bottomLeft = b[2][0], bottomMid = b[2][1], bottomRight = b[2][2]; // bottom


  // player one wins vertically
  if (topLeft === one && midLeft === one && bottomLeft === one) {
    return one;
  } else if (topMid === one && midMid === one && bottomMid === one) {
    return one;
  } else if (topRight === one && midRight === one && bottomRight === one) {
    return one;
  }

  // player two wins vertically
  if (topLeft === two && midLeft === two && bottomLeft === two) {
    return two;
  } else if (topMid === two && midMid === two && bottomMid === two) {
    return two;
  } else if (topRight === two && midRight === two && bottomRight === two) {
    return two;
  }

  // player one wins horizontally
  if (topLeft === one && topMid === one && topRight === one) {
    return one;
  } else if (midLeft === one && midMid === one && midRight === one) {
    return one;
  } else if (bottomLeft === one && bottomMid === one && bottomRight === one) {
    return one;
  }

  // player two wins horizontally
  if (topLeft === two && topMid === two && topRight === two) {
    return two;
  } else if (midLeft === two && midMid === two && midRight === two) {
    return two;
  } else if (bottomLeft === two && bottomMid === two && bottomRight === two) {
    return two;
  }

  // player one wins diagonally
  if (topLeft === one && midMid === one && bottomRight === one) {
    return one;
  } else if (topRight === one && midMid === one && bottomLeft === one) {
    return one;
  }

  // player two wins diagonally
  if (topLeft === two && midMid === two && bottomRight === two) {
    return two;
  } else if (topRight === two && midMid === two && bottomLeft === two) {
    return two;
  }

  // there's a draw if no one has won after 9 turns
  if (this.turns > 8) {
    return true;
  } else {
    return false;
  }
};

TicTacToe.prototype.switchPlayer = function () {
  if (this.currentPlayer === this.playerOne) {
    this.currentPlayer = this.playerTwo;
  } else {
    this.currentPlayer = this.playerOne;
  }
};

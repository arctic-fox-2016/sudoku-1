"use strict"

class Sudoku {
  constructor(board_string) {

    // Initiate constructors
    this._board_string = board_string;
    this._board_string_arr = [];
    this._board_string_check_pos = [];
    this._end_pos = 0;

    // i: Position of integer on sudoku 81 string
    // pos: Position of integer on sudoku board
    // val: Value of integer on sudoku board

    // Translate string to array
    var row = -1;
    for (var i = 0; i < this._board_string.length; i++) {

      // Push every row into board string array
      if (i % 9 == 0) {
        this._board_string_arr.push([]);
        row++;
      }

      // Create separate array of empty cells to check
      if (this._board_string[i] == 0) {
        this._board_string_check_pos.push([Math.floor(i / 9), i % 9]); // Store empty cells position
        this._end_pos++;
      }
      this._board_string_arr[row].push(this._board_string[i]);
    }

    console.log("\x1B[2J");
    console.log("Solving for " + this._end_pos + " unknown variables ...");
  }

  solve() {
    // Initiate variables
    var pos = 0;
    var row = 0;
    var col = 0;
    var val = 0;
    var numText = "";
    var endPos = this._end_pos;

    // Get all integers possible to solve sudoku board
    for (var num = Math.pow(10, endPos - 1); num < Math.pow(10, endPos); num++) {

      // Convert big ass long integer to string
      numText = num.toString();
      var matchZero = new RegExp("0", "g")
      if (numText.match(matchZero) != null) {
        numText = numText.replace(/0/g, "1")
        num = numText;
        continue;
      }

      // Loop through every digit of big ass integer
      for (var i = 0; i < numText.length; i++) {

        // Insert value into string check array
        this._board_string_arr[this._board_string_check_pos[i][0]][this._board_string_check_pos[i][1]] = numText[i];
      }

      pos++;

      if (this.check() == false) {
        continue;
      } else {
        return true
      }
    }

    return false;
  }

  check() {
    for (var row = 0; row < 9; row++) {
      for (var col = 0; col < 9; col++) {
        for (var val = 1; val <= 9; val++) {
          var re = new RegExp(val, "g");
          var temp = "";

          // Check horizontal
          temp = this._board_string_arr[row].join();
          if (temp.match(re) != null && temp.match(re).length > 1) {
            return false;
          }

          // Check vertical
          temp = "";
          for (var i = 0; i < 9; i++) {
            temp += this._board_string_arr[i][col];
          }
          if (temp.match(re) != null && temp.match(re).length > 1) {
            return false;
          }

          // Check within box
          temp = "";
          var i = Math.floor(row / 3) * 3;
          var j = Math.floor(col / 3) * 3;
          var iEnd = i + 3;
          var jEnd = j + 3;

          for (i; i < iEnd; i++) {
            for (j; j < jEnd; j++) {
              temp += this._board_string_arr[i][j];
            }
            j = Math.floor(col / 3) * 3;
          }
          if (temp.match(re) != null && temp.match(re).length > 1) {
            return false;
          }
        }
      }
    }

    return true;
  }

  // Returns a string representing the current state of the board
  board() {
    console.log("");
    var output = "-------------------------\n";
    for (var row = 0; row < 9; row++) {
      output += "| ";
      for (var col = 0; col < 9; col++) {
        output += this._board_string_arr[row][col] + " ";
        if ((col + 1) % 3 == 0) {
          output += "| ";
        }
      }
      output += "\n";
      if ((row + 1) % 3 == 0) {
        output += "-------------------------\n"
      }
    }

    return output;
  }
}

// The file has newlines at the end of each line, so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku("003456789456789123789120056234567891567891230091234567345678912678912345912345600");

// var game = new Sudoku("105802000090076405200400819019007306762083090000061050007600030430020501600308900");

// Remember: this will just fill out what it can and not "guess"
game.solve();

console.log(game.board());

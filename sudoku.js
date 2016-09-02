"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
    this.board1 = []
  }

  solve() {}

  // Returns a string representing the current state of the board
  // row(number){
  //   this.row =[]
  //   for(var i = 0; i <= 8;i++ ){
  //     this.row[i] = this.digit(number*9*i)
  //   }
  //   return this.row
  // }

  board() {
   let row = []
   let board1 = []
   let idx   = 0
   for (let i=0; i<9; i++){
     for (let j=0; j<9; j++){
       row.push(this.board_string[idx])
       idx++

     }
     board1.push(row)
     row=[]
   }

   return board1
 }

  display(){}
  //   let line = []
  //   for(let j = 0; j <= 8; j++){
  //     if((j+1)%3==0){
  //       line[i]=line[i]+this.board[i][j]+"|"
  //
  //   }else {
  //     line[i]=line[i]+this.board[i][j]+" "
  //   }
  //   console.log(line);
  //   }
  // }
}



console.log("---------------------------------------------------");
// The file has newlines at the end of each line, so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.solve()

// console.log(game.board())
console.log(game.board());


console.log("---------------------------------------------------");

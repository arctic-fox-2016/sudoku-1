"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string;
    this.row = [];
    this.column = [];
    this.index = 0;
    this.temp = "";
  }
  solve() {

    console.log("Final")
  for(var idx = 0;idx<this.column.length;idx++){
    for(var idy=0;idy<this.column.length;idy++)
    {
      if(this.column[idy][idx] == this.column[idx][idy])
      {
        for(var i=0;i<this.column.length;i++){
        if(this.column[idx][i] == this.column[idy][i])
        break
      }
        this.column[idx][idy] = ''+this.temp;
      }
    }
  }
    console.log(this.column)
  }
  board() {
    console.log("Before")
    for(var i=0;i<9;i++)
    {
      for(var j=0;j<9;j++)
      {
        this.row.push(this.board_string[this.index]);
        this.index++;
      }
      this.column.push(this.row)
      this.row=[]
    }
    return this.column
}

    randomNumber()
    {
      for(var idx=0;idx<this.column.length;idx++)
      {
        for(var idy=0;idy<this.column.length;idy++){
         if(this.column[idx][idy] == 0)
         {
           let randNumber = Math.floor((Math.random()*9)+1);
           this.column[idx][idy] = ''+randNumber
           this.temp = randNumber
           //console.log(this.temp)
         }
      }
      }
      console.log("Process Randomization")
      console.log(this.column)
    }
}
  // compare()
  // {
  //   let randNumber = Math.floor((Math.random()*10)+1);
  //   for(let idx = 0;idx < matrix[0].length;idx++)
  //   {
  //       for(let idy=0;idy<matrix[0].length;idy++)
  //       {
  //     if(matrix[idx][idy] != randNumber)
  //     {
  //       matrix[idx][idy] = randNumber;
  //
  //     }
  //       }
  //   }
  // }
// The file has newlines at the end of each line, so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]
var game = new Sudoku(board_string)
// Remember: this will just fill out what it can and not "guess"

console.log(game.board())
game.randomNumber()
game.solve()

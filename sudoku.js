"use strict"

class Sudoku {
  constructor(board_string) {
    this.boardString = board_string
    this.papan = []
  }

  solve() {}

  board() {
    let barisMatriks = [] //barisMatrix
    let papanTampil = [] //papan yang
    let idx   = 0
    let papanConsole =[]
    for (let i=0; i<9; i++){
      for (let j=0; j<9; j++){
        barisMatriks.push(this.boardString[idx])
        idx++
      }
      papanTampil.push(barisMatriks)
      barisMatriks=[]
    }
    for (let j = 0; j < 9; j++) {
      for (var i = 0; i < 9 ; i++) {
        if (i%3==0) {
          papanConsole[i] = papanTampil[i][j].split("")+"|"
        }else {
          papanConsole[i] = papanTampil[i][j].split("")
        }
      }
    }

    for (let i =0; i<9; i++){
        console.log(papanTampil[0][i]+" "+papanTampil[1][i]+" "+papanTampil[2][i]+" "+papanTampil[3][i]+" "+papanTampil[4][i]+" "+papanTampil[1][i]+" "+papanTampil[2][i]+" "+papanTampil[3][i]+" "+papanTampil[4][i]);
    }
    return papanTampil
    return papanConsole

  }
}
console.log("________________sudoku_________________________________");
// The file has newlines at the end of each line, so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
.toString()
.split("\n")[0]

var game = new Sudoku(board_string)
game.solve()
// Remember: this will just fill out what it can and not "guess"
//game.solve()

console.log(game.board())
console.log("______________________________________________________");

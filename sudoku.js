"use strict"

class Sudoku {
  constructor(board_string) {

  }

  solve() {

  }

  // Returns a string representing the current state of the board
  board() {


  }
}
//
// // The file has newlines at the end of each line, so we call split to remove it (\n)
// var fs = require('fs')
// var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
//   .toString()
//   .split("\n")[0]
//
// var game = new Sudoku(board_string)
//
// // Remember: this will just fill out what it can and not "guess"
// game.solve()
//
// console.log(game.board())
//




  let sudoku_2_chooseoal = (soal) => {

    let noSoal = soal*81;
    let start =0
    let end = 0
    let word = ""
    let words ="105802000090076405200400819019007306762083090000061050007600030430020501600308900005030081902850060600004050007402830349760005008300490150087002090000600026049503105802000090076405200400819019007306762083090000061050007600030430020501600308900005030081902850060600004050007402830349760005008300490150087002090000600026049503290500007700000400004738012902003064800050070500067200309004005000080700087005109080020000040500320020309046600090004000640501134050700360004002407230600000700450608730000200000460000064820080005701900618004031000080860200039050000100100456200370000001000700005408061090000010000050090460086002030000000000694005203800149500000689100800000029150000008403000050200005000090240801084700910500000060060410000030500804504200010008009000790806103000005400050000007800000702000704600610300500096040001100060004504810390007950043030080000405023018010630059059070830003590007000075400000000008080190000300001060000000034000068170204000603900000020530200000300000000050703008000028070700000043000000000003904105400300800100040000968000200302609005500730000000000900000940000000000109000057060008500006000000003019082040"


    if (soal == 1 ){
      start = 0
      end = start+81
      word = words.substring(start,end)

    } else{
      start = (soal-1)*81+1
      end = start+81
      word = words.substring(start,end)
      //console.log(word);

    }
    sudoku_2_board(word);
    }


  let sudoku_2_board = (value) => {
    console.log('----------')
    for (let i=1;i<10;i++) {
      let formated = value.substring((i-1)*9,((i-1)*9)+9)
      formated = formated.split("").splice(3,0,"|").splice(6,0,"|").join("|")
      console.log(formated)
      console.log('----------')
    }
  }



sudoku_2_chooseoal(1)

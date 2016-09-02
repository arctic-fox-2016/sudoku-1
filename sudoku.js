"use strict"
let array3 = []
let array4 = []
let array5 = []
let array6 = []
let array7 = []
let array8 = []
let array9 = []
let array10 = []
let array11 = []
let arrayBig = []

class Sudoku {
  constructor(board_string) {
    this.arrayBoard = board_string;

  }


  // Returns a string representing the current state of the board
  board() {

    for(let i=0; i<9; i++) {
      let value = board_string[i]
        array3.push(value);}
        // console.log(array3)

    for(let i=9; i<18; i++) {
        let value = board_string[i]
        array4.push(value);}
        // console.log(array4)
    for(let i=18; i<27; i++) {
        let value = board_string[i]
        array5.push(value);}
        // console.log(array5)
    for(let i=27; i<36; i++) {
        let value = board_string[i]
        array6.push(value);}
        // console.log(array6)
    for(let i=36; i<45; i++) {
      let value = board_string[i]
        array7.push(value);}
        // console.log(array7)
    for(let i=45; i<54; i++) {
        let value = board_string[i]
        array8.push(value);}
        // console.log(array8)
    for(let i=54; i<63; i++) {
        let value = board_string[i]
        array9.push(value);}
        // console.log(array9)
    for(let i=63; i<72; i++) {
        let value = board_string[i]
        array10.push(value);}
        // console.log(array10)
    for(let i=72; i<81; i++) {
        let value = board_string[i]
        array11.push(value);
      }
        // console.log(array11)

    arrayBig.push(array3);
    arrayBig.push(array4);
    arrayBig.push(array5);
    arrayBig.push(array6);
    arrayBig.push(array7);
    arrayBig.push(array8);
    arrayBig.push(array9);
    arrayBig.push(array10);
    arrayBig.push(array11);
    return arrayBig
        console.log(arrayBig);
  }

//   solve() {
//
//     //Cek angka 0 di dalam array
//     for (let i=0; i<10; i++) {
//       if (array3[i] == 0) {
//         array3.replace(0,"text")
//       }
//       console.log(array3)
//   }
//     // replace angka 0 di dalam array
// }
}


  let fs = require('fs')
  let board_string = fs.readFileSync('set-01_sample.unsolved.txt')
    .toString()
    .split("\n")[0]
// The file has newlines at the end of each line, so we call split to remove it (\n)


let game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
// game.solve()


console.log(game.board())
// console.log(game.solve())

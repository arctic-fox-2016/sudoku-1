"use strict"

class Sudoku {
  constructor(board_string) {
    this.boardString = board_string
  }

  solve() {
    let papan = this.board()
    let arrSemuaPosisiKosong = this.cariPosisiAngka0(papan)
    let randomIsian = this.randomAngka1Sampai9()

    // 0,1
    // bikin 3 function
      // cek baris. ad duplicate ? ada -> true   . else false
      // cel kolom. ad duplicate ? ada -> true   . else false
      // cek kotak kecil , ada duplikat ? ada -> true    . else false

    console.log(papan)




    //console.log(arrSemuaPosisiKosong)
    //console.log(this.cariPosisiAngka0(papan))
    this.cekDuplikatBaris()
    this.cekDuplikatKolom()

  }

  cekDuplikatKotakKecil(arrPosisi = [0,0]){

  }

  cekDuplikatKolom(arrPosisi = [0,0]){
    let baris = arrPosisi[0]
    let kolom = arrPosisi[1]
    let isi   = this.board()[baris][kolom]
    let jumlah = 0
    for(let a=0;a<9;a++){
      if(this.board()[a][kolom] == isi){
          jumlah++
      }
    }
    if (jumlah>1){
      console.log("baris " + baris +" kolom " + kolom+ " isi angka : " + isi + " cek duplikat kolom? : " + true)
      return true
    }
    else{
      console.log("baris " + baris +" kolom " + kolom+ " isi angka : " + isi + " cek duplikat kolom? : " + false)
      return false
    }
      }

  cekDuplikatBaris(arrPosisi=[0,0]){
    let baris = arrPosisi[0]
    let kolom = arrPosisi[1]
    let isi   = this.board()[baris][kolom]
    let jumlah = 0
    for(let a=0;a<9;a++){
      if(this.board()[baris][a] == isi){
          jumlah++
      }
    }
    if (jumlah>1){
      console.log("baris " + baris +" kolom " + kolom+ " isi angka : " + isi + " cek duplikat baris? : " + true)
      return true
    }
    else{
      console.log("baris " + baris +" kolom " + kolom+ " isi angka : " + isi + " cek duplikat baris? : " + false)
      return false
    }
  }

  randomAngka1Sampai9(){
    return Math.floor(Math.random() * (9 - 1 + 1)) + 1
  }

  cariPosisiAngka0(papan){
      let baris = []
      let kolom = []
      let kosong = []
      let posisiKosong = []
      let semuaPosisiKosong = []
      for (let i=0; i<9; i++){
          for (let j=0; j<9; j++){
            if(papan[i][j]==0){
              posisiKosong.push(i)
              posisiKosong.push(j) // 0,1,0,4
              semuaPosisiKosong.push(posisiKosong)
              posisiKosong = []
            }
          } // [0,1]  -> [[0,1],[0,4],[0,7],[0,8]]
      }
      return semuaPosisiKosong
      //console.log(papan)
      //console.log(semuaPosisiKosong);
      // [ [0,1] --> [i,j] , [1,1] ]
  }
  // Returns a string representing the current state of the board
  // 105802000090076405200400819019007306762083090000061050007600030430020501600308900
  // 105802000
  // 0123456789

  board() {
    let baris = []
    let papan = []
    let idx   = 0
    for (let i=0; i<9; i++){
        for (let j=0; j<9; j++){
            baris.push(this.boardString[idx])
            idx++
            //baris [0,5,7,3,5,6,8,9]
        }
        papan.push(baris)
        //papan -> [  [0,1,2,4,56,6,7],
        //            [2.3.4.5.6,6,6,]]
        baris=[]
    }
    return papan
  }
}

// The file has newlines at the end of each line, so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)
game.solve()
// Remember: this will just fill out what it can and not "guess"
//game.solve()

//console.log(game.board())

"use strict"

const KOTAK_KIRI_ATAS   =[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
const KOTAK_TENGAH_ATAS =[[0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]
const KOTAK_KANAN_ATAS  =[[0,6],[0,7],[0,8],[1,6],[1,7],[1,8],[2,6],[2,7],[2,8]]
const KOTAK_TENGAH_KIRI =[[3,0],[3,1],[3,2],[4,0],[4,1],[4,2],[5,0],[5,1],[5,2]]
const KOTAK_TENGAH      =[[3,3],[3,4],[3,5],[4,3],[4,4],[4,5],[5,3],[5,4],[5,5]]
const KOTAK_TENGAH_KANAN=[[3,6],[3,7],[3,8],[4,6],[4,7],[4,8],[5,6],[5,7],[5,8]]
const KOTAK_KIRI_BAWAH  =[[6,0],[6,1],[6,2],[7,0],[7,1],[7,2],[8,0],[8,1],[8,2]]
const KOTAK_TENGAH_BAWAH=[[6,3],[6,4],[6,5],[7,3],[7,4],[7,5],[8,3],[8,4],[8,5]]
const KOTAK_KANAN_BAWAH =[[6,6],[6,7],[6,8],[7,6],[7,7],[7,8],[8,6],[8,7],[8,8]]


class Sudoku {
  constructor(board_string) {
    this.boardString = board_string
    this.papan = []
  }

  solve() {
    this.papan = this.board()
    let arrSemuaPosisiKosong = this.arrSemuaPosisiKosong(this.papan)
    let randomIsian = this.randomAngka1Sampai9()
    let awalnya  = 0
    let akhirnya = arrSemuaPosisiKosong.length
    let total    = false
    // 0,1
    // bikin 3 function
    // cek baris. ad duplicate ? ada -> true   . else false
    // cel kolom. ad duplicate ? ada -> true   . else false
    // cek kotak kecil , ada duplikat ? ada -> true    . else false
    console.log("akhirnya :"+akhirnya )
    while(awalnya!=akhirnya){
      for(var a = 0 ; a<akhirnya ; a++){
      if(this.rubahAngka(arrSemuaPosisiKosong[a]))awalnya++
      }
    }


    //console.log(arrSemuaPosisiKosong[0])

    //console.log(this.cariPosisiAngka0(papan))


  }

  rubahAngka(arrPosisi){
    let baris = arrPosisi[0]
    let kolom = arrPosisi[1]
    let isi   = this.papan[baris][kolom]
    let duplikatBaris = true
    let duplikatKolom = true
    let duplikatKotakKecil = true

    console.log(this.papan);

    while(duplikatBaris || duplikatKolom || duplikatKotakKecil)
    {
      console.log("posisi yang mau di cek adalah posisi : "+arrPosisi
                + " baris : " + baris
                + " kolom : " + kolom
                + " yang isinya adalah : "+this.papan[baris][kolom])
      duplikatBaris = this.cekDuplikatBaris(arrPosisi)
      duplikatKolom = this.cekDuplikatKolom(arrPosisi)
      duplikatKotakKecil = this.cekDuplikatKotakKecil(arrPosisi)
      if(duplikatBaris || duplikatKolom || duplikatKotakKecil)this.papan[baris][kolom] = this.randomAngka1Sampai9().toString()
      console.log("setelah random jadinya ")
      console.log(this.papan)
    }
    return true
  }

  cekDuplikatKotakKecil(arrPosisi){
    let kumpulanKoordinat = this.setKumpulanKoordinatKotakKecil(arrPosisi)
    let baris = arrPosisi[0]
    let kolom = arrPosisi[1]
    let isi   = this.papan[baris][kolom]
    let jumlah = 0
    for(let a=0;a<9;a++){
      if(this.papan[kumpulanKoordinat[a][0]][kumpulanKoordinat[a][1]] == isi){
        // console.log(kumpulanKoordinat[a][0] + "," + kumpulanKoordinat[a][1])
        // console.log(this.board()[kumpulanKoordinat[a][0]][kumpulanKoordinat[a][1]])
        jumlah++
      }
    }
    if (jumlah>1){
      console.log("baris " + baris +" kolom " + kolom+ " isi angka : " + isi + " cek duplikat kotak kecil? : " + true)
      return true
    }
    else{
      console.log("baris " + baris +" kolom " + kolom+ " isi angka : " + isi + " cek duplikat kotak kecil? : " + false)
      return false
    }
  }


  cekDuplikatKolom(arrPosisi){
    let baris = arrPosisi[0]
    let kolom = arrPosisi[1]
    let isi   = this.papan[baris][kolom]
    let jumlah = 0
    for(let a=0;a<9;a++){
      if(this.papan[a][kolom] == isi){
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

  cekDuplikatBaris(arrPosisi){
    let baris = arrPosisi[0]
    let kolom = arrPosisi[1]
    let isi   = this.papan[baris][kolom]
    let jumlah = 0
    for(let a=0;a<9;a++){
      if(this.papan[baris][a] == isi){
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

  arrSemuaPosisiKosong(papan){
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

  setKumpulanKoordinatKotakKecil(arrPosisi){
    let baris = arrPosisi[0]
    let kolom = arrPosisi[1]
    if(baris>=0 && baris<=2){
      if(kolom>=0 && kolom<=2){
        return KOTAK_KIRI_ATAS
      }
    }
    if(baris>=0 && baris<=2){
      if(kolom>=3 && kolom<=5){
        return KOTAK_TENGAH_ATAS
      }
    }
    if(baris>=0 && baris<=2){
      if(kolom>=6 && kolom<=8){
        return KOTAK_KANAN_ATAS
      }
    }
    if(baris>=3 && baris<=5){
      if(kolom>=0 && kolom<=2){
        return   KOTAK_TENGAH_KIRI
      }
    }
    if(baris>=3 && baris<=5){
      if(kolom>=3 && kolom<=5){
        return   KOTAK_TENGAH
      }
    }
    if(baris>=3 && baris<=5){
      if(kolom>=6 && kolom<=8){
        return   KOTAK_TENGAH_KANAN
      }
    }
    if(baris>=6 && baris<=8){
      if(kolom>=0 && kolom<=2){
        return   KOTAK_KIRI_BAWAH
      }
    }
    if(baris>=6 && baris<=8){
      if(kolom>=3 && kolom<=5){
        return   KOTAK_TENGAH_BAWAH
      }
    }
    if(baris>=6 && baris<=8){
      if(kolom>=6 && kolom<=8){
        return   KOTAK_KANAN_BAWAH
      }
    }
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


let sudoku_2_chooseoal = (soal) => {

  let noSoal = soal*81;
  let start =0
  let end = 0
  let word = ""
  var fs = require('fs')
  var words = fs.readFileSync('set-01_sample.unsolved.txt')
    .toString().split("\n").join("")
  if (soal == 1 ){
    start = 0
    end = start+81
    word = words.substring(start,end).split("")

  } else{
    start = (soal-1)*81
    end = start+81
    word = words.substring(start,end).split("")
    //console.log(word);
  }
  sudoku_board(word,9,9);
}

let sudoku_board = (value,baris,kolom) =>{
  //write your code here
  var chunk = baris;
  var sudokuboard = [];
  var length = baris*kolom

  for (var i=0;i< length;i+=chunk)
  {
    //console.log(value.slice(i,i+chunk))
    sudokuboard.push(value.slice(i,i+chunk))

  }

  //  console.log(sudokuboard);
    console.log("========SUDOKU BOARD=============");
    for (i=0;i<9;i++){
      sudokuboard[i].splice(6,0,"||")
      sudokuboard[i].splice(3,0,"||")
      console.log(sudokuboard[i].join("  ").replace(/0/g," "));
      if((i+1)%3===0 && i!=0) console.log("=================================");
    }

}



//word_random("ABASASCJASDJASDJASDJASJD");

//sudoku_board("003020600900305001001806400008102900700000008006708200002609500800203009005010300200080300060070084030500209000105408000000000402706000301007040720040060004010003",9,9)

var word = "asdasjklxzcjkljklxzcjklkladsxzcmqweiiqweasd"
console.log(word.slice(1,5))



sudoku_2_chooseoal(8)

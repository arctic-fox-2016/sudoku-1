

let sudokuboard = [];
let unfilled = []
let solve2 = () =>{
  for (var i = 0; i < unfilled.length; i++) {
    solverecursive(sudokuboard,+unfilled[i][0],+unfilled[i][1],i)
  }
  // let x = unfilled[0][0]
  // let y = unfilled[0][1]
  // let i = 0
  // //console.log(x,y)
  // solverecursive(sudokuboard,x,y,i)
  // solverecursive(sudokuboard,0,5,1)
  // solverecursive(sudokuboard,0,6,2)
  // solverecursive(sudokuboard,0,7,3)
  // solverecursive(sudokuboard,0,8,4)
  // printsolved()
}
let solverecursive = (sudokuboard,x,y,i) =>{
  let checknumber = checkRowCol(x,y)
  //console.log(checknumber.join(","))
  checknumber = checksub(checknumber,(~~(x/3))*3,(~~(y/3))*3)
  console.log(checknumber.join(","))
//   if(checknumber){
//   for (var i = 0; i < checknumber.length; i++) {
//
//   }
// }
//console.log("sub",checknumber.join(","))

if(checknumber){
  let ans = checknumber.pop()
  console.log("isi",x,y,"dengan",ans)
  //sudokuboard[x][y] = ans
}

}
//chek baris kolom apakah sudah penuh 1 s/d 9
let checkRowCol = (x,y) =>{
  let result = ['1','2','3','4','5','6','7','8','9']
  for (var i = 0; i < 9; i++) {
    //hapus result jika pada baris terisi
    if(sudokuboard[x][i] != '0' && result.indexOf(sudokuboard[x][i]) >=0){
// console.log(sudokuboard[x][i])
// console.log(result.indexOf(sudokuboard[x][i]))
    result.splice(result.indexOf(sudokuboard[x][i]),1)
    // console.log(result.join(","))
    // console.log(sudokuboard[x][i])
  }
    //hapus result jika pada kolom terisi
    if(sudokuboard[i][y] != '0' && result.indexOf(sudokuboard[i][y]) >=0){
    result.splice(result.indexOf(sudokuboard[i][y]),1)
    // console.log(result.join(","))
    // console.log(sudokuboard[i][y])
  }
    }
    // console.log("result",result.join(","))
    if(result.length > 0){
      return result
    } else{
      return false
    }
}
let checksub = (arrayRC,xsub,ysub) => {

  for (var i = 0; i < 9; i++) {
    // console.log(i)
    // console.log(sudokuboard[xsub+(~~(i/3))][(i%3)+ysub])
    if(sudokuboard[xsub+(~~(i/3))][(i%3)+ysub]!='0' && arrayRC.indexOf(sudokuboard[xsub+(~~(i/3))][(i%3)+ysub]) >= 0){
      arrayRC.splice(arrayRC.indexOf(sudokuboard[xsub+(~~(i/3))][(i%3)+ysub]),1)


    }
  }
  return arrayRC
}

let printsolved = () => {

  console.log("============SUDOKU SOLVED================");

  for(let i=0;i<9;i++){ // isi baris
    let number = [1,2,3,4,5,6,7,8,9] //
    for (let k = 0; k < 9; k++) { // check baris
      if(sudokuboard[i][k] != '0')   number.splice(number.indexOf(+(sudokuboard[i][k])),1)
    }

    for(let j=0;j<9;j++) {
      if(sudokuboard[i][j] ==='0'){
        sudokuboard[i][j] = String(number.pop())
      }


    }
    //sudokuboard[0][i-1] += i
sudokuboard[i].splice(9,0,"||")
sudokuboard[i].splice(6,0,"||")
sudokuboard[i].splice(3,0,"||")
sudokuboard[i].splice(0,0,"||")
  console.log(sudokuboard[i].join("  "));
  if((i+1)%3===0 && i!=0) console.log("=========================================");

  }
  // console.log(sudokuboard);



  // for (i=0;i<9;i++){
  //   console.log(sudokuboard[i].join("  ").replace(/0/g," "));
  //   if((i+1)%3===0 && i!=0) console.log("=========================");
  // }

}


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

  var length = baris*kolom
  sudokuboard = []
  for (var i=0;i< length;i+=chunk)
  {
    //console.log(value.slice(i,i+chunk))
    sudokuboard.push(value.slice(i,i+chunk))
    sudokuboard[i/9].map((x,j)=>{if(x==='0'){unfilled.push([i/9,j]);return " "}else{return x}})

  }
  let temptBoard =[]
  //  console.log(sudokuboard);
  console.log("=============SUDOKU BOARD================")
  for (i=0;i<9;i++){
    temptBoard.push(sudokuboard[i].slice())



    temptBoard[i].splice(9,0,"||")
    temptBoard[i].splice(6,0,"||")
    temptBoard[i].splice(3,0,"||")
    temptBoard[i].splice(0,0,"||")

    //sudokuboard[i].splice(3,0,"||")
    console.log(temptBoard[i].join("  "))
    if((i+1)%3===0 && i!=0) console.log("=========================================")
  }

}



//word_random("ABASASCJASDJASDJASDJASJD");

//sudoku_board("003020600900305001001806400008102900700000008006708200002609500800203009005010300200080300060070084030500209000105408000000000402706000301007040720040060004010003",9,9)


sudoku_2_chooseoal(1)
solve2()
sudoku_2_chooseoal(2)
solve2()
sudoku_2_chooseoal(3)
solve2()
sudoku_2_chooseoal(4)
solve2()
sudoku_2_chooseoal(5)
solve2()
sudoku_2_chooseoal(6)
solve2()

/*
Algorithm I worked with with two others (Hossein and Titkova).
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
 
Example 1:
Original Board:
=======================
0 1 0
0 0 1
1 1 1
0 0 0
Next Board:
=======================
0 0 0
1 0 1
0 1 1
0 1 0
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
Example 2:
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
 
Constraints:
m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.
 
Follow up:
Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?
*/

/*
0 1 0
0 0 1
1 1 1
0 0 0
*/

/*
  ROW-1,COL-1     ROW-1    ROW-1,COL+1
  COL-1           CENTER   COL+1
  ROW+1,COL-1     ROW+1    ROW+1,COL+1
*/ 

var gameOfLife = function (board) {
  function isValidCell(row, col) {
    return row >= 0 && row < board.length && col >= 0 && col < board[0].length;
  }
  
  rows=board.length;
  cols=board[0].length;
  numbofneighborsboards=new Array(rows);
  for(i=0;i<rows;i++) {
   numbofneighborsboards[i]=new Array(cols).fill(0);
  }

  
  for(row=0;row<rows;row++){
    for(col=0;col<cols;col++){
      neighbourcount=0;
      if(isValidCell(row-1, col) && board[row-1][col]==1) neighbourcount++;
      if(isValidCell(row, col-1) && board[row][col-1]==1) neighbourcount++;
      if(isValidCell(row, col+1) && board[row][col+1]==1) neighbourcount++;
      if(isValidCell(row+1, col)  && board[row+1][col]==1) neighbourcount++;
      if(isValidCell(row-1, col-1) && board[row-1][col-1]==1) neighbourcount++;
      if(isValidCell(row-1, col+1) && board[row-1][col+1]==1) neighbourcount++;
      if(isValidCell(row+1, col-1)  && board[row+1][col-1]==1) neighbourcount++;
      if(isValidCell(row+1, col+1) && board[row+1][col+1]==1) neighbourcount++;


      numbofneighborsboards[row][col]=neighbourcount;
    }
  }
  for(row=0;row<rows;row++){
    for(col=0;col<cols;col++){
      currneighbor=numbofneighborsboards[row][col];
     if((currneighbor<2 || currneighbor>3)&&board[row][col]==1){ 
       board[row][col]=0;
     }
      
     if(board[row][col]==0 && currneighbor==3){
       board[row][col]=1;
     }
    }
  }
}

function printBoard(board) {
  for (let row of board) {
    for (let col of row) {
      process.stdout.write(col + ' ');
    }
    process.stdout.write('\n');
  }
}


  const board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ];

  process.stdout.write('Original Board: \n');
  process.stdout.write('=======================\n');
  printBoard(board);

  gameOfLife(board);

  process.stdout.write('\nNext Board: \n');
  process.stdout.write('=======================\n');
  printBoard(board);

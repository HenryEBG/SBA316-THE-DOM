
let count;
//function that count coins to the right horizontalle 
//of the actual coin 
function horizontalRight(player, row, column,digitalBoard) {
  
  if (digitalBoard[row][column] === player) {
    count++
  
    if (count < 4 && column < (parseInt(column.value) - 1,digitalBoard)) {
      horizontalRight(player, row, column + 1)
    }
  }
}

//function that count coins to the left horizontally
//of the actual coin
function horizontalLeft(player, row, column,digitalBoard) {
  if (digitalBoard[row][column] === player) {
    count++
    if (count < 4 && column > 0) {
      horizontalLeft(player, row, column - 1,digitalBoard)
    }
  }
}

//function that return true if there are a combination
//horizontally
function horizontal(player, row, column,digitalBoard) {
  count = 1
  if (column < (parseInt(columns.value) - 1)) {
    horizontalRight(player, row, column + 1,digitalBoard)
  }
  if (column > 0 && count < 4) {
    horizontalLeft(player, row, column - 1,digitalBoard)
  }
  if (count == 4) {
    return true
  } else {
    return false
  }
}

export {horizontal,horizontalLeft,horizontalRight};
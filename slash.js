

let count;
//function that count in diagonal from the position up
function slashUp(player, row, column,digitalBoard) {
  if (digitalBoard[row][column] === player) {
    count++
    if (count < 4 && column < (parseInt(columns.value) - 1) && row > 0) {
      slashUp(player, row - 1, column + 1,digitalBoard)
    }
  }
}

//function that count in diagonal form the position down
function slashDown(player, row, column,digitalBoard) {
  if (digitalBoard[row][column] === player) {
    count++
    if (count < 4 && row < (parseInt(rows.value) - 1) && column > 0) {
      slashDown(player, row + 1, column - 1,digitalBoard)
    }
  }
}

//function that returns if there is a combination 4 
//diagonally
function slash(player, row, column,digitalBoard) {
  count = 1
  if (column < (parseInt(columns.value) - 1) && row > 0) {
    slashUp(player, row - 1, column + 1,digitalBoard)
  }
  if (column > 0 && row < (parseInt(rows.value) - 1) && count < 4) {
    slashDown(player, row + 1, column - 1,digitalBoard)
  }
  if (count == 4) {
    return true
  } else {
    return false
  }
}

export {slash};
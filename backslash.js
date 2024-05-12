

let count;
//function that count coins from the actual up left
function backSlashUp(player, row, column,digitalBoard) {
  if (digitalBoard[row][column] === player) {
    count++
    if (count < 4 && column > 0 && row > 0) {
      backSlashUp(player, row - 1, column - 1,digitalBoard)
    }
  }
}


//function count coints form the actual down right
function backSlashDown(player, row, column,digitalBoard) {
  if (digitalBoard[row][column] === player) {
    count++
    if (count < 4 && row < (parseInt(rows.value) - 1) && column < (parseInt(columns.value) - 1)) {
      backSlashDown(player, row + 1, column + 1,digitalBoard)
    }
  }
}


//functions that returns if there a combination in backslash
function backSlash(player, row, column,digitalBoard) {
  count = 1
  if (column > 0 && row > 0) {
    backSlashUp(player, row - 1, column - 1,digitalBoard)
  }
  if (column < (parseInt(columns.value) - 1) && row < (parseInt(rows.value) - 1) && count < 4) {
    backSlashDown(player, row + 1, column + 1,digitalBoard)
  }
  if (count == 4) {
    return true
  } else {
    return false
  }
}

export {backSlash};
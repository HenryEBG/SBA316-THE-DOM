
let count;
//counts how many coins are vertically down recursively
function verticalDown(player, row, column,digitalBoard) {
  if (digitalBoard[row][column] === player) {
    count++
    if (count < 4 && row < (parseInt(rows.value) - 1)) {
      verticalDown(player, row + 1, column,digitalBoard)
    }
  }
}

//function that return if are a vertical winning combination
function vertical(player, row, column,digitalBoard) {
  count = 1
  if (row < (parseInt(rows.value) - 1)) {
    verticalDown(player, row + 1, column,digitalBoard)
  }
  if (count == 4) {
    return true
  } else {
    return false
  }

}

export {vertical};
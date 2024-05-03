/**************************************************
 * 
 *             4 CONECT  GAME
 * 
 ****************************************************/

/************************************************
 * Declaring variables to use in the project
 ***********************************************/
//take an DOM element by ID
const form = document.getElementById("setup")
//takes the elements that I need from the form to define the board
const columns = form.elements["columns"]
const rows = form.elements["rows"]
const player1 = form.elements["player1"]
const player2 = form.elements["player2"]
const jugar = form.elements["jugar"]

//defining an 2D array to save a digital board to validate the game
const digitalBoard = []

//Using a queryselector I get a div to contain the board added dynamically
const board = document.querySelector("#board");

//variable to indicate the next turn
let playerTurn = 1

//saved true if someone made a 4 line
let win = false

//counts the quantity of movements when the boards is full the game is tied
let quantity = 0

//add a messagin that indicates the next player turn
const playerTurnMessage = document.getElementById("playerTurn")
playerTurnMessage.textContent = `${player1.value} is your turn`

//variable to count # of coins in a row/column/diagonal
let count

//counts how many coins are vertically down recursively
function verticalDown(player, row, column) {
  if (digitalBoard[row][column] === player) {
    count++
    if (count < 4 && row < (parseInt(rows.value) - 1)) {
      verticalDown(player, row + 1, column)
    }
  }
}

//function that return if are a vertical winning combination
function vertical(player, row, column) {
  count = 1
  if (row < (parseInt(rows.value) - 1)) {
    verticalDown(player, row + 1, column)
  }
  if (count == 4) {
    return true
  } else {
    return false
  }

}

//function that count coins to the right horizontalle 
//of the actual coin 
function horizontalRight(player, row, column) {
  console.log(count, row, column, player, digitalBoard[row][column])
  console.log(`${digitalBoard[row][column] === player}`)
  if (digitalBoard[row][column] === player) {
    count++
    console.log(count)
    if (count < 4 && column < (parseInt(column.value) - 1)) {
      horizontalRight(player, row, column + 1)
    }
  }
}

//function that count coins to the left horizontally
//of the actual coin
function horizontalLeft(player, row, column) {
  if (digitalBoard[row][column] === player) {
    count++
    if (count < 4 && column > 0) {
      horizontalLeft(player, row, column - 1)
    }
  }
}

//function that return true if there are a combination
//horizontally
function horizontal(player, row, column) {
  count = 1
  if (column < (parseInt(columns.value) - 1)) {
    horizontalRight(player, row, column + 1)
  }
  if (column > 0 && count < 4) {
    horizontalLeft(player, row, column - 1)
  }
  if (count == 4) {
    return true
  } else {
    return false
  }
}

//function that count in diagonal from the position up
function slashUp(player, row, column) {
  if (digitalBoard[row][column] === player) {
    count++
    if (count < 4 && column < (parseInt(columns.value) - 1) && row > 0) {
      slashUp(player, row - 1, column + 1)
    }
  }
}

//function that count in diagonal form the position down
function slashDown(player, row, column) {
  if (digitalBoard[row][column] === player) {
    count++
    if (count < 4 && row < (parseInt(rows.value) - 1) && column > 0) {
      slashDown(player, row + 1, column - 1)
    }
  }
}

//function that returns if there is a combination 4 
//diagonally
function slash(player, row, column) {
  count = 1
  if (column < (parseInt(columns.value) - 1) && row > 0) {
    slashUp(player, row - 1, column + 1)
  }
  if (column > 0 && row < (parseInt(rows.value) - 1) && count < 4) {
    slashDown(player, row + 1, column - 1)
  }
  if (count == 4) {
    return true
  } else {
    return false
  }
}

//function that count coins from the actual up left
function backSlashUp(player, row, column) {
  console.log(count, row, column, player, digitalBoard[row][column])
  console.log(`${digitalBoard[row][column] === player}`)
  if (digitalBoard[row][column] === player) {
    count++
    console.log(count)
    if (count < 4 && column > 0 && row > 0) {
      backSlashUp(player, row - 1, column - 1)
    }
  }
}


//function count coints form the actual down right
function backSlashDown(player, row, column) {
  console.log(count, row, column, player, digitalBoard[row][column])
  console.log(`${digitalBoard[row][column] === player}`)
  if (digitalBoard[row][column] === player) {
    count++
    console.log(count)
    if (count < 4 && row < (parseInt(rows.value) - 1) && column < (parseInt(columns.value) - 1)) {
      backSlashDown(player, row + 1, column + 1)
    }
  }
}

//functions that returns if there a combination in backslash
function backSlash(player, row, column) {
  count = 1
  if (column > 0 && row > 0) {
    backSlashUp(player, row - 1, column - 1)
  }
  if (column < (parseInt(columns.value) - 1) && row < (parseInt(rows.value) - 1) && count < 4) {
    backSlashDown(player, row + 1, column + 1)
  }
  if (count == 4) {
    return true
  } else {
    return false
  }
}

//function that verify if there is a 4 line form in anyway
function playerWin(player, row, column) {
  //vertical
  if (vertical(player, row, column)) {
    return true
  } else if (horizontal(player, row, column)) {
    return true
  } else if (slash(player, row, column)) {
    return true
  } else if (backSlash(player, row, column)) {
    return true
  } return false

}


//functions that change the appereance with the coins
// add messages and declare a win or a tied game
function movement(event) {
  event.preventDefault()
  quantity++
  columnPosition = parseInt(event.target.id[0])
  for (let j = digitalBoard.length - 1; j >= 0; j--) {
    if (digitalBoard[j][columnPosition] === 0) {
      const markCoin = document.getElementById(`${columnPosition}${j}`)
      digitalBoard[j][columnPosition] = 1
      if (playerTurn == 1) {
        digitalBoard[j][columnPosition] = 1
        markCoin.style.backgroundColor = "yellow"
        if (playerWin(parseInt(playerTurn), parseInt(j), parseInt(columnPosition))) {
          alert(`${player1.value} you win`)
          playerTurnMessage.textContent = ""
          board.removeEventListener('click', movement)
          return
        } else {
          playerTurn = 2
          setTimeout
          playerTurnMessage.textContent = `${player2.value} is your turn`
        }
      } else {
        digitalBoard[j][columnPosition] = 2
        markCoin.style.backgroundColor = "red"
        if (playerWin(parseInt(playerTurn), parseInt(j), parseInt(columnPosition))) {
          alert(`${player2.value} you win`)
          playerTurnMessage.textContent = ""
          board.removeEventListener('click', movement)

          return
        } else {
          playerTurn = 1
          playerTurnMessage.textContent = `${player1.value} is your turn`
        }
      }

      if (quantity == parseInt(rows.value) * parseInt(columns.value)) {
        alert("Tied Game")
      }

      break
    }
  }
}

//event listener that add a coin when click depending of the player color
board.addEventListener('click', movement)

//function that create the board in memory and in the screen
function play(event) {
  event.preventDefault()
  jugar.disabled = true
  playerTurnMessage.style.display = "block"

  const table = document.createDocumentFragment();

  const mytable = document.createElement("table")
  for (let i = 0; i < parseInt(rows.value); i++) {
    digitalBoard[i] = []
    const line = document.createElement('tr')

    for (let j = 0; j < parseInt(columns.value); j++) {
      const space = document.createElement('td')
      space.classList.add("space")
      space.setAttribute('id', `${j}${i}`)
      line.appendChild(space)
      digitalBoard[i][j] = 0
    }
    mytable.appendChild(line)
  }
  table.appendChild(mytable)

  board.appendChild(table)
}

//event that add the tableboard when it is submit the form
form.addEventListener('submit', play)

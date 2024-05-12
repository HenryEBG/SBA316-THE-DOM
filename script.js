
/**************************************************
 * 
 *             4 CONECT  GAME
 * 
 ****************************************************/

//validate winings in every direction
import { vertical } from './vertical.js';
import { horizontal } from './horizontal.js';
import { slash } from './slash.js';
import { backSlash } from './backslash.js';

/************************************************
 * Declaring variables to use in the project
 ***********************************************/
//take an DOM element by ID

/*****************************************************
//Requirement #1
Cache at least one element using selectElementById.
*******************************************************/
const form = document.getElementById("setup")
//takes the elements that I need from the form to define the board
const columns = form.elements["columns"]
const rows = form.elements["rows"]
const player1 = form.elements["player1"]
const player2 = form.elements["player2"]
const jugar = document.getElementById("jugar")

        /**********************************************************
         * Requirement #3
         * Use the parent-child-sibling relationship to navigate 
         * between elements at least once (firstChild, lastChild, 
         * parentNode, nextElementSibling, etc.).
         **********************************************************/
        const brother=jugar.nextElementSibling

//defining an 2D array to save a digital board to validate the game
const digitalBoard = []

//Using a queryselector I get a div to contain the board added dynamically

/*******************************************************************
//Requirement #2
Cache at least one element using querySelector or querySelectorAll.
*******************************************************************/
const board = document.querySelector("#board");

//variable to indicate the next turn
let playerTurn = 1

//saved true if someone made a 4 line
let win = false

//counts the quantity of movements when the boards is full the game is tied
let quantity = 0

//add a messagin that indicates the next player turn
const playerTurnMessage = document.getElementById("playerTurn")
//playerTurnMessage.textContent = `${player1.value} is your turn`






//function that verify if there is a 4 line form in anyway
function playerWin(player, row, column) {
  //vertical
  if (vertical(player, row, column,digitalBoard)) {
    return true
  } else if (horizontal(player, row, column,digitalBoard)) {
    return true
  } else if (slash(player, row, column,digitalBoard)) {
    return true
  } else if (backSlash(player, row, column,digitalBoard)) {
    return true
  } return false

}


//functions that change the appereance with the coins
// add messages and declare a win or a tied game
function movement(event) {
  event.preventDefault()
  quantity++
  let columnPosition = parseInt(event.target.id[0])
  for (let j = digitalBoard.length - 1; j >= 0; j--) {
    if (digitalBoard[j][columnPosition] === 0) {
      const markCoin = document.getElementById(`${columnPosition}${j}`)
      digitalBoard[j][columnPosition] = 1
      if (playerTurn == 1) {
        digitalBoard[j][columnPosition] = 1
        markCoin.style.backgroundColor = "yellow"
        if (playerWin(parseInt(playerTurn), parseInt(j), parseInt(columnPosition))) {
          const brother=jugar.nextElementSibling
          brother.style.display="block"
          alert(`${player1.value} you win`)

          playerTurnMessage.textContent = ""
          board.removeEventListener('click', movement)
          return
        } else {
          playerTurn = 2
          playerTurnMessage.textContent = `${player2.value} is your turn`
        }
      } else {
        digitalBoard[j][columnPosition] = 2
        markCoin.style.backgroundColor = "red"
        if (playerWin(parseInt(playerTurn), parseInt(j), parseInt(columnPosition))) {
          const brother=jugar.nextElementSibling
          brother.style.display="block"
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

        brother.style.display="block"

      /****************************************************************
     * Requirement #12
     * Register at least two different event listeners and methods.
     ****************************************************************/        
        alert("Tied Game")
      }

      break
    }
  }
}

//event listener that add a coin when click depending of the player color
      /****************************************************************
   * Requirement #11
   * Register at least two different event listeners and 
   * create the associated event handler functions. (1/2)
   ****************************************************************/
board.addEventListener('click', movement)

//function that create the board in memory and in the screen
function drawBoard(event) {
  event.preventDefault()
      /****************************************************************
   * Requirement #14
   * Include at least one form and/or input with DOM event-based 
   * validation. (This can be the same form or input as the one 
   * above, but should include event-based validation in addition 
   * to the HTML attribute validation.)
   ****************************************************************/

  const patternName = /^[a-zA-z]+$/
  
  if (player1.value.match(patternName) === null) {
    alert("Player Yellow only can contain letters.",false)
    player1.focus()
    return false
  } else  if (player2.value.match(patternName) === null) {
    alert("Player Red only can contain letters.",false)
    player2.focus()
    return false
  }
      /****************************************************************
   * Requirement #8
   * Modify the HTML or text content of at least one element 
   * in response to user interaction using innerHTML, innerText, 
   * or textContent.
   ****************************************************************/
  
  playerTurnMessage.textContent = `${player1.value} is your turn`

  /****************************************************************
  * Requirement #9
  * Modify the style and/or CSS classes of an element in response to user 
  * interactions using the style or classList properties.
   ****************************************************************/
  jugar.style.display="none"
  //playerTurnMessage.style.display = "block"
  playerTurnMessage.classList.add("#playerTurn")

    /****************************************************************
   * Requirement #5
   * Create at least one element using createElement.
   ****************************************************************/
  const table = document.createDocumentFragment();

  const mytable = document.createElement("table")
  /****************************************************************
   * Requirement #4
   * Iterate over a collection of elements to accomplish some task.
   ****************************************************************/
  for (let i = 0; i < parseInt(rows.value); i++) {
    digitalBoard[i] = []
    const line = document.createElement('tr')

    for (let j = 0; j < parseInt(columns.value); j++) {
      const space = document.createElement('td')
      space.classList.add("space")
   /****************************************************************
   * Requirement #10
   * Modify at least one attribute of an element in response 
   * to user interaction.
   ****************************************************************/     
      space.setAttribute('id', `${j}${i}`)

    /****************************************************************
   * Requirement #6
   * Use appendChild and/or prepend to add new elements to the DOM.
   ****************************************************************/
      line.appendChild(space)
      digitalBoard[i][j] = 0
    }
    mytable.appendChild(line)
  }
  table.appendChild(mytable)
  /****************************************************************
   * Requirement #7
   * Use the DocumentFragment interface or HTML templating with 
   * the cloneNode method to create templated content. 
   ****************************************************************/
  board.appendChild(table)
}

/****************************************************************
   * Requirement #11
   * Register at least two different event listeners and 
   * create the associated event handler functions. (2/2)
   ****************************************************************/
//event that add the tableboard when it is submit the form
form.addEventListener('submit', drawBoard)

//clea
function reset(event){
  columns.value=""
  rows.value=""
  player1.value=""
  player2.value=""
  jugar.style.display="block"
  brother.style.display="none"
  board.firstElementChild.remove()
}

brother.addEventListener('click',reset)

//console.log('estamos conectados')
const form=document.getElementById("setup")
const columns=form.elements["columns"]
const rows=form.elements["rows"]
const player1=form.elements["player1"]
const player2=form.elements["player2"]
const jugar=form.elements["jugar"]
const digitalBoard=[]
const board = document.querySelector("#board");
let playerTurn=1
let win=false
let quantity=0
const playerTurnMessage=document.getElementById("playerTurn")
playerTurnMessage.textContent=`${player1.value} is your turn`

//const player1coin='<div class="coin" id="player1coin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm96-112h-8V360l55.3 0c-3.8 22.7-23.6 40-47.3 40zm47.3-56L344 344V304h8c23.8 0 43.5 17.3 47.3 40zM328 344H264V304h64v40zm0 56H264V360h64v40zm-80-96v40l-64 0V304h64zm0 56v40H184V360l64 0zm-80-16H112.7c3.8-22.7 23.6-40 47.3-40h8v40zm0 56h-8c-23.8 0-43.5-17.3-47.3-40H168v40zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg> </div>' 
//const player2coin='<div class="coin" id="player2coin"></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM168 320c-13.3 0-24 10.7-24 24s10.7 24 24 24h8V320h-8zm40 48h32V320H208v48zm96 0V320H272v48h32zm32 0h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v48zM168 288H344c30.9 0 56 25.1 56 56s-25.1 56-56 56H168c-30.9 0-56-25.1-56-56s25.1-56 56-56zm-23.6-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg></div>'




// form.forEach(element => {
//   switch  
// });

let count
// function verticalUp(player,row,column){
//   console.log(`verticalUp ${count}`)
//   console.log(`${digitalBoard[row][column]===player}`)
//   if(digitalBoard[row][column]===player){
//     count=count++
//     if(count<4 && row>0){
//       verticalUp(player,row-1,column)
//     }
//   }
  
// }



function verticalDown(player,row,column){
  if(digitalBoard[row][column]===player){
    count++
    if(count<4 && row<(parseInt(rows.value)-1)){
      verticalDown(player,row+1,column)
    }
  }
  
}
function vertical(player,row,column){
  count=1
  if(row<(parseInt(rows.value)-1)){
    verticalDown(player,row+1,column)
  }
  if(count==4){
    return true
  } else {
    return false
  }
  
}

function horizontalRight(player,row,column){
  console.log(count,row,column,player,digitalBoard[row][column] )
  console.log(`${digitalBoard[row][column]===player}`)
  if(digitalBoard[row][column]===player){
    count++
    console.log(count)
    if(count<4 && column<(parseInt(column.value)-1)){
      horizontalRight(player,row,column+1)
    }
  }  
}


function horizontalLeft(player,row,column){
  if(digitalBoard[row][column]===player){
    count++
    if(count<4 && column>0){
      horizontalLeft(player,row,column-1)
    }
  }  
}

function horizontal(player,row,column){
  count=1
  if(column<(parseInt(columns.value)-1)){
    horizontalRight(player,row,column+1)
  }
  if(column>0 && count<4){
    horizontalLeft(player,row,column-1)
  }
  if(count==4){
    return true
  } else {
    return false
  }
}

function slashUp(player,row,column){
  if(digitalBoard[row][column]===player){
    count++
    if(count<4 && column<(parseInt(columns.value)-1) && row>0){
      slashUp(player,row-1,column+1)
    }
  }   
}

function slashDown(player,row,column){
  if(digitalBoard[row][column]===player){
    count++
    if(count<4 && row<(parseInt(rows.value)-1) && column>0){
      slashDown(player,row+1,column-1)
    }
  }   
}

function slash(player,row,column){
  count=1
  if(column<(parseInt(columns.value)-1) && row>0){
    slashUp(player,row-1,column+1)
  }
  if(column>0 && row<(parseInt(rows.value)-1) && count<4){
    slashDown(player,row+1,column-1)
  }
  if(count==4){
    return true
  } else {
    return false
  }
}


function backSlashUp(player,row,column){
  console.log(count,row,column,player,digitalBoard[row][column] )
  console.log(`${digitalBoard[row][column]===player}`)
  if(digitalBoard[row][column]===player){
    count++
    console.log(count)
    if(count<4 && column>0 && row>0){
      backSlashUp(player,row-1,column-1)
    }
  }   
}

function backSlashDown(player,row,column){
  console.log(count,row,column,player,digitalBoard[row][column] )
  console.log(`${digitalBoard[row][column]===player}`)
  if(digitalBoard[row][column]===player){
    count++
    console.log(count)
    if(count<4 && row<(parseInt(rows.value)-1) && column<(parseInt(columns.value)-1)){
      backSlashDown(player,row+1,column+1)
    }
  }   
}

function backSlash(player,row,column){
  count=1
  if(column>0 && row>0){
    backSlashUp(player,row-1,column-1)
  }
  if(column<(parseInt(columns.value)-1) && row<(parseInt(rows.value)-1) && count<4){
    backSlashDown(player,row+1,column+1)
  }
  if(count==4){
    return true
  } else {
    return false
  }
}





function playerWin(player,row,column){
  //vertical
  if(vertical(player,row,column)){
    return true
  } else if(horizontal(player,row,column)){
    return true
  } else if(slash(player,row,column)){
    return true
  } else if(backSlash(player,row,column)){
    return true
  }  return false

}

function play(event){
event.preventDefault()
jugar.disabled=true
playerTurnMessage.style.display="block"

const table = document.createDocumentFragment();

const mytable=document.createElement("table")
for (let i=0; i<parseInt(rows.value); i++){
  digitalBoard[i]=[]
  const line =document.createElement('tr')
  
  for(let j=0;j<parseInt(columns.value);j++){
    const space=document.createElement('td')
    space.classList.add("space")
    space.setAttribute('id',`${j}${i}`)
    line.appendChild(space)
    
    //space.textContent=`${i} ${j}`
    // space.classList.add('space')
    // space.style.width=(100/parseInt(columns.value)).toString()+"%"
    // space.style.height=auto
    // table.appendChild(space);
    digitalBoard[i][j]=0
    //console.log(`${i} ${j}`)
  }
  mytable.appendChild(line)
}
table.appendChild(mytable)

board.appendChild(table)
console.log(digitalBoard)
}

form.addEventListener('submit',play)

function movement(event){
  event.preventDefault()
  quantity++
  columnPosition=parseInt(event.target.id[0])

//let foundspace=-1
 for(let j=digitalBoard.length-1;j>=0;j--){
  if(digitalBoard[j][columnPosition]===0){
    const markCoin =document.getElementById(`${columnPosition}${j}`)
    digitalBoard[j][columnPosition]=1
    if(playerTurn==1)
    {digitalBoard[j][columnPosition]=1
      markCoin.style.backgroundColor="yellow"
      if(playerWin(parseInt(playerTurn),parseInt(j),parseInt(columnPosition))){
        alert(`${player1.value} you win`)
        playerTurnMessage.textContent=""
        board.removeEventListener('click',movement)
        return
      } else {
        playerTurn=2
        setTimeout
        playerTurnMessage.textContent=`${player2.value} is your turn`
      }
    } else {
      digitalBoard[j][columnPosition]=2
      markCoin.style.backgroundColor="red"
      if(playerWin(parseInt(playerTurn),parseInt(j),parseInt(columnPosition))){ 
       alert(`${player2.value} you win`)
       playerTurnMessage.textContent=""
        board.removeEventListener('click',movement)
     
        return
      } else {
      playerTurn=1
      playerTurnMessage.textContent=`${player1.value} is your turn`
      }
    } 

    if(quantity==parseInt(rows.value)*parseInt(columns.value)){
      alert("Tied Game")
    }

    break
  }
 }

}

board.addEventListener('click',movement)

// const browsers = ["Firefox", "Chrome", "Opera", "Safari"];

// browsers.forEach((browser) => {
//   const li = document.createElement("li");
//   li.textContent = browser;
//   fragment.appendChild(li);
// });

// element.appendChild(fragment);
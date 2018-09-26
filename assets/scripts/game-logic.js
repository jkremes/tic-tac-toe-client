// Game Engine
//  Create Empty Board in JS
//  Create Current Player
//  Add Current Player to Board
//  Current Player rotates between x and o
//  Can not choose already occupied spots
//  Check Board for Winner

//create gameboard
const gameBoard = [
  'top-left', 'top-middle', 'top-right',
  'middle-left', 'middle-middle', 'middle-right',
  'bottom-left', 'bottom-middle', 'bottom-right'
]

//create players
const player_x = 'x'
const player_o = 'o'

//check if x/o won

//x won if
  //player_x is on 'top-left', 'top-middle', 'top-right',
  //player_x is on 'middle-left', 'middle-middle', 'middle-right',
  //player_x is on 'bottom-left', 'bottom-middle', 'bottom-right'
  //player_x is on 'top-left', 'middle-middle', 'bottom-right',
  //player_x is on 'top-left', 'middle-left', 'bottom-left',
  //player_x is on 'top-middle', 'middle-middle', 'bottom-middle',
  //player_x is on 'top-right', 'middle-right', 'bottom-right',
  //player_x is on 'top-right', 'middle-middle', 'bottom-left',
  //else if o wins...
  //player_o is on 'top-left', 'top-middle', 'top-right',
  //player_o is on 'middle-left', 'middle-middle', 'middle-right',
  //player_o is on 'bottom-left', 'bottom-middle', 'bottom-right'
  //player_o is on 'top-left', 'middle-middle', 'bottom-right',
  //player_o is on 'top-left', 'middle-left', 'bottom-left',
  //player_o is on 'top-middle', 'middle-middle', 'bottom-middle',
  //player_o is on 'top-right', 'middle-right', 'bottom-right',
  //player_o is on 'top-right', 'middle-middle', 'bottom-left',
//draw if no player_o won or player_o won and gameboard [a,b,c,d,...] is full
}
//create turns array to log onto board array when clicked

//create a turns array to check if the game is compl
const turnLocation = function (clicks) {
  const turns = []
  for (let i = 0; i < 8; i++) {
    if (turns[0] || turns[2] || turns[4] || turns[6]) {
      turns.push[i] = player_x
    } else {
      turns.push[i] = player_o
    } ++i
  } return turns
}

console.log(turnLocation())

//create function to test the status of the game
const checkGameStatus = () {
  //check if player_x won
    //player_x won if three in a row
  //check if player_o won
    //player_o won if three in a row
  //otherwise draw...neither player_x or player_o had three in a row when all elements of the game board are filled out
}

//include styling
//create x image
//create o image
//change gameBoard image to player image that clicked on it

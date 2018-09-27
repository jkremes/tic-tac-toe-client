// Game Engine
//  Current Player rotates between x and o
//  Can not choose already occupied spots
//  Check Board for Winner

//  Create Empty Board in JS
const emptyBoard = []

// create gameboard
const gameBoard = [
  'top-left', 'top-middle', 'top-right',
  'middle-left', 'middle-middle', 'middle-right',
  'bottom-left', 'bottom-middle', 'bottom-right'
]

//  Create Current Player
const player_x = 'x'
const player_o = 'o'

// Add Current Player to Board
// for (let i = 0; i < 9; i++) {
//   if (i === 0 || i === 2 || i === 4 || i === 6) {
//   } emptyBoard.push(player_x)
// }
const playerLocation =


console.log(emptyBoard)
// create an array that shows the actual locations of each players move
// const cells = [
//
// ]

// determine if player_x clicked 'top-left' - then cells[0] = player_x
// if player_o clicked 'bottom-middle' - then cells[7] = player_o
//   if (player) {
//
//   }
// ]

// check if x/o won
// const over = true if () {
//   turns.length === 9
// }
// x won if
// player_x is on 'top-left', 'top-middle', 'top-right',
// player_x is on 'middle-left', 'middle-middle', 'middle-right',
// player_x is on 'bottom-left', 'bottom-middle', 'bottom-right'
// player_x is on 'top-left', 'middle-middle', 'bottom-right',
// player_x is on 'top-left', 'middle-left', 'bottom-left',
// player_x is on 'top-middle', 'middle-middle', 'bottom-middle',
// player_x is on 'top-right', 'middle-right', 'bottom-right',
// player_x is on 'top-right', 'middle-middle', 'bottom-left',
// else if o wins...
// player_o is on 'top-left', 'top-middle', 'top-right',
// player_o is on 'middle-left', 'middle-middle', 'middle-right',
// player_o is on 'bottom-left', 'bottom-middle', 'bottom-right'
// player_o is on 'top-left', 'middle-middle', 'bottom-right',
// player_o is on 'top-left', 'middle-left', 'bottom-left',
// player_o is on 'top-middle', 'middle-middle', 'bottom-middle',
// player_o is on 'top-right', 'middle-right', 'bottom-right',
// player_o is on 'top-right', 'middle-middle', 'bottom-left',
// draw if no player_o won or player_o won and gameboard [a,b,c,d,...] is full
// }
// //create turns array to log onto board array when clicked

// create a turns array to check if the game is compl
// const turnLocation = function (clicks) {
//   const turns = []
//   for (let i = 0; i < 8; i++) {
//     if (turns[0] || turns[2] || turns[4] || turns[6]) {
//       turns.push[i] = player_x
//     } else {
//       turns.push[i] = player_o
//     } ++i
//   } return turns
// }
//
// console.log(turnLocation())

// create function to test the status of the game
// const checkGameStatus = () {
// check if player_x won
// player_x won if three in a row
// check if player_o won
// player_o won if three in a row
// otherwise draw...neither player_x or player_o had three in a row when all elements of the game board are filled out
// }

// include styling
// create x image
// create o image
// change gameBoard image to player image that clicked on it

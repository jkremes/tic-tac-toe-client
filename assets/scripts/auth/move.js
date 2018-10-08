
const store = require('../store.js')

let currentPlayer = 'x'
const switchPlayer = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
  store.game.player_x = currentPlayer
  console.log(store.game.player_x)
  console.log(currentPlayer)
}
// const currentPlayer = switchPlayer(store.game)
// console.log(currentPlayer)

// let over = store.game.over
// const checkWinner = function (moveIndex, over) {
//   console.log(store.game.cells)
//   over = store.game.over
//   if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0] !== '') {
//     // winner = store.game.cells[0]
//     over = true
//   } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3] !== '') {
//     // winner = store.game.cell[3]
//     over = true
//   } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6] !== '') {
//     // winner = store.game.cell[6]
//     over = true
//   } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0] !== '') {
//     // winner = store.game.cell[0]
//     over = true
//   } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1] !== '') {
//     // winner = store.game.cell[1]
//     over = true
//   } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2] !== '') {
//     // winner = store.game.cell[2]
//     over = true
//   } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0] !== '') {
//     // winner = store.game.cell[0]
//     over = true
//   } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[2] !== '') {
//     // winner = store.game.cell[2]
//     over = true
//   }
//   if (store.game.cells[moveIndex] !== '') {
//     console.log('try another move!')
//   }
//   over = store.game.over
//   // console.log(winner)
//   console.log(over)
//   // switchPlayer()
// }
// console.log(store.game.cells)
// checkWinner(moveIndex, over)
// console.log(moveIndex)
// console.log(store.game.data.index)
// debugger

module.exports = {
  switchPlayer
}

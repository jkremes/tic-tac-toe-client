
const store = require('../store.js')

let currentPlayer = 'o'
const switchPlayer = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
  // console.log(currentPlayer)
  // store.game.cells[store.game.moveIndex] = currentPlayer
  store.game.currentPlayer = currentPlayer
  // console.log(store.game.cells)
}

const checkWinner = function (over) {
  // console.log(store.game.cells)
  // over = store.game.over
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0] !== '') {
    // winner = store.game.cells[0]
    over = true
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3] !== '') {
    // winner = store.game.cell[3]
    over = true
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6] !== '') {
    // winner = store.game.cell[6]
    over = true
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0] !== '') {
    // winner = store.game.cell[0]
    over = true
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1] !== '') {
    // winner = store.game.cell[1]
    over = true
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2] !== '') {
    // winner = store.game.cell[2]
    over = true
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0] !== '') {
    // winner = store.game.cell[0]
    over = true
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[2] !== '') {
    // winner = store.game.cell[2]
    over = true
  }
  store.game.over = over
}

// console.log(store.game.cells)
// checkWinner(moveIndex, over)
// console.log(moveIndex)
// console.log(store.game.data.index)
// debugger

// if (store.game.moveIndex === '') {
//   console.log('try another move!')
// }
// console.log(over)

module.exports = {
  switchPlayer,
  checkWinner
}

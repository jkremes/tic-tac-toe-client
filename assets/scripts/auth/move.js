
const store = require('../store.js')
// const events = require('./events.js')

const switchPlayer = function () {
  if (store.currentPlayer === 'x') {
    store.currentPlayer = 'o'
  } else {
    store.currentPlayer = 'x'
  }
  // console.log(currentPlayer)
  // store.game.cells[store.game.moveIndex] = currentPlayer
  // store.currentPlayer = events.currentPlayer
  // console.log(store.game.cells)
}

const displayWinner = function () {
  if (store.game.over === true) {
    $('#game-messages').html(`${store.currentPlayer} wins!`)
    $('#game-messages').css('color', 'green')
    // $('.move').off('click', onMove)
  }
}

const checkWinner = function () {
  // console.log(store.game.cells)
  // over = store.game.over
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0] !== '') {
    // winner = store.game.cells[0]
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3] !== '') {
    // winner = store.game.cell[3]
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6] !== '') {
    // winner = store.game.cell[6]
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0] !== '') {
    // winner = store.game.cell[0]
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1] !== '') {
    // winner = store.game.cell[1]
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2] !== '') {
    // winner = store.game.cell[2]
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0] !== '') {
    // winner = store.game.cell[0]
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[2] !== '') {
    // winner = store.game.cell[2]
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' && store.game.cells[3] !== '' && store.game.cells[4] !== '' &&
   store.game.cells[5] !== '' && store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8] !== '') {
    store.game.over = true
    $('#game-messages').html('Tie Game!')
    $('#game-messages').css('color', 'green')
  }
  // store.game.over = over
  console.log(store.game.over)
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

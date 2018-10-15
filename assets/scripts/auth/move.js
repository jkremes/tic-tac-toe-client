
const store = require('../store.js')
// const events = require('./events.js')

const switchPlayer = function () {
  if (store.currentPlayer === 'x') {
    store.currentPlayer = 'o'
  } else {
    store.currentPlayer = 'x'
  }
}

const displayWinner = function () {
  if (store.game.over === true) {
    $('#game-messages').html(`${store.currentPlayer} wins!`)
    $('#game-messages').css('color', 'green')
  }
}

const checkWinner = function () {
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0] !== '') {
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3] !== '') {
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6] !== '') {
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0] !== '') {
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1] !== '') {
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2] !== '') {
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0] !== '') {
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[2] !== '') {
    store.game.over = true
    displayWinner()
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' && store.game.cells[3] !== '' && store.game.cells[4] !== '' &&
   store.game.cells[5] !== '' && store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8] !== '') {
    store.game.over = true
    $('#game-messages').html('Tie Game!')
    $('#game-messages').css('color', 'green')
  }
  console.log(store.game.over)
}

module.exports = {
  switchPlayer,
  checkWinner
}

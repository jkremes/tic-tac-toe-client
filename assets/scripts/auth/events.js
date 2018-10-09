// const getFormFields = require('../../../lib/get-form-fields.js')
// const api = require('./api.js')
//
// // const onClick = function (event) {
// //   event.preventDefault()
// //   const data = getFormFields(event.target)
// //   api.createExample(data)
// //     .then(console.log)
// //     .catch(console.log)
// //
// const createGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.create(data)
//     .then(console.log)
//     .catch(console.log)
// }
//
// module.exports = {
//   createGame
// }
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const move = require('./move.js')
const store = require('../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onMove = function (event) {
  event.preventDefault()
  const moveIndex = parseInt($(event.target).attr('data-cell-index'))
  store.game.moveIndex = moveIndex
  console.log(moveIndex)
  // const cellData = move.switchPlayer()
  // console.log(cellData)
  // let currentPlayer = 'o'
  // const switchPlayer = function () {
  //   if (currentPlayer === 'x') {
  //     currentPlayer = 'o'
  //   } else {
  //     currentPlayer = 'x'
  //   }
  //   store.game.currentPlayer = currentPlayer
  //   console.log(store.game.currentPlayer)
  //   // console.log(currentPlayer)
  //   // store.game.cells[store.game.moveIndex] = currentPlayer
  //   // console.log(store.game.cells[store.game.moveIndex])
  //   // console.log(store.game.cells)
  // }
  move.switchPlayer()
  console.log(store.game.currentPlayer)
  // const currentPlayer = store.game.currentPlayer
  store.game.cells[moveIndex] = store.game.currentPlayer
  // store.game.currentPlayer = currentPlayer
  // store.game.cells[store.game.moveIndex] = currentPlayer
  // console.log(cellData)
  const over = move.checkWinner(false)
  console.log(over)
  // const gameData = store.game.cells
  api.move()
    // .then(checkWinner(moveIndex))
    .then(console.log)
    .catch(console.log)
}
// console.log(store.game.cells[''])
// write a function that will switch the currentPlayer

// if (currentPlayer === store.game.cells[0 && 1 && 2] ||
//   currentPlayer === store.game.cells[3 && 4 && 5] ||
//   currentPlayer === store.game.cells[6 && 7 && 8] ||
//   currentPlayer === store.game.cells[0 && 3 && 6] ||
//   currentPlayer === store.game.cells[1 && 4 && 7] ||
//   currentPlayer === store.game.cells[2 && 5 && 8] ||
//   currentPlayer === store.game.cells[0 && 4 && 8] ||
//   currentPlayer === store.game.cells[2 && 4 && 6] ||)
// const switchToken = function () {
//  data.game.value =
// {
// "game": {
//   "cell": {
//     "index": 0,
//     "value": "x"
//   },
//   "over": false
//   }
// }
//   }
// }

// check the winner
// evaluate which value for current player is in the array
// check if x won, if not check if o won, if true change gameData to 'True'
// if false then switch current player

// let currentPlayer = x

// winnning conditions - x
// ["x", "x", "x", "", "", "", "", "", ""]
// ["", "", "", "x", "x", "x", "", "", ""]
// ["", "", "", "", "", "", "x", "x", "x"]
// ["x", "", "", "x", "", "", "x", "", ""]
// ["", "x", "", "", "x", "", "", "x", ""]
// ["", "", "x", "", "", "x", "", "", "x"]
// ["x", "", "", "", "x", "", "", "", "x"]
// ["", "", "x", "", "x", "", "x", "", ""]
// winning conditions - o
// ["o", "o", "o", "", "", "", "", "", ""]
// ["", "", "", "o", "o", "o", "", "", ""]
// ["", "", "", "", "", "", "o", "o", "o"]
// ["o", "", "", "o", "", "", "o", "", ""]
// ["", "o", "", "", "o", "", "", "o", ""]
// ["", "", "o", "", "", "o", "", "", "o"]
// ["o", "", "", "", "o", "", "", "", "o"]
// ["", "", "o", "", "o", "", "o", "", ""]
// if one of these are true then ui
// currentPlayer has won the game!

// if currentPlayer is 'x'
// then currentPlayer = 'o'
// if currentPlayer is 'o'
// then currentPlayer = 'x'

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onMove
}

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
const moveUi = require('./moveUi.js')

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
  if (store.game.over === true) {
    return
  }
  console.log('you have clicked a box successfully')
  const moveIndex = parseInt($(event.target).attr('data-cell-index'))
  // const checkIfCellPlayed = function () {
  //   if (store.game.cells[moveIndex] !== '') {
  //     console.log('you cant do that')
  //     // event.stopPropagation()
  //     // store.game.wrongMove = true
  //     // console.log(store.game.wrongMove)
  //     // event.preventDefault()
  //   }
  // }
  // checkIfCellPlayed()
  if (store.game.cells[moveIndex] !== '') {
    console.log('you cant do that')
    $('#game-messages').html('wrong move.')
    $('#game-messages').css('color', 'red')
    // event.stopPropagation()
    // store.game.wrongMove = true
    // console.log(store.game.wrongMove)
    // event.preventDefault()
  } else {
    store.game.moveIndex = moveIndex
    move.switchPlayer()
    store.game.cells[moveIndex] = store.currentPlayer
    moveUi.changeCellVisual()
    move.checkWinner()
    // if (store.game.over === true) {
    //   $('#game-messages').html(`${store.currentPlayer} wins!`)
    //   $('#game-messages').css('color', 'green')
    //   $('.move').off()
    // } else {
    //   api.move()
    //     .then(console.log)
    //     .catch(console.log)
    // }
    // if (store.game.over === true) {
    //   $('#game-messages').html(`${store.currentPlayer} wins!`)
    //   $('#game-messages').css('color', 'green')
    //   // $('.move').off('click', onMove)
    // }
    // api.move()
    //   .then(console.log)
    //   .catch(console.log)
  }
  // checkIfCellPlayed()
  // store.game.moveIndex = moveIndex
  // move.switchPlayer()
  // store.game.cells[moveIndex] = store.currentPlayer
  // moveUi.changeCellVisual()
  // move.checkWinner(false)
  api.move()
    .then(console.log)
    .catch(console.log)
}

const checkGamesPlayed = function (event) {
  event.preventDefault()
  api.gamesPlayed()
    .then(ui.getGamesSuccess)
    .catch(console.log)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onMove,
  checkGamesPlayed
}

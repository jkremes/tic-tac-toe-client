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
  const moveIndex = parseInt($(event.target).attr('data-cell-index'))
  if (store.game.cells[moveIndex] !== '') {
    // $('#move-messages').html('wrong move.')
    // $('#move-messages').css('color', 'red')
    ui.moveFailure()
  } else {
    store.game.moveIndex = moveIndex
    move.switchPlayer()
    store.game.cells[moveIndex] = store.currentPlayer
    moveUi.changeCellVisual()
    move.checkWinner()
  }
  api.move()
    .then(ui.moveSuccess)
    .catch(ui.moveFailure)
}

const checkGamesPlayed = function (event) {
  event.preventDefault()
  api.gamesPlayed()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
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

const store = require('../store.js')

const signUpSuccess = function () {
  $('#login').html('Sign up success!')
  $('#login').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#login').html('Somthing went wrong, please try again')
  $('#login').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#login').html('Sign in success!')
  $('#login').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#create-new-game').removeClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#check-games-played').removeClass('hidden')
}

const signInFailure = function () {
  $('#login').html('Something went wrong, please try again')
  $('#login').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#login').html('Change password success!')
  $('#login').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').removeClass('hidden')
}

const changePasswordFailure = function () {
  $('#login').html('Somthing went wrong, please try again')
  $('#login').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#login').html('You are signed out!')
  $('#login').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#create-new-game').addClass('hidden')
  $('#game-board').addClass('hidden')
  $('#game-messages').addClass('hidden')
  $('#games-played').addClass('hidden')
}

const signOutFailure = function () {
  $('#login').html('Something went wrong, please try again')
  $('#login').css('color', 'red')
}

const newGameSuccess = function (response) {
  $('#game-messages').html('Good Luck!')
  $('#game-messages').css('color', 'green')
  store.game = response.game
  $('#game-board').removeClass('hidden')
  $('.move').html('')
  store.currentPlayer = 'o'
}

const newGameFailure = function () {
  $('#game-board').html('Something went wrong, are you correctly signed-in and/or logged-in? Otherwise, please try again.')
  $('#game-board').css('color', 'red')
}

const getGamesSuccess = function (response) {
  const totalGamesPlayed = response.games.length
  $('#games-played').html(`you have played ${totalGamesPlayed} games!`)
}

const getGamesFailure = function () {
  $('#game-messages').html('Something went wrong, please try again')
  $('#game-messages').css('color', 'red')
}

const moveSuccess = function () {
  if (store.game.over !== true) {
    $('#move-messages').html('Good move!')
    $('#move-messages').css('color', 'green')
    $('#move-messages').fadeTo()
  }
}

const moveFailure = function () {
  $('#move-messages').html('Wrong move!')
  $('#move-messages').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  getGamesSuccess,
  getGamesFailure,
  moveSuccess,
  moveFailure,
  store
}

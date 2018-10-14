'use strict'
const authEvents = require('./auth/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // $('#sign-up-form').on('submit', () => {
  //   alert('you did something right')
  // })
  // $('#top-left').on('click', authEvents.create)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#create-new-game').on('click', authEvents.onNewGame)
  $('#check-games-played').on('click', authEvents.checkGamesPlayed)
  $('#top-left').on('click', authEvents.onMove)
  $('#top-middle').on('click', authEvents.onMove)
  $('#top-right').on('click', authEvents.onMove)
  $('#middle-left').on('click', authEvents.onMove)
  $('#middle-middle').on('click', authEvents.onMove)
  $('#middle-right').on('click', authEvents.onMove)
  $('#bottom-left').on('click', authEvents.onMove)
  $('#bottom-middle').on('click', authEvents.onMove)
  $('#bottom-right').on('click', authEvents.onMove)
})

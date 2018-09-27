const store = require('../store.js')

const signUpSuccess = function () {
  $('#login').html('Sign up successful')
  $('#login').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#login').html('Somthing went wrong, please try again')
  $('#login').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}
//
module.exports = {
  signUpSuccess,
  signUpFailure,
  // signInSuccess,
  // signInFailure,
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
  // signOutFailure,
  store
}

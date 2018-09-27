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

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

module.exports = {
  onSignUp
  // onSignIn,
  // onChangePassword,
  // onSignOut
}

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')

// const onClick = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.createExample(data)
//     .then(console.log)
//     .catch(console.log)
//
const create = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

module.exports = {
  create
}

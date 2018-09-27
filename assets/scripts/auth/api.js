
const store = require('../store.js')
const config = require('../config.js')

// const updateBook = function (bookData) {
//   const bookId = bookData.book.id
//   return $.ajax({
//     url: `https://wdi-library-api.herokuapp.com/books/${bookId}`,
//     method: 'PATCH',
//     data: bookData
//   })
// }
// const signUp = function (userData) {
//   return $.ajax({
//     url: config.apiUrl + '/sign-up',
//     method: 'POST',
//     data: userData
//   })
// }
const create = function (gameData) {
  const gameId = gameData.game.id
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: gameData
  })

// const userClick = function (userData) {
//   return $.ajax({
//     url: config.apiUrl + '',
//     method: 'POST',
//     data: userData
//   })
// }
//
module.exports = {
  create
}

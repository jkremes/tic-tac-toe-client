const config = require('../config.js')
const store = require('../store.js')

const signUp = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: userData
  })
}

const signIn = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: userData
  })
}

const changePassword = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: userData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST'
  })
}

const move = function () {
  const gameId = store.game.id
  console.log(store.game.currentPlayer)
  // const cellData = store.game.cells
  const index = store.game.moveIndex
  const player = store.game.currentPlayer
  const over = store.game.over
  // const gameIndex = store.game.cells['']
  // debugger
  console.log(index)
  console.log(player)
  console.log(over)
  return $.ajax({
    url: config.apiUrl + `/games/${gameId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data:
    // store.game.cells[gameIndex]
    {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': over
      }
    }
  })
}

// {
//   "game": {
//     "cell": {
//       "index": 0,
//       "value": "x"
//     },
//     "over": false
//   }
// }
// const getBook = function (bookData) {
//   const bookId = bookData.book.id
//   return $.ajax({
//     url: `https://wdi-library-api.herokuapp.com/books/${bookId}`,
//     method: 'GET'
//   })
// }
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

// USE THIS ONE
// const signUp = function (gameData) {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'POST',
//     data: gameData
//   })
// }
// const userClick = function (userData) {
//   return $.ajax({
//     url: config.apiUrl + '',
//     method: 'POST',
//     data: userData
//   })
// }
// //
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newGame,
  move
}

const store = require('../store.js')

const changeCellVisual = function () {
  if (store.game.wrongMove === true) {
    console.log('you cannot go there')
  } else if (store.game.moveIndex === 0) {
    $('#top-left').html(store.currentPlayer)
    $('#top-left').css('color', 'red')
  } else if (store.game.moveIndex === 1) {
    $('#top-middle').html(store.currentPlayer)
    $('#top-middle').css('color', 'red')
  } else if (store.game.moveIndex === 2) {
    $('#top-right').html(store.currentPlayer)
    $('#top-right').css('color', 'red')
  } else if (store.game.moveIndex === 3) {
    $('#middle-left').html(store.currentPlayer)
    $('#middle-left').css('color', 'red')
  } else if (store.game.moveIndex === 4) {
    $('#middle-middle').html(store.currentPlayer)
    $('#middle-middle').css('color', 'red')
  } else if (store.game.moveIndex === 5) {
    $('#middle-right').html(store.currentPlayer)
    $('#middle-right').css('color', 'red')
  } else if (store.game.moveIndex === 6) {
    $('#bottom-left').html(store.currentPlayer)
    $('#bottom-left').css('color', 'red')
  } else if (store.game.moveIndex === 7) {
    $('#bottom-middle').html(store.currentPlayer)
    $('#bottom-middle').css('color', 'red')
  } else if (store.game.moveIndex === 8) {
    $('#bottom-right').html(store.currentPlayer)
    $('#bottom-right').css('color', 'red')
  }
}

module.exports = {
  changeCellVisual
}

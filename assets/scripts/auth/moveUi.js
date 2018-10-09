const store = require('../store.js')

const changeCellVisual = function () {
  if (store.game.wrongMove === true) {
    console.log('you cannot go there')
  } else if (store.game.moveIndex === 0) {
    $('#top-left').html(store.game.currentPlayer)
    $('#top-left').css('color', 'red')
  } else if (store.game.moveIndex === 1) {
    $('#top-middle').html(store.game.currentPlayer)
    $('#top-middle').css('color', 'red')
  } else if (store.game.moveIndex === 2) {
    $('#top-right').html(store.game.currentPlayer)
    $('#top-right').css('color', 'red')
  } else if (store.game.moveIndex === 3) {
    $('#middle-left').html(store.game.currentPlayer)
    $('#middle-left').css('color', 'red')
  } else if (store.game.moveIndex === 4) {
    $('#middle-middle').html(store.game.currentPlayer)
    $('#middle-middle').css('color', 'red')
  } else if (store.game.moveIndex === 5) {
    $('#middle-right').html(store.game.currentPlayer)
    $('#middle-right').css('color', 'red')
  } else if (store.game.moveIndex === 6) {
    $('#bottom-left').html(store.game.currentPlayer)
    $('#bottom-left').css('color', 'red')
  } else if (store.game.moveIndex === 7) {
    $('#bottom-middle').html(store.game.currentPlayer)
    $('#bottom-middle').css('color', 'red')
  } else if (store.game.moveIndex === 8) {
    $('#bottom-right').html(store.game.currentPlayer)
    $('#bottom-right').css('color', 'red')
  }
}

module.exports = {
  changeCellVisual
}

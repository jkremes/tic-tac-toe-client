// Game Engine
//  Create Empty Board in JS
//  Create Current Player
//  Add Current Player to Board
//  Current Player rotates between x and o
//  Can not choose already occupied spots
//  Check Board for Winner

const player_x = 'x'
const player_o = 'o'

const turnLocation = function (clicks) {
  const turns = []
  for (let i = 0; i < 8; i++) {
    if (turns[0] || turns[2] || turns[4] || turns[6]) {
      turns.push[i] = player_x
    } else {
      turns.push[i] = player_o
    } ++i
  } return turns
}

console.log(turnLocation())

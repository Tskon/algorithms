class Player {
  on('move', callback) {} // callback([0,0])
  nextTurn(rivalBove){}  // arg [0,0]
  retry() {}
  end(result) {} // 'win' | 'lose' | 'tie'
}

function game(player1, player2) {
  player1.on('move', moveCb1)
  player2.on('move', moveCb2)
  player1.nextTurn(null)
  // incorrect => retry
  // end(result)
  player1.retryCount = 0
  player2.retryCount = 0

  const field = [[null, null, null], [null, null, null], [null, null, null]]
  let lastTurn = null

  function moveCb1(turn) {
    move(turn, 'x', player1)
  }
  function moveCb2(turn) {
    move(turn, 'o', player2)
  }

  function move(turn, type, player){
    if (lastTurn !== type) {
      if (field[turn[0]][turn[1]] === null) {
        field[turn[0]][turn[1]] = type
        player.retryCount = 0

        if(checkWin(turn, type)){
          player.end('win')
          if (type === 'x') {
            player2.end('lose')
          } else {
            player1.end('lose')
          }
        }

        lastTurn = type
        player.nextTurn(turn)

      } else {
        player.retryCount++
        if (player.retryCount = 3) {
          player.end('lose')
          if (type === 'x') {
            player2.end('win')
          } else {
            player1.end('win')
          }
        }
        player.retry()
      }
    }
  }

  function checkWin(turn, type) {
    let result = 0
    fild[turn[0]].forEach((item)=>{
      if (item === type) result++
    })
    if (result = 3) return true

    result = 0
    [field[0][turn[1]], field[1][turn[1]], field[2][turn[1]]].forEach((item)=>{
      if (item === type) result++
    })
    if (result = 3) return true

    return false
  }
}

// players
let Petya = []
let Vasya = []

// deck of cards
const deck1 = [1, 2, 3] // Petya must win
const deck2 = [1, 4, 2] // Vasya must win
const deck3 = [1, 4, 2, 5] // Petya must win

startGame(deck1, Petya, Vasya)
Petya = []
Vasya = []
startGame(deck2, Petya, Vasya)
Petya = []
Vasya = []
startGame(deck3, Petya, Vasya)

function startGame(deck){
  deck.forEach((card, i) => {
    if (i < 2){
      if (i % 2){
        Vasya.push(card)
      } else {
        Petya.push(card)
      }
    } else{
      if (sum(Petya) < sum(Vasya)){
        Petya.push(card)
      } else {
        Vasya.push(card)
      }
    }
  })

  console.log((sum(Petya) < sum(Vasya)) ? 'Vasya' : 'Petya')
  console.log('Petya: ' + Petya, 'Vasya: ' + Vasya)
}

function sum(arr) {
  return arr.reduce((sum, num) => sum + num, 0)
}

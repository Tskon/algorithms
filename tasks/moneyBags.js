checkConfiguration(2, [2,6], 5)

function checkConfiguration(bagsCount, listOfSum, total){
  if (listOfSum.length !== bagsCount || Math.max(...listOfSum) > total ) return console.log('No')

  if (listOfSum.reduce((sum, num) => sum + num, 0) === total){
    return console.log('Yes')
  }
  console.log('No')
}

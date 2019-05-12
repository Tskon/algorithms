const getRandomNumber = () => Math.round(Math.random() * 100)
const getArray = (n) => {
  const array = []
  for (let i = 0; i < n; i++) {
    array.push(getRandomNumber())
  }
  return array
}
const array = getArray(5)

const timer = (func) => {
  const startTime = +new Date()
  func()
  const endTime = +new Date()
  console.log(`time: ${endTime - startTime}`)
}

// bubble sort algorithm
const bubbleSort = (arr) => {
  const sortedArr = [...arr]

  for(let i = 0; i < sortedArr.length; i++ ){
    for(let j = 0; j < sortedArr.length - i; j++) {
      if (sortedArr[j] > sortedArr[j+1]) {
        [sortedArr[j+1], sortedArr[j]] = [sortedArr[j], sortedArr[j+1]]
      }
    }
  }
  console.log('bubbleSort:', sortedArr)
}

timer(() => bubbleSort(array))

// insert sort algorithm



// merge sort algorithm

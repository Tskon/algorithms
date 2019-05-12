const getRandomNumber = () => Math.round(Math.random() * 100)
const getArray = (n) => {
  const array = [0]
  for (let i = 0; i < n; i++) {
    array.push(getRandomNumber())
  }
  array.push(0)
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
  const newArr = [...arr]

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - i; j++) {
      if (newArr[j] > newArr[j + 1]) [newArr[j + 1], newArr[j]] = [newArr[j], newArr[j + 1]]
    }
  }
  console.log('bubbleSort:', newArr)
}

timer(() => bubbleSort(array))

// insert sort algorithm
const insertSort = (arr) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
    for (let j = newArr.length - 1; j >= 0; j--) {
      if (newArr[j] < newArr[j - 1]) {
        [newArr[j], newArr[j - 1]] = [newArr[j - 1], newArr[j]]
      } else {
        break
      }
    }
  }
  console.log('insertSort:', newArr)
}

timer(() => insertSort(array))

// merge sort algorithm

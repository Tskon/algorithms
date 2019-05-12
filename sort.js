const getRandomNumber = () => Math.round(Math.random() * 100000)
const getArray = (n) => {
  const array = [0]
  for (let i = 0; i < n; i++) {
    array.push(getRandomNumber())
  }
  array.push(-5)
  return array
}
const array = getArray(10000)

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
      if (newArr[j + 1] && newArr[j] > newArr[j + 1]) {
        [newArr[j + 1], newArr[j]] = [newArr[j], newArr[j + 1]]
      }
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
      if (j > 0 && newArr[j] < newArr[j - 1]) {
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
const mergeSort = (arr2) => {
  const arr = [...arr2]
  const merge = (a, b) => {
    let ai = 0
    let bi = 0
    const result = []

    for (let i = 0; i < a.length + b.length; i++) {
      if (a[ai] < b[bi] || b[bi] === undefined) {
        result.push(a[ai])
        ai++
      } else {
        result.push(b[bi])
        bi++
      }
    }

    return result
  }

  const newArrays = []

  // init sorted arrays
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1]) {
      newArrays.push(merge([arr[i]], [arr[i + 1]]))
    } else {
      newArrays.push([arr[i]])
    }
  }

  // merge sorted arrays
  const mergeSortedArrays = (sortedArraysList) => {
    const result = []
    for (let i = 0; i < sortedArraysList.length; i += 2) {
      if (sortedArraysList[i + 1]) {
        result.push(merge(sortedArraysList[i], sortedArraysList[i + 1]))
      } else {
        result.push(sortedArraysList[i])
      }
    }
    if (result.length > 1) return mergeSortedArrays(result)
    return result[0]
  }

  console.log('mergeSort', mergeSortedArrays(newArrays))
}

timer(() => mergeSort(array))

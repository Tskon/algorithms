const data = [
  {
    geometry: [10, 20],
    text: 'James'
  },
  {
    geometry: [20, 40],
    text: 'Bond'
  },
  {
    geometry: [5, 40],
    text: 'Bond'
  }
]
const dictionary = ['James', 'Bond']

console.log(secretMessage(data, dictionary))

function secretMessage(inputData, inputDictionary) {
  function sortByCoordinates(arr) {
    return arr.sort((a, b) => (a.geometry[0] - b.geometry[0]))
  }

  const sortedData = sortByCoordinates(inputData)

  let resultMessage = ''
  const absentWords = []

  sortedData.forEach(function (item, i, arr) {
    if (!inputDictionary.includes(item.text)) absentWords.push(item)
    resultMessage += item.text
    if (i !== arr.length -1 ) resultMessage += ' '
  })

  if (absentWords.length) {
    return 'Unreadable message'
  } else {
    return resultMessage
  }
}



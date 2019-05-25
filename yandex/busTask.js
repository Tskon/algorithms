busList = ['101', 'Я2', '215', '241', '517', 'М5']
busList2 = ['101', '215', '241', '517']
console.log(busFilter(busList))
console.log(busFilter(busList2))

function busFilter(names) {
  const result = []
  const namedArr = []
  const numberArr = names.filter(item => {
    if (Number.isNaN(parseFloat(item[0]))) {
      namedArr.push(item)
    } else {
      return item
    }
  })
    .sort()
  namedArr.sort()

  numberArr.forEach((item, i, arr) => {
    if (i === 0) {
      result.push([item[0], item])
    } else {
      if (item[0] === arr[i-1][0]) {
        result[result.length - 1].push(item)
      } else {
        result.push([item[0], item])
      }
    }
  })

  if (namedArr.length) result.push(['А-Я', ...namedArr])

  return result
}

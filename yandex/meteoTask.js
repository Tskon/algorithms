const coords = [
  [1, 0],
  [0, 1],
  [1, 1]
]

console.log(checkCoords(coords))

function checkCoords(diffs) {
  const startPos = [0, 0]
  diffs.forEach((item, i) => {
    if (startPos[0] > 0) {
      startPos[0] -= item[0]
      item[0] = (item[0] > 0) ? -item[0] : item[0]
    } else {
      startPos[0] += item[0]
    }

    if (startPos[1] > 0) {
      startPos[1] -= item[1]
      item[1] = -item[1]
    } else {
      startPos[1] += item[1]
    }
  })

  return (startPos[0] === 0 && startPos[1] === 0) ? diffs : null
}


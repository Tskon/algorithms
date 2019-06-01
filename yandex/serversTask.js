const servers = [
  'srv-a', // ok
  'srv-b', // fail
  'srv-c', // fail
  'srv-d'  // fail
]

const check = (name) => {
  return new Promise((res) => {
    setTimeout(res, 100)
  })
    .then(() => name === 'srv-a')
}

console.log(findError(servers, check))

function findError(servers, check) {
  return find(servers)

  function find(arr) {
    let middleOfArr = Math.floor(arr.length / 2)
    if (arr.length > 2){
      return check(arr[middleOfArr]).then((res) => {
        if (res) {
          return find(arr.slice(middleOfArr + 1))
        } else {
          return find(arr.slice(0, middleOfArr + 1))
        }
      })
    } else {
      return(check(arr[0]).then(res => (res) ? arr[1] : arr[0]))
    }
  }
}

obj = {
  chunkCount: 3,
  emitter: {on: (fn) => {
      fn({id: 5314, data: 'The Good, ', timestamp: new Date('2019-01-01')});
      fn({id: 1543, data: 'd the Ugly', timestamp: new Date('2019-01-03')});
      fn({id: 2494, data: 'the Bad an', timestamp: new Date('2019-01-02')});
    }}
}

console.log(torrent(obj))

function torrent({chunkCount, emitter}) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(()=>{
      reject('Timed out')
    }, 1000)

    const result = []

    function getter(data) {
      result.push(data)
      if (chunkCount === result.length) {
        clearTimeout(timer)

        result.sort((a, b)=> {
          if (a.id === b.id) reject(`Duplicate: ${a.id}`)
          return a.timestamp - b.timestamp
        })

        let resultStr =''

        result.forEach(item => {
          resultStr += item.data
        })

        resolve(resultStr)
      }
    }

    emitter.on(getter)
  })
}

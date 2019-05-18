function getTreeSum(root) {
  let result = 0
  if (root.next !== null) {
    root.next.forEach(item => result += getTreeSum(item))
  } else {
    result = root.val
  }
  return result
}

const tree = {
  val:2,
  next: [
    {
      val:1,
      next: [
        {
          val:3,
          next: null
        },
        {
          val:5,
          next: null
        },
      ]
    },
    {
      val:8,
      next: null
    },
  ]
}

console.log(getTreeSum(tree))

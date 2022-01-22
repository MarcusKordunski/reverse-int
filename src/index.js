module.exports = function reverse (n) {
  let newArr = []
  newArr = String(Math.abs(n)).split("")
  newArr = newArr.reverse()
  return newArr.join("")
}

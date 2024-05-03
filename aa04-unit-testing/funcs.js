function isFive(num) {
  if(num !== 5) return false

  return true
}

function isOdd(number) {
  if (typeof number !== 'number') {
    throw new Error('Not a number')
  }
  return number % 2 !== 0
}




function myRange(min, max, step = 1) {
  let range = []
  if (min > max) return range

  for (let i = min; i <= max; i += step) {
      range.push(i)
  }
  return range
}


module.exports = { isFive, isOdd, myRange };

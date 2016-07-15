// mutation revised

function mutationRevised(arr) {
  var firstElementLetters = arr[0].toLowerCase().split('')

  return arr[1].toLowerCase().split('').every(x => firstElementLetters.includes(x))
}

console.log(mutationRevised(['hello', 'Hello']))


// bouncer revised

function falsyBouncerRevised(arr) {
  return arr.filter(x => !!arr)
}

falsyBouncerRevised([false, null, 0, NaN, undefined, ''])

// reverse string

function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString('hello'))


// Factorialize a Number revised

function factorialize(num) {
  var fact = 1
  var i
  for (i = num; i > 0; i--) {
    fact = fact * i
  }
  return fact
}

console.log(factorialize(5))

// Find the Longest Word in a String

function findLongestWordReviseed(str) {
  var words = str.split(' ')
  var lengthAccumalator = (acc, curr) => Math.max(curr.length, acc)

  return words.reduce(lengthAccumalator, 0)
}
console.log(findLongestWordReviseed('The quick brown fox jumped over the lazy doganom'))


// Title Case a Sentence revised

function titleCase(str) {
  var arr = str.split(' ')
  var resArr = []
  var i
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase()
    resArr.push(arr[i].slice(0, 1).toUpperCase().concat(arr[i].slice(1)))
  }

  return resArr.join(' ')
}

console.log(titleCase('sHoRt AnD sToUt'))


function titleCaseRevised(str) {
  var words = str.toLowerCase().split(' ')

  return words.map(word => (word[0].toUpperCase()).concat(word.slice(1))).join(' ')
}

console.log(titleCaseRevised('sHoRt AnD sToUt'))

// Return Largest Numbers in Arrays revised

function largestOfFourRevised(arr) {
  return arr.map(subArr => Math.max.apply(null, subArr))
}
console.log(largestOfFourRevised([[4, 5, 1, 3], [13, 27, 1800, 26], [32, 35, 37, 39],
[1000, 1001, 857, 1, 7]]))

// 8 Confirm the Ending Revised

function confirmEnding(str, target) {
  return str.slice(-target.length) === target
  }

console.log(confirmEnding('Bastian', 'n'))

// Repeat a string

function repeatStringNumTimes(str, num) {
  // repeat after me
  var i
  var strReplace = []
  if (num < 0) {
    return ''
  }
  for (i = 0; i < num; i++) {
    strReplace.push(str)
  }
  return strReplace.join('')
}

console.log(repeatStringNumTimes('abc', -2))


function repeatStringNumTimesRevised(str, target) {

}
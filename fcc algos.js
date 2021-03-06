// 1 Mutations

function mutation(arr) {
  var noOfMatchedElements = 0
  var search = false
  var firstElement = arr[0].toLowerCase().split('')
  var secondElement = arr[1].toLowerCase().split('')
  var term
  var i
  var j

  for (i = 0; i < secondElement.length; i++) {
    search = false
    term = secondElement[i]
    for (j = 0; j < firstElement.length; j++) {
      if (term === firstElement[j]) {
        search = true
      }
    }
    if (search === true) {
      noOfMatchedElements = noOfMatchedElements + 1
    }
  }
  if (noOfMatchedElements === secondElement.length) {
    return true
  }
  return false
}

console.log(mutation(['hello', 'Hello']))


// 2 falsy bouncer

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var resArr = []
  var i
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      resArr.push(arr[i])
    }
  }
  return resArr
}

bouncer([7, 'ate', '', false, 9])

// 3 Reverse a String


function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString('hello'))

// 4 Factorialize a Number


function factorialize(num) {
  var fact = 1
  var i
  for (i = num; i > 0; i--) {
    fact = fact * i
  }
  return fact
}

console.log(factorialize(5))

// 5 Find the Longest Word in a String


function findLongestWord(str) {
  var maxArr = []
  var arr
  var i
  var newstr
  newstr = str.split(' ')
  for (i = 0; i < newstr.length; i++) {
    arr = newstr[i]
    if (arr.length > maxArr.length) {
      maxArr = arr
    }
  }
  return maxArr.length
}

console.log(findLongestWord('The quick brown fox jumped over the lazy doganomath'))

// 6 Title Case a Sentence


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


// 7 Return Largest Numbers in Arrays


function largestOfFour(arr) {
  return arr.reduce((prev, curr) => {
    prev.push(curr.reduce((prevNum, currNum) => Math.max(prevNum, currNum)))
    return prev
  }, [])
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 1800, 26], [32, 35, 37, 39],
[1000, 1001, 857, 1]]))


// 8 Confirm the Ending



function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.slice(-target.length) === target) {
    return true
  }
  return false
}

console.log(confirmEnding('Bastian', 'n'))


// 9 Repeat a string


function repeatStringNumTimes(str, num) {
  // repeat after me
  var newStr = str
  var i
  var strReplace
  if (num < 0) {
    return ''
  }
  for (i = 0; i < num - 1; i++) {
    strReplace = str.concat(newStr)
  }
  return strReplace
}

console.log(repeatStringNumTimes('abc', -2))

// 10 Truncate a string



function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newstr
  if (num <= 3) {
    newstr = str.slice(0, num).concat('...')
  }
  if (num > 3 && num < str.length) {
    newstr = str.slice(0, num - 3).concat('...')
  }
  return newstr
}

console.log(truncateString('A-', 1))

// 11 Chunky Monkey



function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = []
  var arr1 = arr.slice(0, size)
  var i
  for (i = 0; i < arr.length; i++) {
    console.log(arr.length)
    if (i === 0) {
      newArr.push(arr1)
      i = i + size - 1
    } else {
      newArr.push(arr.slice(i, i + size))
      i = i + size - 1
    }
  }
  return newArr
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))

// 12 Slasher Flick

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newarr = arr.slice(howMany)
  return newarr
}

console.log(slasher([1, 2, 3], 2))

// destroyer


function minidestroyer(arr0, val) {
  var arr2 = []
  var j
  for (j = 0; j < arr0.length; j++) {
    if (arr0[j] !== val) {
      arr2.push(arr0[j])
    }
  }
  return arr2
}

function destroyer(arr0, ...arr1) {
  var i
  var arr3 = arr0
  for (i = 0; i < arr1.length; i++) {
    arr3 = minidestroyer(arr3, arr1[i])
  }
  return arr3
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))


// Repeat a string

function repeatStringNumTimes(str, num) {
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

// where do i belong

function getIndexToIns(arr, num) {
  var i
  // var sortValues = (a, b) => {
  //   (a - b)
  // }
  // arr.sort(sortValues)
  var sortedArray = [].concat(arr).sort((a, b) => a - b) // here right, okay

  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return (i)
    }
  }
  return i
}

console.log(getIndexToIns([2, 5, 10], 15))


// caesars cipher

function rot13(string) {
  var arrOfDecodedVal = []
  var i
  for (i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) > 77 && string.charCodeAt(i) <= 90) {
      arrOfDecodedVal.push(string.charCodeAt(i) - 13)
    } else if (string.charCodeAt(i) < 78 && string.charCodeAt(i) > 64) {
      arrOfDecodedVal.push(string.charCodeAt(i) + 13)
    } else {
      arrOfDecodedVal.push(string.charCodeAt(i))
    }
  }
  return String.fromCharCode(...arrOfDecodedVal)
}

console.log(rot13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.'))

// Sum All Numbers in a Range

function sumAll(arr) {
  var sum = 0
  var i
  for (i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i
  }
  return sum
}

console.log(sumAll([10, 5]))

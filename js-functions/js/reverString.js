function reverseString (input) {
  var splitString = input.split('')
  var reverse = splitString.reverse()
  var join = reverse.join('')
  return join
}

var word = 'nawas'
reverseString(word)

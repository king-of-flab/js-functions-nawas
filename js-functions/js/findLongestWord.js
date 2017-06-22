var words = ['hello', 'mr', 'Nawas', 'How', 'are', 'you']
var y = []

function findLongestWord (input) {
  for (var i = 0; i < input.length - 1; i++) {
    if (y.length < input[i].length) {
      y = input[i]
    }
  }
  return y
}

findLongestWord(words)

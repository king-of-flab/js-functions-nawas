var y = 'this is a prime number'
var primeNumbers = []
function prime (a) {
  for (var i = 2; i < a; i++) {
    if (a === 0) {
      y = 'not a prime number'
    } else if (a === 1) {
      y = 'not a prime number'
    } else if (a === 2) {
      y = 'this is a prime number'
    } else if (a % i === 0) {
      y = 'not a prime number'
    }
  }
}
// console.log(y)

function isPrime (input) {
  for (var j = 2; j <= input; j++) {
    prime(j)
    if (y === 'this is a prime number') {
      primeNumbers.push(j)
    }
    y = 'this is a prime number'
  }
  return primeNumbers
}

isPrime(20)

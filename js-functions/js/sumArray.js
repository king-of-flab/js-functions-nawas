function sumArray (input) {
  var x = 0
  for (var i = 0; i < input.length; i++) {
    x = x + input[i]
  }
  return x
}
var num = [1, 5, 8, 9, 30]
sumArray(num)

function multiplyArray (input) {
  var y = 1
  for (var j = 0; j < input.length; j++) {
    y = input[j] * y
  }
  return y
}
var num2 = [1, 2, 8]
multiplyArray(num2)

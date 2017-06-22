var num = [1, 2, 3]
var x = []
function sillySum (input) {
  for (var i = 0; i < input.length; i++) {
    x.push(input[i] * i)
  }
  return x
}

sillySum(num)

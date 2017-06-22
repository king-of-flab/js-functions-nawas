function prime (input) {
  for (var i = 2; i < input; i++) {
    if (input % i === 0) {
      return false
    } else {
      return true
    }
  }
}
prime(52)

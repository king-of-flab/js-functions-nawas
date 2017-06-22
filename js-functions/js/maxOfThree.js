var biggest = 0
function maxOfThree (a, b, c) {
 if (a > b) {
   if (a > c) {
     biggest = a
   }
 } else if (b>c) {
   biggest = b
 } else {
   biggest = c
 }
}

maxOfThree(4,6,10)
console.log(biggest)

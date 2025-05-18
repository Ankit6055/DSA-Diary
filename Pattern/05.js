/*
Inverted Half Pyramid
Input: n = 5
Output:
*****
****
***
**
*
*/

function printPattern(n) {
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

const n = 5;
printPattern(n);

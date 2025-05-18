/*
Solid Rectangle
Input: rows = 4, cols = 5
Output:
*****
*****
*****
*****
*/

function printPattern(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let i = 0; i < cols; i++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

const rows = 6;
const cols = 3;
printPattern(rows, cols);

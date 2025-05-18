/*
Hollow Rectangle
Input: rows = 4, cols = 5
Output:
*****
*   *
*   *
*****
*/

function printPattern(rows, cols) {
  for (let i = 0; i < rows; i++) {
    if (i == 0) {
     for  (k = 0; k < cols; k++) {
        process.stdout.write("*");
      }
      process.stdout.write("\n");
    } else if (i == rows - 1) {
      for (l = 0; l < cols; l++) {
        process.stdout.write("*");
      }
    } else {
        for (let j = 0; j < cols; j++) {
            if (j == 0 || j == cols - 1) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }
  }
}

const rows = 4;
const cols = 5;
printPattern(rows, cols);

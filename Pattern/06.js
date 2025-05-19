/*
Right-Aligned Half Pyramid
Input: n = 5
Output:
    *
   **
  ***
 ****
*****
*/

function printPattern(n) {
    for (let i = 1; i < n; i++) {
        for (let m = 0; m < n-i; m++) {
            process.stdout.write(" ");
        }
    }
    for (let j = 1; j < n + 1; j++) {
        for (let k = 0; k < j; k++) {
            process.stdout.write("*");
        }
    }
    process.stdout.write("\n");
}

const n = 5;
printPattern(n);
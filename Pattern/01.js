const prompt = require("prompt-sync")();

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}

let testCases = prompt("Enter the testcases: ");
for (let i = 0; i < testCases; i++) {
  const rows = prompt("Enter your rows: ");
  printPattern(rows);
}

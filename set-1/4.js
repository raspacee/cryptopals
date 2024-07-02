const fs = require("fs");

const { calculateScore } = require("./3.js");

let data = fs.readFileSync("4.txt", "utf-8");
data = data.split("\n");

let solution = {
  score: -Infinity,
  message: "",
};

for (let line of data) {
  const lineBytes = Buffer.from(line, "hex");

  for (let i = 0; i < 256; i++) {
    let c = String.fromCharCode(i);
    const tmpBuf = Buffer.alloc(lineBytes.length);
    const charInByte = Buffer.from(c, "utf-8")[0];

    for (let i = 0; i < lineBytes.length; i++) {
      tmpBuf[i] = charInByte ^ lineBytes[i];
    }

    const result = tmpBuf.toString("utf-8");
    const score = calculateScore(result);
    if (score > solution.score) {
      solution = {
        message: result,
        score,
      };
    }
  }
}

console.log(
  "The decrypted message is:",
  solution.message,
  "\nwith a score of",
  solution.score
);

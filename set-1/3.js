const hexString =
  "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736";

const calculateScore = (string) => {
  let score = 0;
  for (let i = 0; i < string.length; i++) {
    const c = string.charAt(i);
    if (characters.includes(c)) {
      score++;
    }
  }
  return score;
};

const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
];

const rawBytes = Buffer.from(hexString, "hex");

let solution = {
  score: -Infinity,
  message: "",
};

if (require.main === module) {
  for (let c of characters) {
    const tmpBuf = Buffer.alloc(rawBytes.length);
    const charInByte = Buffer.from(c, "utf-8")[0];

    for (let i = 0; i < tmpBuf.length; i++) {
      tmpBuf[i] = charInByte ^ rawBytes[i];
    }

    const result = tmpBuf.toString("ascii");
    const score = calculateScore(result);
    if (score > solution.score) {
      solution = {
        message: result,
        score,
      };
    }
  }

  console.log(
    "The decoded message is:",
    solution.message,
    "\nwith a score of",
    solution.score
  );
}

module.exports = { calculateScore, characters };

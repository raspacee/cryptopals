const first = "1c0111001f010100061a024b53535009181c";
const second = "686974207468652062756c6c277320657965";

const firstRawBytes = Buffer.from(first, "hex");
const secRawBytes = Buffer.from(second, "hex");

const resultBuffer = Buffer.alloc(firstRawBytes.length);

for (let i = 0; i < firstRawBytes.length; i++) {
  const firstByte = firstRawBytes[i];
  const secondByte = secRawBytes[i];

  resultBuffer[i] = firstByte ^ secondByte;
}
console.log(resultBuffer.toString("hex"));

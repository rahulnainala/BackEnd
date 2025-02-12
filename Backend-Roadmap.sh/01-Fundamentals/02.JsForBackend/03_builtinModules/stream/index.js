const fs = require("fs");

const readStream = fs.createReadStream("largeFile.txt", "utf-8");
readStream.on("data", (chunk) => {
  console.log("Recived Chunk :", chunk);
});

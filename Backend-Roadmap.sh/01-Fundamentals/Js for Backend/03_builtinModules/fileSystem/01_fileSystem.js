const fs = require("fs");

//Synchronous - blocking
const data = fs.readFileSync("file.txt", "utf-8");
console.log("sync read :", data);

//Asynchronous - Non-Blocking
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Async read :", data);
});

//Writing to a File
//Synchronous
fs.writeFileSync("output.txt", "Hello, Node.Js!");

//Asynchronous
fs.writeFile("output-async.txt", "Hello, Async Node.js!", (err) => {
  if (err) throw err;
  console.log("Files Written Successfully");
});

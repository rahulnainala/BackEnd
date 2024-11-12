const fs = require("fs");

fs.appendFileSync("notes.txt", "I am from Hyderabad");

var validator = require("validator");

let y = "https://rahulnainala.com";

let x = validator.isURL(y);

if (x === true) {
  console.log(`Hello ${x}`);
}
console.log(x);

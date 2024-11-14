const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json"); //binary is returned
//so we need to convert to string

const dataJson = dataBuffer.toString(); //data in json format
console.log(dataJson);

const data = JSON.parse(dataJson); // make it as a js object
console.log(data);
console.log(data.title);

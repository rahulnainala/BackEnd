const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");

let dataJSON = dataBuffer.toString();

let dataJs = JSON.parse(dataJSON);

dataJs.name = "Formless";
dataJs.age = "24";

let finalData = JSON.stringify(dataJs);

fs.writeFileSync("1-json.json", finalData);

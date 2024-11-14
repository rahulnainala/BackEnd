const fs = require("fs");

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

//convert the above to json

// since fs core module only knows how to work with strings

// Methods below

// 1st method uses JSON stringify to make JS to Json Obj
const bookJson = JSON.stringify(book);
console.log(bookJson);
console.log(bookJson.author); //wont work for json
fs.writeFileSync("1-json.json", bookJson);
//takes in json and makes it into a JS object
const parseJson = JSON.parse(bookJson);
console.log(parseJson);
console.log(parseJson.author); //will work since its a js obj

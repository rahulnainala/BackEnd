const querystring = require("querystring");

const query = "name=John&age=25";
const parsedQuery = querystring.parse(query);

console.log(parsedQuery);

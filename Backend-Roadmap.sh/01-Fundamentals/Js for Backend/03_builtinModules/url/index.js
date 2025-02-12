const url = require("url");

const myURL = new url.URL("https://example.com:8000/path?id=123&status=active");

console.log("Host:", myURL.host);
console.log("Pathname:", myURL.pathname);
console.log("Query Parameters:", myURL.searchParams.get("status"));

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello from Node.Js Server !");
});

server.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});

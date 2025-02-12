const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.listen(3000, () => {
  console.log("Server Started on port 3000");
});

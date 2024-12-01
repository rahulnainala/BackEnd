let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.send("Hello from api_v1 routing route");
});

app.get("/users", (req, res) => {
  res.send("List of apiv1 users");
});

module.exports = app;

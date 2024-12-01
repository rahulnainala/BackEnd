const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("Hello world invoked");
});

app.get("/hello", (req, res) => {
  //make an external api call here
  setTimeout(() => {
    console.log("API Call Triggered");
    res.send("API Response from the backend here");
    console.log("API response here");
  }, 3000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/api/v1", require("./controllers/api_v1"));
app.use("/api/crudoperations", require("./controllers/crudOperations"));

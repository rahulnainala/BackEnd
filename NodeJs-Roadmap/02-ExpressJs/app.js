const Joi = require("joi");
const express = require("express");
const handleErrors = require("./controllers/errorHandling");

const app = express();

const port = 3000;

app.use(handleErrors);

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

app.get("/validate", (req, res) => {
  const schema = Joi.object({
    term: Joi.string().min(3).required(),
    page: Joi.number().integer().min(1).required(),
  });

  const { error, value } = schema.validate(req.query);
  if (error) return res.status(400).send(error.details[0].message);

  res.send(value);
});

app.get("/error", (req, res) => {
  throw new Error("Home route error");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/api/v1", require("./controllers/api_v1"));
app.use("/api/crudoperations", require("./controllers/crudOperations"));

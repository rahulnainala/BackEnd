const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

// GET request with query and route params
app.get("/users", (req, res) => {
  const { id } = req.query;
  const { page } = req.query;
  res.send(`User ID: ${id}, Page: ${page}`);
});

// POST request with body
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.send(`User Created: ${name}, Email: ${email}`);
});

// DELETE request
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User with ID ${id} deleted`);
});

// PATCH request
app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  res.send(`User with ID ${id} updated. New Email: ${email}`);
});

module.exports = app;

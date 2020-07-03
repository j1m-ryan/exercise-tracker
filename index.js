const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const { Person } = require("./person");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/exercise");

const person = new Person({ name: "john" });
person.save();

app.get("/", (req, res) => {
  const fileLocation = path.join(__dirname, "./public/index.html");
  res.sendFile(fileLocation);
});

//TODO make ID hash
//TODO search mongo for username
// if found send back exists json
// else make a hash
// && send back a json object with username and hashID
app.post("/api/exercise/new-user", (req, res) => {
  const userName = req.body.username;
  const userJson = { user: userName, id: 08309832 };
  res.json(userJson);
});

app.listen(3000, () => {
  console.log("server runnning on port 3000");
});

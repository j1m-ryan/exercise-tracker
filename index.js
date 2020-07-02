const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const fileLocation = path.join(__dirname, "./public/index.html");
  res.sendFile(fileLocation);
});

app.get("/api/exercise/:commands", (req, res) => {
  const obj = { name: "jim" };
  res.json(obj);
});

app.listen(3000, () => {
  console.log("server runnning on port 3000");
});

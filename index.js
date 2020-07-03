const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const { Person } = require("./person");
const { Exercise } = require("./exercise");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/persons", {
  useNewUrlParser: true,
});

app.get("/", (req, res) => {
  const fileLocation = path.join(__dirname, "./public/index.html");
  res.sendFile(fileLocation);
});

app.post("/api/exercise/new-user", async (req, res) => {
  const userName = req.body.username;

  try {
    const exisitngPerson = await Person.findOne({ name: userName });

    if (exisitngPerson) {
      return res.json({ info: "person already added" });
    } else {
      const newPerson = new Person({ name: userName });
      newPerson.save();
      const personObj = { name: userName, id: newPerson._id };
      return res.json(personObj);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

app.post("/api/exercise/add", async (req, res) => {
  const userId = req.body.userId;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;

  try {
    const exisitngPerson = await Person.findById(userId);
    if (exisitngPerson) {
      const newExercise = new Exercise({
        description: description,
        duration: duration,
      });
      await Person.update(exisitngPerson, {
        $push: { exercises: newExercise },
      });
      return res.json({ success: "user found and updated" });
    } else {
      res.json({ error: "user not found" });
    }
  } catch (err) {
    console.error(err);
    res.json({ error: "server error" });
  }
});

app.get("/api/exercise/:log", (req, res) => {
  res.send(req.params.log);
});

app.listen(3000, () => {
  console.log("server runnning on port 3000");
});

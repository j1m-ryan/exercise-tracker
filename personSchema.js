const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  exercised: { type: Boolean, default: false },
});

module.exports.personSchema = personSchema;

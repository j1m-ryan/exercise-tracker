const mongoose = require("mongoose");
const { exerciseSchema } = require("./exerciseSchema");

const personSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  exerciseList: [exerciseSchema],
});
module.exports.personSchema = personSchema;

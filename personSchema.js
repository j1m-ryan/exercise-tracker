const mongoose = require("mongoose");
const { exerciseSchema } = require("./exerciseSchema");

const personSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
});
personSchema.add([exerciseSchema]);
module.exports.personSchema = personSchema;

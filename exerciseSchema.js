const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  description: String,
  duration: Number,
  date: Number,
});

module.exports.exerciseSchema = exerciseSchema;

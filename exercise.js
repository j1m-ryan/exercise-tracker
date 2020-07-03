const { exerciseSchema } = require("./exerciseSchema");
const mongoose = require("mongoose");

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports.Exercise = Exercise;

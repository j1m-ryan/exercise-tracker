const mongoose = require("mongoose");

const { personSchema } = require("./personSchema");
const Person = mongoose.model("Person", personSchema);
module.exports.Person = Person;

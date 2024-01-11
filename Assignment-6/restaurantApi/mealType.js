const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/Assignment-6");

const mealTypeSchema = new mongoose.Schema({});

module.exports = mongoose.model("mealTypes", mealTypeSchema);
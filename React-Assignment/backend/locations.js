const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Assignment-7");

const locationSchema = new mongoose.Schema({});

module.exports = mongoose.model("locations", locationSchema)
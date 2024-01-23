const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Assignment-7");

const mealtypeSchema = new mongoose.Schema({});

module.exports = mongoose.model("mealtypes", mealtypeSchema);


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Assignment-5");


const restaurantSchema = new mongoose.Schema({});

module.exports = mongoose.model("restaurant", restaurantSchema)
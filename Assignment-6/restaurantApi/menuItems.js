const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Assignment-6")

const menuItemsSchema = new mongoose.Schema({});
module.exports = mongoose.model("menuItems", menuItemsSchema)
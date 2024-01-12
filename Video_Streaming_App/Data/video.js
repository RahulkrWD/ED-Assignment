const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Video_Streaming_App")

const videoSchema = new mongoose.Schema({
    id: String,
  name: String,
  poster: String,
  rating: Number,
  summary: String,
  trailer: String,
});

module.exports = mongoose.model("video", videoSchema )
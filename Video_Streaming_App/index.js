const express = require("express");
const app = express();
const videoModel = require("./Data/video");
const fs = require("fs");
const path = require("path");

app.use(express.json());
// 1. Fetch the list of movies from the database.
app.get("/video", async function (req, res) {
  let shows = await videoModel.find();
  res.send(shows);
});

// 2. Get the details of a movie when clicked on it.
app.get("/find/:id", async function (req, res) {
  let data = await videoModel.find({ id: req.params.id });
  res.send(data);
});

// 3. Stream the movie into chunks.
app.get("/video/:id", async function (req, res) {
  const videoInfo = await videoModel.findOne({ id: req.params.id });

  if (!videoInfo || (!videoInfo.fileName && !videoInfo.trailer)) {
    return res.status(404).send("Video not found or missing fileName/trailer");
  }
  let videoPath;
  if (videoInfo.fileName) {
    // Local video file
    videoPath = path.join(__dirname, 'video', videoInfo.fileName);
  } else {
    // YouTube video (redirect to YouTube)
    return res.redirect(videoInfo.trailer);
  }

  const videoSize = fs.statSync(videoPath).size;
  const CHUNK_SIZE = 10 ** 6;
  const range = req.headers.range;

  if (range) {
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
  } else {
    const headers = {
      "Content-Length": videoSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, headers);
    fs.createReadStream(videoPath).pipe(res);
  }
});

app.listen(3200, () => {
  console.log("Server is running on port 3200");
});

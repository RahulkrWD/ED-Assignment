const express = require("express");
const app = express();
const restaurantModel = require("./restaurant");
const mealTypeModel = require("./mealType");
const locationModel = require("./location");

app.get("/", function (req, res) {
  res.send("Welcome to restaurants");
});
// list of all restaurants
app.get("/restaurant", async function (req, res) {
  let restaurant = await restaurantModel.find();
  res.send(restaurant);
});
// search restaurant by city state id
app.get("/restaurant/:city", async function (req, res) {
  let query = {};
  let city = +req.params.city;
  if (city) {
    query = { state_id: city };
  }
  let data = await restaurantModel.find(query);
  res.send(data);
});

// location of restaurants
app.get("/location", async function (req, res) {
  let location = await locationModel.find();
  res.send(location);
});

// quick searches
app.get("/meals", async function (req, res) {
  let meals = await mealTypeModel.find();
  res.send(meals);
});

app.listen(5000);

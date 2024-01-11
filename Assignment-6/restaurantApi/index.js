const express = require('express');
const app = express();
const locations = require("./locations");
const mealTypes = require("./mealType");
const restaurantList = require('./restaurantList');
const menuItems = require("./menuItems")

// Home page of Restaurant
app.get("/", function(req, res){
    res.send("Welcome to Restaurant");
})

// filter
app.get("/filter/:mealId", async function (req, res) {
    let query = {};
    let mealId = +req.params.mealId;
    let cuisinedId = +req.query.cuisinedId;
    // cost to cost
    let lcost = +req.query.lcost;
    let hcost = +req.query.hcost;
    // sort
  
    let sort = { cost: 1 }; // asc
    if (req.query.sort) {
      sort = { cost: req.query.sort };
    } else if (cuisinedId) {
      query = {
        "mealTypes.mealtype_id": mealId,
        "cuisines.cuisine_id": cuisinedId,
      };
    }
    // cost to cost
    else if (lcost && hcost) {
      query = {
        "mealTypes.mealtype_id": mealId,
        $and: [{ cost: { $gt: lcost, $lt: hcost } }],
      };
    } else if (cuisinedId && lcost && hcost) {
      query = {
        "mealTypes.mealtype_id": mealId,
        "cuisines.cuisine_id": cuisinedId,
        $and: [{ cost: { $gt: lcost, $lt: hcost } }],
      };
    }
    let filter = await restaurantList.find(query).sort(sort);
    res.send(filter);
  });
app.listen(4100);
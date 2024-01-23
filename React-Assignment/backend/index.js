const express = require("express");
const app = express();
const locationModel = require("./locations");
const restaurantModel = require("./restaurants");
const mealtypeModel = require("./mealtype");
const menuModel = require("./menu");
const cors = require("cors")

app.use(cors())
app.use(express.json())

// Home page
app.get("/", function(req, res){
    res.send("home page")
});

// find all locations
app.get("/location", async function (req, res){
    try{
        const locations = await locationModel.find();
        res.send(locations)
    }catch(err){
        console.log("server error", err)
    }
});

// find restaurants using query method by stateId and mealId
app.get("/restaurants", async function(req, res){
    let query = {};
    let stateId = +req.query.stateId;
    let mealId = +req.query.mealId;
    
    if(stateId){
        query = {state_id: stateId}
    }else if(mealId){
        query = {"mealTypes.mealtype_id": mealId }
    } 
    try{
        const restaurants = await restaurantModel.find(query);
        res.send(restaurants)
    }catch(err){
        console.log("server error", err)
    }
});

// QuickSearch / meals
app.get("/quickSearch", async function(req, res){
    try{
        const meals = await mealtypeModel.find();
        res.send(meals)
    }catch(err){
        console.log('server error', err);
    }
});

// details of restaurant id using params method
app.get("/restaurants/:id", async function(req, res){
    let query = {};
    let id = +req.params.id;
    if(id){
        query = {restaurant_id: id};
    }
    try{
        const details = await restaurantModel.find(query);
        res.send(details)
    }catch(err){
        console.log("server error", err)
    }
});

app.listen(4400)
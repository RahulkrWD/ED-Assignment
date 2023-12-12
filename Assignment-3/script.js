class restaurantManager {

    restaurantList = [
        {
            id: 1,
            restaurantName: "KFC",
            address: "Anand Vihar",
            city: "Delhi"
        },
        {
            id: 2,
            restaurantName: "Dominos",
            address: "Kasinath Mode",
            city: "Gaya"
        },
        {
            id: 3,
            restaurantName: "Pramod Laddu Bhandar",
            address: "Dinkar chawk",
            city: "Patna"
        },
        {
            id: 4,
            restaurantName: "subway",
            address: "Cantonment",
            city: "Mumbai"
        }
    ]

    printAllRestaurantNames = () =>{
    return this.restaurantList.map((data)=>{
            console.log("data", data.restaurantName)
            return data.restaurantName;
        })
    }

    filterRestaurantByCity = (cityName) => {
       return this.restaurantList.filter((data)=>{
            return data.city == cityName;
        })
    }
}

// print All restaurantList
let resObj = new restaurantManager();
console.log(resObj.restaurantList);

// print All restaurantName
console.log(resObj.printAllRestaurantNames());

// print filter restaurant by city
console.log(resObj.filterRestaurantByCity("Mumbai"));
console.log(resObj.filterRestaurantByCity("Gaya"));

var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

// Calculate the total number of orders placed for the restaurant

let cal = 0;
for(totalOrder in orderData){
    // console.log(orderData[totalOrder]);
     cal += orderData[totalOrder];
}
console.log(cal);


function getProportion(){
    let total = 0;
    for(key in orderData){
        total += orderData[key]
    }

    // calculate percent
    let output = []
    let count = 0;
    for(key in orderData){
        let percentValue = ((orderData[key]/ total)*100).toFixed(2)
        count++;
        console.log(percentValue, count)

        
        let myObj = {}
        myObj.id = count
        myObj.order = key
        myObj.order_percentage = `${percentValue}`
        myObj.restaurant = "Punjabi Tadka"
        output.push(myObj);
    }
    return output;
}
console.log(getProportion(orderData))





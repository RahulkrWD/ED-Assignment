ratingData = [  
    {restaurant: 'KFC', rating:5},
     {restaurant: 'Burger King', rating:4}, {restaurant: 'KFC', rating:3},
      {restaurant: 'Domino', rating:2}, {restaurant: 'Subway', rating:3}, {restaurant: 'Domino', rating:1}, {restaurant: 'Subway', rating:4},
      {restaurant: 'Pizza Hut', rating:5} 
    ]  
    console.log(ratingData);

    // distinct restaurant
    let distinct = [];
    for(let i = 0; i < ratingData.length; i++){
        console.log(ratingData[i])
        if(distinct.indexOf(ratingData[i].restaurant)=== -1){
            distinct.push(ratingData[i].restaurant)
        }

        }
        console.log(distinct)

        let uniqueRest = ['KFC', 'Burger King', 'Domino', 'Subway', 'Pizza Hut']

let avgRating = []
let outRating = 0
let count = 0

for (let i = 0; i < uniqueRest.length; i++) {
    for (let j = 0; j < ratingData.length; j++) {
        if (uniqueRest[i] == ratingData[j].restaurant) {
            outRating += ratingData[j].rating
            count = count + 1
        }
       
    }
    var output = outRating / count
    console.log(output)
    let myObj = {}
    myObj.restaurant = uniqueRest[i]
    myObj.avgRating = output
    avgRating.push(myObj)

}
console.log("outRating", outRating, "Count", count)
console.log(avgRating)



        
    
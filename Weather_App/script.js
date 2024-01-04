

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "06ad633563b8c1921ea0bf1bb563bcc3";

let out = document.querySelector("output")
let input = document.querySelector("input");
let searchBtn = document.querySelector("button");
let cityName = document.querySelector(".city");
let temp = document.querySelector(".tempertaure");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
async function checkWeather(city) {
let response = await fetch(`${apiUrl} ${city} &appid=${apiKey}`);
  let data = await response.json();
 // console.log(data);
 if(data.name){
  cityName.innerHTML = `Weather in ${data.name}, ${data.sys.country.charAt(0)}${data.sys.country.slice(1).toLowerCase()}`;
 }
 else{
  alert("Enter a wrong city, Please try again")

 }
 

  temp.innerHTML =`${data.main.temp} °C`;
  humidity.innerHTML = `Humidity ${data.main.humidity} %`;
  windSpeed.innerHTML = `Wind speed ${data.wind.speed} km/h`;
}
searchBtn.addEventListener("click", function () {
  if(input.value == ""){
    alert("Please enter a city.")
  }
  else{
      checkWeather(input.value);

  }
 
 input.value = ""
});

//Init Storage
const storage = new Storage();
//Get Stored Location data
const weatherLocation = storage.getLocationData();

console.log(weatherLocation.city + " " + weatherLocation.country);

//Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
//Init UI
const ui = new UI();

// weather.changeLocation("Delhi", "IN");

//Get Weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

//Change Location Event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(city, country);

  //Set Location in LS
  storage.setLocationData(city, country);

  //Get and display weather
  getWeather();

  //Close Modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((result) => ui.paint(result))
    .catch((err) => console.log(err));
}

// document.getElementById("w-change-btn").addEventListener("click", () => {
//   const cityname = document.getElementById("city").value;

//   console.log(cityname);

//   weather
//     .getWeather()
//     .then((results) => console.log(results))
//     .catch((err) => console.log(err));
// });

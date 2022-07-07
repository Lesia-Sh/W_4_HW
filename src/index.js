//Display current time
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let currentDay = days[date.getDay()];
  let currentDate = date.getDate();
  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let formattedDate = `${currentDay}, ${currentHour}:${currentMinutes}`;

  return formattedDate;
}

let currentTime = new Date();
console.log(formatDate(currentTime));

let element = document.querySelector("#current-time");
element.innerHTML = `${formatDate(currentTime)}`;

//Search for the city of interest

function citySearch(event) {
  event.preventDefault();
  let search = document.querySelector("#searchInput");
  console.log(search.value);

  let place = document.querySelector("#place");
  place.innerHTML = `${search.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);

//Change Celsius for Fahrenheit and back

function changeToF(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = temperatureFahrenheit;
}

function changeToC(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = temperaturCelsius;
}

let temperature = 17;
let temperatureFahrenheit = Math.round((temperature * 9) / 5 + 32);
let temperaturCelsius = Math.round(((temperatureFahrenheit - 32) * 5) / 9);

let imperial = document.querySelector("#imperial");
imperial.addEventListener("click", changeToF);

let metric = document.querySelector("#metric");
metric.addEventListener("click", changeToC);

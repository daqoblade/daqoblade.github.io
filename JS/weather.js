const API_KEY = "54e63cb84894207096dff20f58a1a885"

function onGeoGood(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    fetch(url).then(response => response.json()).then(data => {
        weatherContainer.innerText = data.weather[0].main
        cityContainer.innerText = `at ${data.name}!`;
    });
    weather.classList.toggle("hidden")
}

function onGeoBad() {
    alert("Couldn't find your location.")
}

const weather = document.querySelector("#weather")
const weatherContainer = document.querySelector("#weather span:first-child")
const cityContainer = document.querySelector("#weather span:last-child")
navigator.geolocation.getCurrentPosition(onGeoGood, onGeoBad)
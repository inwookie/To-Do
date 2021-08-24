const API_KEY = "30f126da3db004b030095f4585eed3ab";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:last-child");
      const city = document.querySelector(".weather span:first-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}  ${data.main.temp}℃`;
    });
}
function onGeoError() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

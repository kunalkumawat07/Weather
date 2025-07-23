const apikey = "e08e395d84b1b98cb5d8721655f58a3e";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".wadhar_img");
async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".erro").style.display = "block";
    document.querySelector(".wadhar").style.display = "none";
  } else {
    var data = await response.json();
    //console.log(data);

    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weathericon.src = "images/snow.png";
    }

    document.querySelector(".wadhar").style.display = "block";
    document.querySelector(".erro").style.display = "none";
  }
}
searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});

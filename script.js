

const apiKey = "6d97395bc522951147d847c7acd42606";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon"); 

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    document.querySelector(".city").innerHTML = "Weather in " + data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = "Humidiy: " + data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind speed: " + data.wind.speed + "km/h";
    document.querySelector(".temp").style.fontSize = "50px";

    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city + "')";


    if (data.weather[0].main === "Clouds") { 
    weatherIcon.src = "./clouds.png";
    }
    else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./clear.png";
    }
    else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./rain.png";
    }
    else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./drizzle.png";
    }
    else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "./mist.png";
    }
    else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "./snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".footer").style.display = "block";

    
}

searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
})

document.querySelector(".bar").addEventListener("keyup", function (event) {    
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
})


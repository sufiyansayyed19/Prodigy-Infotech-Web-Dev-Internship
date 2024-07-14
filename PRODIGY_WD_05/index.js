
const apiKey = "641d3e40dbbe3952e21dffbb6a79161b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityName = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".smile").style.display = "none";
        document.querySelector(".weather").style.display = "none";
    }
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML= data.name  ;
    document.querySelector(".temp").innerHTML= Math.floor(data.main.temp) + "<span>°C</span>";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%" ;
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";
    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "/weather images/clouds.png";
        break;
        case "Clear":
            weatherIcon.src = "/weather images/clear.png";
        break;
        case "Rain":
            weatherIcon.src = "/weather images/rain.png ";
        break;
        case "Drizzle":
            weatherIcon.src = "/weather images/drizzle.png";
        break;
        case "Mist":
            weatherIcon.src = "/weather images/mist.png";
        break;
        default:
            break;
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".smile").style.display = "none";
    document.querySelector(".error").style.display = "none";
}

button.addEventListener("click", ()=> {
    console.log(cityName.value);
    checkWeather(cityName.value);
});
cityName.addEventListener("keydown", ()=>{
    if (event.key === 'Enter'){
        console.log(cityName.value);
        checkWeather(cityName.value);
    }
}); 
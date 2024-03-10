const humidity = document.querySelector('.col__humidity');
const city = document.querySelector('.weather__cityName');
const temp = document.querySelector('.weather__temp');
const windSpeed = document.querySelector('.col__wind');
const cityInput = document.querySelector('.input__search');
const btn = document.querySelector('.input__btn');
const weatherImage = document.querySelector('.weather__img');

// const cityName = '';

document.addEventListener('keydown',function(e) {
    // console.log(e);
    if(e.key==="Enter") {
        const cityName = cityInput.value;
        if(cityName==='') {
            alert("Please Enter Valid City Name");
        }else {
            checkWeather(cityName);
        }
    }
});

btn.addEventListener('click',function() {
    const cityName = cityInput.value;
    if(cityName==='') {
        alert("Please Enter Valid City Name");
    }else {
        checkWeather(cityName);
    }
});


// API Keys
const apiKey = '27b9c825da7060ecf3dcbe594adc83a4';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


async function checkWeather(cityName) {
    const response = await fetch(apiURL + cityName + `&appid=${apiKey}`);
    var data = await response.json();
    // console.log(data.name);
    city.innerHTML = cityName;
    temp.innerHTML = `${data.main.temp} °C`;
    humidity.innerHTML = `${data.main.humidity} %`;
    windSpeed.innerHTML = `${data.wind.speed} km/hr`;
    console.log(data.weather[0].main);
    if(data.weather[0].main=="Rain") {
        weatherImage.src = 'images/rain.png';
    }else if(data.weather[0].main=="Clouds") {
        weatherImage.src = 'images/clouds.png';
    }else if(data.weather[0].main=="Drizzle") {
        weatherImage.src = 'images/drizzle.png';
    }else if(data.weather[0].main=="Humidity") {
        weatherImage.src = 'images/humidity.png';
    }else if(data.weather[0].main=="Mist") {
        weatherImage.src = 'images/mist.png';
    }else if(data.weather[0].main=="Rain") {
        weatherImage.src = 'images/rain.png';
    }else if(data.weather[0].main=="Snow") {
        weatherImage.src = 'images/snow.png';
    }else if(data.weather[0].main=="Wind") {
        weatherImage.src = 'images/wind.png';
    }else if(data.weather[0].main=="Clear") {
        weatherImage.src = 'images/clear.png';
    }
}


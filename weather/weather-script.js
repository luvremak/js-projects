document.getElementById('search').addEventListener('click', getWeather);

function getWeather() {
    const cityInput = document.getElementById('city').value.trim().toLowerCase();
    let city = cityInput.value
    if (!city) {
        alert('Please enter a city');
        return;
    }

    const apiKey = "57b5bcdf7f5c114da23858e22959e418";
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&appid=${apiKey}`;
    
    /* async function getWeatherInfo() {
        const currentWeatherInfo = await fetch(currentWeatherUrl + `&appid=${apiKey}`);
        let data = await weatherInfo.json();
        console.log(info);
    } */

    fetch(currentWeatherUrl)
    .then(response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error fetching currect weather information.', error);
        alert('Error fetching current weather information. Please try again.');
    });

    fetch(forecastUrl)
    .then(response.json())
    .then(data => {
        displayForecast(data);
    })
    .catch(error => {
        console.error('Error fetching forecast information.', error);
        alert('Error fetching forecast information. Please try again.');
    });
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weatherInfo');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
}

function displayForecast(data) {
    const forecastDiv = document.getElementById('forecastInfo');
    data.list.forEach((forecast, index) => {
        if (index % 8 === 0) { 
            const date = new Date(forecast.dt_txt);
            const temperature = Math.round(forecast.main.temp - 273.15);
            const description = forecast.weather[0].description;
        }
    }
)}



getWeather()




document.getElementById('search').addEventListener('click', getWeather);
document.getElementById('city').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});

function getWeather() {
    const cityInput = document.getElementById('city').value.trim().toLowerCase();
    let city = cityInput;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const apiKey = "57b5bcdf7f5c114da23858e22959e418";
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    //const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json()) 
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather information.', error);
            alert('Error fetching current weather information. Please try again.');
        });

    /*fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayForecast(data);
        })
        .catch(error => {
            console.error('Error fetching forecast information.', error);
            alert('Error fetching forecast information. Please try again.');
        });*/
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather-info');
    const temperature = Math.round(data.main.temp); 
    const description = data.weather[0].description;

    weatherDiv.innerHTML = `
        <h2>Weather for ${data.name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Conditions: ${description}</p>
    `;
}

/*function displayForecast(data) {
    const forecastDiv = document.getElementById('forecast-info');
    forecastDiv.innerHTML = ''; 

    data.list.forEach((forecast, index) => {
        if (index % 8 === 0) { 
            const date = new Date(forecast.dt_txt);
            const temperature = forecast.main.temp;
            const description = forecast.weather[0].description;

            forecastDiv.innerHTML += `
                <p><strong>${date.toLocaleDateString()}</strong>: ${temperature}°C, ${description}</p>
            `;
        }
    });
}*/




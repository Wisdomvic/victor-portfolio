document.addEventListener('DOMContentLoaded', () => {
    const getweather = document.querySelector('#getweather');
    const searchinput = document.querySelector('#searchinput');
    const searchBtn = document.querySelector('#all');
    const countryinform = document.querySelector('#countryinform');

    const API_KEY = 'YOUR_API_KEY_HERE';

    // Main function to fetch weather
    async function fetchWeather(city) {
        if (!city) {
            countryinform.innerHTML = 'Please enter a city or country name.';
            return;
        }

        countryinform.innerHTML = 'Loading weather...';

        try {
            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
            );

            if (!response.ok) {
                throw new Error('City not found');
            }

            const data = await response.json();

            const location = data.location;
            const current = data.current;

            countryinform.innerHTML = `
                <h2>${location.name}, ${location.country}</h2>

                <img src="${current.condition.icon}" alt="weather icon">

                <p><strong>Temperature:</strong> ${current.temp_c} °C</p>
                <p><strong>Condition:</strong> ${current.condition.text}</p>
                <p><strong>Humidity:</strong> ${current.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${current.wind_kph} km/h</p>
            `;
        } catch (error) {
            countryinform.innerHTML = 'Unable to fetch weather. Please try again.';
            console.error(error);
        }
    }

    // Button: Get Weather
    getweather.addEventListener('click', () => {
        const city = searchinput.value.trim();
        fetchWeather(city);
    });

    // Button: Search
    searchBtn.addEventListener('click', () => {
        const city = searchinput.value.trim();
        fetchWeather(city);
    });

    // Press Enter to search
    searchinput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            fetchWeather(searchinput.value.trim());
        }
    });
});

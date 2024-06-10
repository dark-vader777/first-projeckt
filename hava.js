document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '5d2e140fc1c8ea234b0ee2d991a79650';
    const searchButton = document.querySelector('#btn');
    const cityInput = document.querySelector('#city');
    const degreeSelect = document.querySelector('#degree');
    const cityDisplay = document.querySelector('.city');
    const tempDisplay = document.querySelector('.temp');
    const typeDisplay = document.querySelector('.type');
    function handleSearch(city, unit) {
        const trimmedCity = city.trim();
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
        if (!trimmedCity) {
            alert('Please enter a valid city name.');
            return;
        }
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log('Weather data:', data);
                cityDisplay.textContent = data.name;
                const tempUnit = unit === 'metric' ? '°C' : '°F';
                tempDisplay.textContent = `${Math.floor(data.main.temp)} ${tempUnit}`;
                typeDisplay.textContent = data.weather[0].main;
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while fetching weather data. Please try again later.');
            });
    }
    searchButton.addEventListener('click', function (event) {
        event.preventDefault();
        const city = cityInput.value;
        const unit = degreeSelect.value === 'Celsius' ? 'metric' : 'imperial';
        handleSearch(city, unit);
    });
});
const weather = new Weather;
const ui = new UIWeather;

const country_code = document.getElementById('w-country') ;

document.addEventListener('DOMContentLoaded', () => {
    weather.weatherData('Cuttack')
        .then((weather) => ui.showWeatherData(weather));

    ui.showImage('IN');
})

const cityName = document.getElementById('w-city-input');
const addBtn = document.getElementById('w-submit');
addBtn.addEventListener('click', () => {
    const city = cityName.value;
    if (city != '') {
        weather.weatherData(city)
            .then((weather) => ui.showWeatherData(weather))
            .catch(() => ui.showAlert('Enter Valid City Name', 'error'));
            setTimeout(() => {ui.showImage(country_code.textContent);},400 );

            setTimeout(() => {cityName.value = ''},5000);
         ;
    } else {
        ui.showAlert('Invalid City', 'error container');
        setTimeout(() => {cityName.value = ''},3000);
    }

    
});
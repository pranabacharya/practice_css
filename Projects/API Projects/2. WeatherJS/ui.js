class UIWeather {
    constructor() {
        this.city_name = document.getElementById('w-city-name');
        this.country_name = document.getElementById('w-country');
        this.temp = document.getElementById('w-temp');
        this.feels_like = document.getElementById('w-feels-like');
        this.w_condition = document.getElementById('w-main')
        this.w_desc = document.getElementById('w-description');
        this.w_humidity = document.getElementById('w-humidity');
    }

    showWeatherData(weather) {
        const temp = Math.round((weather.main.temp) - 273.15);
        const feelLike = Math.round((weather.main.feels_like) - 273.15);

        this.city_name.textContent = `${weather.name}`;
        this.country_name.textContent = `${weather.sys.country}`;
        this.temp.innerHTML = `<b>Temp :</b> ${temp} <sup>&#176</sup>C`;
        this.feels_like.innerHTML = `<b>Feels Like :</b> ${feelLike} <sup>&#176</sup>C`;
        this.w_desc.textContent = `${weather.weather[0].description}`;
        this.w_humidity.innerHTML = `<b>Humidity : </b>${weather.main.humidity}%`;
    }
    showImage(code){
        this.removeImage();
        const img = document.createElement('img');
        img.setAttribute('src',`https://www.countryflags.io/${code}/shiny/32.png`);
        // img.className = 'img-fluid' ;
        const primary = document.querySelector('.extet');
        const secondary = document.querySelector('#w-temp');
        primary.insertBefore(img, secondary);
    }
    removeImage(){
        const currentImg = document.querySelector('img');
        if(currentImg){
            currentImg.remove();
        }
    }
    showAlert(message, className) {
        this.removeAlert();
        const div = document.createElement('div');
        div.className = className;
        div.append(message);

        const primary = document.querySelector('.mx-auto');
        const secondary = document.querySelector('.second');

        primary.insertBefore(div, secondary);

        setTimeout(() => {
            this.removeAlert();
        }, 1500);
    }
    removeAlert() {
        const currentAlert = document.querySelector('.error');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearTextField(value) {
        value = 0;
    }

}
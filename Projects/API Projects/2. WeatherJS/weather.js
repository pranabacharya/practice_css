class Weather {
    constructor() {
        this.app_id = '01f1210f0422313593e42cecd88581fc';
    }
    async weatherData(city) {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.app_id}`);
        const weather = await weatherResponse.json();

        return weather
    }

}
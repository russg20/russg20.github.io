const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=903315a084f4c575140e618810300ad3';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=903315a084f4c575140e618810300ad3';

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsweatherObject) => {
        console.log(jsweatherObject);

        document.getElementById('currweath').textContent = jsweatherObject.weather[0].main;
        document.getElementById('hightemp').textContent = jsweatherObject.main.temp_max;
        document.getElementById('humidity').textContent = jsweatherObject.main.humidity;
        document.getElementById('wspeed').textContent = jsweatherObject.wind.speed;
    });

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsforecastObject) => {
        console.log(jsforecastObject);

        for(i=0; i<=jsforecastObject.list.length; i++) {
            let str = jsforecastObject.list[i].main.dt_txt;
            if (str.includes('18:00:00')) {
                const imgSource = 'https://openweathermap.org/img/w/' + jsforecastObject.list[i].weather.icon + '.png';
                const descrip = jsforecastObject.list[i].weather.description;
                let num =+ 1

                document.getElementById('wimage' + num).setAttribute('src', imgSource);
                document.getElementById('wimage' + num).setAttribute('alt', descrip);
                document.getElementById('dtemp' + num).textContent = jsforecastObject.list[i].main.temp;
            }
        }
    })
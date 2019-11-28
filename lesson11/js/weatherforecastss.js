//Soda Springs current weather summary and 5-day forecast code

const weatherURLss = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=903315a084f4c575140e618810300ad3';
const forecastURLss = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=903315a084f4c575140e618810300ad3';

fetch(weatherURLss)
    .then((response) => response.json())
    .then((jsweatherObjectss) => {
        console.log(jsweatherObjectss);

        document.getElementById('currweathss').textContent = jsweatherObjectss.weather[0].description;
        document.getElementById('hightempss').textContent = jsweatherObjectss.main.temp_max.toFixed();
        document.getElementById('humidityss').textContent = jsweatherObjectss.main.humidity;
        document.getElementById('wspeedss').textContent = jsweatherObjectss.wind.speed.toFixed();
    
        var tempss = document.getElementById("hightempss").textContent;
        console.log("temp=" + temp);
        var speedss = document.getElementById("wspeedss").textContent;
        console.log("speed=" + speed);

        if(tempss<=50 && speedss>s3) {
            var windChillss = Math.round(35.74 + 0.6215*temp - 35.75*Math.pow(speed, 0.16) + 0.4275*temp*Math.pow(speed, 0.16));
            document.getElementById("windchillss").innerHTML = windChillss.toFixed() + " &#8457;";
        } else {
            document.getElementById("windchillss").textContent = "N/A";
        }
    
    });

fetch(forecastURLss)
    .then((response) => response.json())
    .then((jsforecastObjectss) => {
        console.log(jsforecastObjectss);

        let numss = 0;
        
        for(j=0; j<jsforecastObjectss.list.length; j++) {
            let strss = jsforecastObjectss.list[i].dt_txt;

            if (strss.includes('18:00:00')) {
                let dayss = new Date(str);
                let dayOptss = {weekday: 'short'};
                let weekdayss = dayss.toLocaleDateString('en-US', dayOptss);
                let dayOfWeekss = 'fcdayss' + numss;
                document.getElementById(dayOfWeekss).textContent = weekdayss;

                const imgSourcess = 'https://openweathermap.org/img/w/' + jsforecastObjectss.list[i].weather[0].icon + '.png';
                const descripss = jsforecastObjectss.list[i].weather[0].description;
            
                let iconss = 'wimagess' + numss;
                document.getElementById(iconss).setAttribute('src', imgSourcess);
                document.getElementById(iconss).setAttribute('alt', descripss);

                let dailyTempss = 'dtempss' + numss;
                document.getElementById(dailyTempss).textContent = Math.round(jsforecastObjectss.list[i].main.temp);
            
                numss = numss + 1;
            }
        }
    })
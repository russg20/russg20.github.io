//Soda Springs current weather summary and 5-day forecast code

const weatherURLss = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=903315a084f4c575140e618810300ad3';
const forecastURLss = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=903315a084f4c575140e618810300ad3';

fetch(weatherURLss)
    .then((response) => response.json())
    .then((jsweatherObjectss) => {
        //console.log(jsweatherObjectss);

        document.getElementById('currweathss').textContent = jsweatherObjectss.weather[0].description;
        document.getElementById('hightempss').textContent = jsweatherObjectss.main.temp_max.toFixed();
        document.getElementById('humidityss').textContent = jsweatherObjectss.main.humidity;
        document.getElementById('wspeedss').textContent = jsweatherObjectss.wind.speed.toFixed();
    
        var tempss = document.getElementById("hightempss").textContent;
        //console.log("temp=" + tempss);
        var speedss = document.getElementById("wspeedss").textContent;
        //console.log("speed=" + speedss);

        if(tempss<=50 && speedss>3) {
            var windChillss = Math.round(35.74 + 0.6215*tempss - 35.75*Math.pow(speedss, 0.16) + 0.4275*tempss*Math.pow(speedss, 0.16));
            document.getElementById("windchillss").innerHTML = windChillss.toFixed() + " &#8457;";
        } else {
            document.getElementById("windchillss").textContent = "N/A";
        }
    
    });

fetch(forecastURLss)
    .then((response) => response.json())
    .then((jsforecastObjectss) => {
        //console.log(jsforecastObjectss);

        let numss = 0;
        
        for(j=0; j<jsforecastObjectss.list.length; j++) {
            let strss = jsforecastObjectss.list[j].dt_txt;

            if (strss.includes('18:00:00')) {
                let dayss = new Date(strss);
                let dayOptss = {weekday: 'short'};
                let weekdayss = dayss.toLocaleDateString('en-US', dayOptss);
                let dayOfWeekss = 'fcdayss' + numss;
                document.getElementById(dayOfWeekss).textContent = weekdayss;

                const imgSourcess = 'https://openweathermap.org/img/w/' + jsforecastObjectss.list[j].weather[0].icon + '.png';
                const descripss = jsforecastObjectss.list[j].weather[0].description;
            
                let iconss = 'wimagess' + numss;
                document.getElementById(iconss).setAttribute('src', imgSourcess);
                document.getElementById(iconss).setAttribute('alt', descripss);

                let dailyTempss = 'dtempss' + numss;
                document.getElementById(dailyTempss).textContent = Math.round(jsforecastObjectss.list[j].main.temp);
            
                numss = numss + 1;
            }
        }
    })


// Soda Springs upcoming events collection

const getURLss = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(getURLss)
    .then((response) => response.json())
    .then((jsonObjectss) => {
        const towns = jsonObjectss['towns'];

        for(i=0; i<towns.length; i++) {

            if(towns[i].name == 'Soda Springs') {
               let listss = document.createElement('ul');
               
               for(k=0; k<towns[i].events.length; k++) {
                   let listItem = document.createElement('li');
                   listItem.textContent = towns[i].events[k];
                   listss.appendChild(listItem);
               }

               document.querySelector('events').appendChild(listss);
            }
        }
    })
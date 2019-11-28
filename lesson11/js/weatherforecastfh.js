//Fish Haven current weather summary and 5-day forecast code

const weatherURLfh = 'https://api.openweathermap.org/data/2.5/weather?lat=42.0369&lon=-111.3964&units=imperial&APPID=903315a084f4c575140e618810300ad3';
const forecastURLfh = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.0369&lon=-111.3964&units=imperial&APPID=903315a084f4c575140e618810300ad3';

fetch(weatherURLfh)
    .then((response) => response.json())
    .then((jsweatherObjectfh) => {
        console.log(jsweatherObjectfh);

        document.getElementById('currweathfh').textContent = jsweatherObjectfh.weather[0].description;
        document.getElementById('hightempfh').textContent = jsweatherObjectfh.main.temp_max.toFixed();
        document.getElementById('humidityfh').textContent = jsweatherObjectfh.main.humidity;
        document.getElementById('wspeedfh').textContent = jsweatherObjectfh.wind.speed.toFixed();
    
        var tempfh = document.getElementById("hightempfh").textContent;
        //console.log("temp=" + tempss);
        var speedfh = document.getElementById("wspeedfh").textContent;
        //console.log("speed=" + speedss);

        if(tempfh<=50 && speedfh>3) {
            var windChillfh = Math.round(35.74 + 0.6215*tempfh - 35.75*Math.pow(speedfh, 0.16) + 0.4275*tempfh*Math.pow(speedfh, 0.16));
            document.getElementById("windchillfh").innerHTML = windChillfh.toFixed() + " &#8457;";
        } else {
            document.getElementById("windchillfh").textContent = "N/A";
        }
    
    });

fetch(forecastURLfh)
    .then((response) => response.json())
    .then((jsforecastObjectfh) => {
        //console.log(jsforecastObjectss);

        let numfh = 0;
        
        for(j=0; j<jsforecastObjectfh.list.length; j++) {
            let strfh = jsforecastObjectfh.list[j].dt_txt;

            if (strfh.includes('18:00:00')) {
                let dayfh = new Date(strfh);
                let dayOptfh = {weekday: 'short'};
                let weekdayfh = dayfh.toLocaleDateString('en-US', dayOptfh);
                let dayOfWeekfh = 'fcdayfh' + numfh;
                document.getElementById(dayOfWeekfh).textContent = weekdayfh;

                const imgSourcefh = 'https://openweathermap.org/img/w/' + jsforecastObjectfh.list[j].weather[0].icon + '.png';
                const descripfh = jsforecastObjectfh.list[j].weather[0].description;
            
                let iconfh = 'wimagefh' + numfh;
                document.getElementById(iconfh).setAttribute('src', imgSourcefh);
                document.getElementById(iconfh).setAttribute('alt', descripfh);

                let dailyTempfh = 'dtempfh' + numfh;
                document.getElementById(dailyTempfh).textContent = Math.round(jsforecastObjectfh.list[j].main.temp);
            
                numfh = numfh + 1;
            }
        }
    })


// Fish Haven upcoming events collection

const getURLfh = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(getURLfh)
    .then((response) => response.json())
    .then((jsonObjectfh) => {
        const towns = jsonObjectfh['towns'];
        console.log(towns);

        for(i=0; i<towns.length; i++) {

            if(towns[i].name == 'Fish Haven') {
               let listfh = document.createElement('ul');
               
               for(k=0; k<towns[i].events.length; k++) {
                   let listItemfh = document.createElement('li');
                   listItemfh.textContent = towns[i].events[k];
                   listfh.appendChild(listItemfh);
               }

               document.querySelector('div.events').appendChild(listfh);
            }
        }
    })
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i=0; i < towns.length; i++) {

                

            if (towns[i].name=='Preston' || towns[i].name=='Fish Haven' || towns[i].name=='Soda Springs') {
                let card = document.createElement('section');
                let townName = document.createElement('h2');
                let townMotto = document.createElement('h6');
                let foundYear = document.createElement('p');
                let pop = document.createElement('p');
                let rainFall = document.createElement('p');
                let towndata = document.createElement('div');
                let townPhoto = document.createElement('img');


                townName.textContent = towns[i].name;
                towndata.appendChild(townName);
            
                townMotto.textContent = towns[i].motto;
                towndata.appendChild(townMotto);

                foundYear.textContent = 'Year Founded: ' + towns[i].yearFounded;
                towndata.appendChild(foundYear);

                pop.textContent = 'Population: ' + towns[i].currentPopulation;
                towndata.appendChild(pop);

                rainFall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                towndata.appendChild(rainFall);

                card.appendChild(towndata);

                townPhoto.setAttribute('src', 'images/' + towns[i].photo);
                townPhoto.setAttribute('alt', 'Photo of ' + towns[i].name);
                card.appendChild(townPhoto);

                document.querySelector('div.cityinfo').appendChild(card);
                
            }
        }
    });
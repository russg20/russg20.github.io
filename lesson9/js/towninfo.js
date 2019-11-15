const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i=0; i < towns.length; i++) {

                

   //         if (towns.name=='Preston' || towns.name=='Fish Haven' || towns.name=='Soda Springs') {
                let card = document.createElement('section');
                let h1 = document.createElement('h1');
                let townMotto = document.createElement('h3');
                let foundYear = document.createElement('p');
                let pop = document.createElement('p');
                let rainFall = document.createElement('p');
                let townPhoto = document.createElement('img');


                h1.textContent = towns[i].name;
                card.appendChild(h1);
            
                townMotto.textContent = towns[i].motto;
                card.appendChild(townMotto);

                foundYear.textContent = 'Year Founded: ' + towns[i].yearFounded;
                card.appendChild(foundYear);

                pop.textContent = 'Population: ' + towns[i].currentPopulation;
                card.appendChild(pop);

                rainFall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                card.appendChild(rainFall);

                townPhoto.setAttribute('src', towns[i].photo);
                townPhoto.setAttribute('alt', 'Photo of ' + towns[i].name);
                card.appendChild(townPhoto);

                document.querySelector('div.cityinfo').appendChild(card);
    //        }
        }
    });
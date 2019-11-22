const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        for (let i=0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let dob = document.createElement('p');
            let pob = document.createElement('p');
            let portrait = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            card.appendChild(h2);
            
            dob.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            card.appendChild(dob);

            pob.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            card.appendChild(pob);

            portrait.setAttribute('src', prophets[i].imageurl);
            portrait.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
            card.appendChild(portrait);

            document.querySelector('div.cards').appendChild(card);
        }
    });
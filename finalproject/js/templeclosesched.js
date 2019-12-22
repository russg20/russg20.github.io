const requestLoc = 'js/templeclosure.json'

fetch(requestLoc)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const closesched = jsonObject['templeclosures'];
        for (let i=0; i<templeclosures.length; i++) {
            let container = document.createElement('section');
            let h4 = document.createElement('h4');
            let
        }
    })
import _ from '../node_modules/underscore/underscore-esm.js'

const lsLang = localStorage.getItem('lang');
const lsOrder = localStorage.getItem('order');

console.log(lsLang, lsOrder);
if(lsLang !== null && lsOrder !== null){
    fetchCountries(lsLang)
        .then(countries =>{
            const sortedCountries = sortCountries(countries, lsOrder);
            console.log(sortedCountries);
        })
}


document.querySelector('button').addEventListener('click', async event =>{
    event.preventDefault();

    const language = document.querySelector('input').value;
    const order = document.querySelector('select').value;

    localStorage.setItem('lang', language);
    localStorage.setItem('order', order);

    const countries = await fetchCountries(language);
    const sortedCountries = sortCountries(countries, order);
    console.log(sortedCountries);
})

function sortCountries(countryArray, order){
    const sorted = _.sortBy(countryArray, 'population');
    if(order === 'fallande') sorted.reverse();
    return sorted;
}

async function fetchCountries(lang){
    const url = `https://restcountries.com/v3.1/lang/${lang}`;

    const response = await fetch(url);
    const countries = await response.json();

    return countries;
}
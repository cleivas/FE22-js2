
import { firstCounter, secondCounter } from "./modules/counter.js";

const firstBtns = document.querySelectorAll('#first button');

firstBtns[0].addEventListener('click', firstCounter.add);
firstBtns[1].addEventListener('click', firstCounter.remove);
console.log(firstCounter);

const secondBtns = document.querySelectorAll('#second button');

secondBtns[0].addEventListener('click', secondCounter.add);
secondBtns[1].addEventListener('click', secondCounter.remove);

formRegion.addEventListener('click', event=>{
    event.preventDefault();
    getCountriesByRegion()
        .then(countries =>{
            const sortedCountries = sortCountries(countries);
            const biggest = getBiggestCountry(sortedCountries);
            const smallest = getsmallestCountry(sortedCountries);

            display(biggest, smallest);
        })
});
const movie = {
    title: 'Die Hard',
    year: 1992,
    director: 'Nick Cage'
};

console.log(movie);

// const title = movie.title;
const {title, year} = movie;
console.log(title, year);

const arr = [1, 2, 3, 4];
const [el, el2] = arr;
console.log(el, el2);


const url = 'https://restcountries.com/v3.1/name/sweden';

fetch(url)
    .then(response => response.json())
    .then( 
        ([countryData] )=>{
            console.log(countryData);
            const {name, continents} = countryData;
            console.log(name, continents);
        }
    )



function logTitle( {title} ){
    console.log(title);
}

logTitle(movie);
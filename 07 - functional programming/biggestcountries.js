async function fetchCountries(){
    const url = 'https://restcountries.com/v3.1/region/europe';

    const response = await fetch(url);
    const countries = await response.json();

    return countries;
}   

const sortCountries = countryArray =>{
    const countriesClone = structuredClone(countryArray);
    return countriesClone.sort((a, b) => b.population - a.population );
}

const getBiggestCountries = countryArray =>{
    return [countryArray[0], countryArray[1], countryArray[2]];
}

fetchCountries()
    .then(countries =>{
        console.log(countries);

        const sortedCountries = sortCountries(countries);
        console.log(sortedCountries);

        const biggestCountries = getBiggestCountries(sortedCountries);
        console.log(biggestCountries);
    });
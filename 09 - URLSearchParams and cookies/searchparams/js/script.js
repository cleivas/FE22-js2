console.log(location.search)

const searchParams = new URLSearchParams(location.search);
const nameValue = searchParams.get('name');

//Lägg till en select i formet och logga värdet av det här

console.log(searchParams)
console.log(nameValue);

const fruitValue = searchParams.get('fruit');
console.log(fruitValue);

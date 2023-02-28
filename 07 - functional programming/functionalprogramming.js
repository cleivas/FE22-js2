//Samma argument leder alltid till samma resultat
//Pure
const square = num => num*num;
console.log( square(8) );
console.log( square(8) );
console.log( square(8) );

//Impure
const randomInt = num => Math.round(Math.random()*num);
console.log( randomInt(8) );
console.log( randomInt(8) );
console.log( randomInt(8) );

//Funktioner är inte beroende av variabler utanför dess scope
console.log('----IN STOCK----')

const stock = ['pen', 'pencil', 'notepad', 'highlighter'];

//Impure function eftersom den är beroende av variabeln stock
const inStock = item => stock.indexOf(item) !== -1;
console.log( inStock('pen'));
console.log( inStock('apple'));

//pure variationer av funktionen
const pureInStock1 = (item, array) => array.indexOf(item) !== -1;
console.log( pureInStock1('pen', stock));
console.log( pureInStock1('apple', stock));

const pureInStock2 = item =>{
    const stock = ['pen', 'pencil', 'notepad', 'highlighter'];
    return stock.indexOf(item) !== -1;
}
console.log( pureInStock2('pen', stock));
console.log( pureInStock2('apple', stock));

console.log('----FRUITS----')
//Inga sidoeffekter
let fruits = ['banana', 'orange', 'apple', 'banana', 'pear', 'banana'];

//pure
const countBanana = arr => arr.filter( fruit => fruit === 'banana').length;

console.log(countBanana(fruits));

//impure
const impureCountBanana = ()=>{
    fruits = fruits.filter(fruit => fruit === 'banana');
    return fruits.length;
}

console.log(impureCountBanana());
console.log(fruits);

// console.log( fruits.filter( fruit => fruit.length > 4) );
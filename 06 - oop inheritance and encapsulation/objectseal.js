const obj = {
    egenskap: 100
}
Object.seal(obj);

// obj.nyEgenskap = 500;
obj.egenskap = 0;

console.log(obj);
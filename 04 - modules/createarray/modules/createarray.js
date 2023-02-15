
function createArray(number){

    const array = [];

    for(let i=0; i<number; i++){
        const random = Math.round(Math.random()*1000);

        array.push(random);
    }
    console.log('in createArray function', array);
    return array;
}

export {createArray};
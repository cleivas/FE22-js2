const animalObj = {
    animal: 'lion',
    name: 'simba',
    continent: 'africa',
    sound: 'RAAWR',
    mer: 'annumer'
  };


function swapKeyValue(obj){
    const newObj = {};
    // newObj['lion'] = 'animal';
    const keyArray = Object.keys(obj);
    const values = Object.values(obj);

    // console.log(keyArray);
    keyArray.forEach(key =>{
        const value = obj[key];
        newObj[ value ] = key;
        // console.log(obj[key]);
    })

    return newObj;
}

console.log( swapKeyValue(animalObj) );
  

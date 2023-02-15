
function displayArray(array){
    const ul = document.createElement('ul');
    document.body.append(ul);

    for(let i=0; i<array.length; i++){
        const li = document.createElement('li');
        ul.append(li);
        li.innerText = array[i];
    }

    // array.forEach(num => {
    //     const li = document.createElement('li');
    //     ul.append(li);
    //     li.innerText = num;
    // })

    // for(num of array){
    //     const li = document.createElement('li');
    //     ul.append(li);
    //     li.innerText = num; 
    // }
}

export {displayArray};
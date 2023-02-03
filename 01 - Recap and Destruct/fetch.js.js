const url = 'https://dog.ceo/api/breeds/image/random';

/*
fetch(url)
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then( data => {
        console.log(data.message);
        const img = document.createElement('img');
        document.body.append(img);
        img.src = data.message;
    })
    .catch( error => console.log(error ));
*/
    //Lägg till kod så att bilden syns i browsern

const fetchPromise = fetch(url);
console.log('fetch', fetchPromise);


const jsonPromise = fetchPromise.then( 
    response => {
        console.log(response);
        return response.json(); 
    });
    
console.log('json', jsonPromise);

jsonPromise.then(data=>console.log(data));

console.log('Sist i koden');
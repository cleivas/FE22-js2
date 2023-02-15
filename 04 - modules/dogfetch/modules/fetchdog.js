const baseUrl = 'https://dog.ceo/api/breeds/image/random/';

async function getDogImages(amount){

    const response = await fetch(baseUrl + amount);
    const {message} = await response.json();

    //Returnera en array med alla hundbildsurler
    // console.log(message);
    return message;
}

export {getDogImages};
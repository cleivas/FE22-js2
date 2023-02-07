const form = document.querySelector('form');

form.addEventListener('submit', event=>{
    event.preventDefault();

    const userSearch = {};

    const inputElements = form.childNodes;
    // console.log(inputElements);

    inputElements.forEach(el=>{
        if(el.name != undefined && el.name !== ''){
            userSearch[el.name] = el.value;
        }
    });
    // console.log(userSearch);
    getDogImages(userSearch);
});

function getDogImages({breed, amount}){
    // console.log(breed, amount);
    const url = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`;

    fetch(url)
        .then(response=>response.json())
        .then( ({message}) =>{
            console.log(message);
        });
}   
document.querySelector('button').addEventListener('click', event=>{
    event.preventDefault();

    const searchParams = new URLSearchParams();
    searchParams.set('beer_name', document.querySelector('input').value);
    console.log(searchParams.toString());

    const url = 'https://api.punkapi.com/v2/beers?'+searchParams.toString();
    console.log(url);
    // key=value
})
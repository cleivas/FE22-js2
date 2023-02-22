import { Counter } from "./modules/counter.js";

document.querySelector('button').addEventListener('click', event=>{
    event.preventDefault();

    //Numret som counter ska räkna till
    const maxCount = document.querySelector('input').value;

    //Elementet som ska visa den pågående räkningen
    const h1 = document.createElement('h1');
    h1.innerText = 0;
    document.querySelector('#container').append(h1);

    //Skickar med h1-elementet i construktorn så att det är tillgängligt i counter där det behöver uppdateras
    const counter = new Counter(maxCount, h1);
    h1.addEventListener('click', ()=>{
        counter.start();
    })
    
});
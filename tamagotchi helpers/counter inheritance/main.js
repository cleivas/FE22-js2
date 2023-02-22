import { PinkCounter } from "./modules/pinkcounter.js";

document.querySelector('button').addEventListener('click', event=>{
    event.preventDefault();

    const maxCount = document.querySelector('input').value;

    const con = document.querySelector('#container');

    //Allt GUI finns i PinkCounter,
    new PinkCounter(maxCount, con );
    
});
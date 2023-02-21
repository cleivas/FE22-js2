import { Die } from "./modules/die.js";
const cssClasses = ['one', 'two', 'three', 'four', 'five', 'six'];
const die1 = new Die();
die1.currentValue = 8;

createDie(die1);

function updateDie(currentValue, container){
    // console.log()
    //Tar bort det andra klassnamnet från listan av css-klasser tillhörande container-diven
    container.classList.remove(container.classList[1]);
    container.classList.add(cssClasses[currentValue-1]);
    container.innerHTML = '';
    for(let i=0; i<currentValue; i++){
        const div = document.createElement('div');
        container.append(div);
    }
}

function createDie(die){
    const container = document.createElement('div');
    container.classList.add('die');
    container.classList.add(cssClasses[die.currentValue-1]);

    container.addEventListener('click', ()=>{
        die.roll();
        console.log(die.currentValue);
        updateDie(die.currentValue, container);
    })

    for(let i=0; i<die.currentValue; i++){
        const div = document.createElement('div');
        container.append(div);
    }

    const freezeBtn = document.createElement('button');
    freezeBtn.innerText = 'freeze';
    freezeBtn.addEventListener('click', ()=>{
        die.freeze();
    });

    const unfreezeBtn = document.createElement('button');
    unfreezeBtn.innerText = 'unfreeze';
    unfreezeBtn.addEventListener('click', ()=>{
        die.unFreeze();
    });

    document.body.append(container, freezeBtn, unfreezeBtn);
}
//En workaround för en "eventlistener" som lyssnar efter en ändring på en variabel

//Två värden som ändras regelbundet
//Detta skulle kunna vara i en klass Tamagotchi
let count = 0;
let count2 = 0;
setInterval(()=>{
    count++;
}, 5000);

setInterval(()=>{
    count2++
}, 3000);


//Detta skulle kunna tillhöra en klass som ärver från Tamagotchi.
//Senaste värdet av count och count 2 sparas i egna variabler så att vi kan jämföra och se om det har ändrats
let preCount = 0;
let preCount2 = 0;

//Kolla ändring på variablerna count och count2 med jämna mellanrum
setInterval(()=>{
    //Skulle det här varit en klass som ärver från tamagotchi hade vi behövt göra såhär
    //count = super.getCount();
    //count2 = super.getCount2();

    if(preCount !== count){
        console.log('a change was made to count')
        preCount = count;
    }
    else if(preCount2 !== count2){
        console.log('a change was made to count2')
        preCount2 = count2;
    }
    else{
        console.log('no changes')
    }
}, 100); //Intervallet är mycket oftare än vad värdena ändras i tamagotchi
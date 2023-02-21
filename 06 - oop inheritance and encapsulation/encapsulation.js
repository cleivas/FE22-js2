class Animal{
    #type;
    #sound;
    constructor(type, sound){
        this.#type = type;
        this.#sound = sound;
    }
    getSound(){
        return this.#sound;
    }
    setSound(newSound){
        // console.log(typeof newSound)
        if(typeof newSound != 'number'){
            this.#sound = newSound;
        }
    }
}

const snake = new Animal('snake', 'tssss');
console.log(snake);
// console.log(snake.type);
// console.log(snake.#type);
// snake.getSound = 'gahhhh';
snake.setSound(7546536365); //Inget händer
console.log( snake.getSound() );

snake.setSound('gahhh'); 
console.log( snake.getSound() );
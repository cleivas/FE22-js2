class Die{
    constructor(){
        this.currentValue = 1;
        this.frozen = false;
    }
    roll(){
        if(!this.frozen){
            this.currentValue = Math.ceil( Math.random()*6 );
        }
        else{
            console.log('The die is frozen');
        }  
    }
    freeze(){
        this.frozen = true;
    }
    unFreeze(){
        this.frozen = false;
    }
}

// const d = new Die();
// console.log(d.currentValue);
// d.freeze();
// d.unFreeze();
// d.roll();
// console.log(d.currentValue);

export {Die};

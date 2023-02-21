import {Animal} from './animal.js'

export class Bird extends Animal{
    #wingspan;
    constructor(type, sound, wingspan){
        super(type, sound);
        this.#wingspan = wingspan;

        console.log(super.getType());
    }
    fly(){
        console.log('flying with a wingspan of', this.#wingspan);
    }
}
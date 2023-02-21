export class Animal{
    #type;
    #sound;
    constructor(type, sound){
        this.#type = type;
        this.#sound = sound;
    }
    makeSound(){
        console.log(this.#sound, this.#sound);
    }
    getType(){
        return this.#type;
    }
}

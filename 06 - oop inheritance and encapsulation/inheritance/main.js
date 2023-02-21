import { Animal } from "./modules/animal.js";
import { Bird } from "./modules/bird.js";

const animal = new Animal('Goat', 'BAAAAH');
animal.makeSound();
// animal.fly();
console.log(animal);

const bird = new Bird('Crow', 'Kahhh', '40cm');
bird.makeSound();
bird.fly();
console.log(bird);
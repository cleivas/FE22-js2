import { Counter } from "./counter.js";

class PinkCounter extends Counter {
    #container;

    constructor(maxCount, container) {
        super(maxCount);
        this.#container = container;
        this.createGUI();
    }

    createGUI() {
        //Elementen som är del av GUI:t skapas och appendas till elementet som angavs i konstruktor
        const element = document.createElement('h1');
        element.classList.add('pink')
        element.innerText = 0;
        this.#container.append(element);

        element.addEventListener('click', () => {
            //start från parent-klassen anropas 
            super.start(element);
        })
    }

}

export { PinkCounter };
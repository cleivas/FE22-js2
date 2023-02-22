class Counter {
  #maxCount;
  #currentCount;
  #id;
  #element;

  constructor(maxCount, element) {
    this.#maxCount = maxCount;
    this.#element = element;
    this.#currentCount = 0;
  }

  start() {
    this.#update();

    //Sparar ner id:t för intervallet så att det senare kan stoppas
    this.#id = setInterval(()=>{
        this.#update();
    }, 1000);

    // this.#id = setInterval(this.update.bind(this), 1000);
  }

  stop() {
    //stoppar intervallet
    clearInterval(this.#id);
  }

  //Update är en privat funktion och används endast internt
  #update() {
    this.#currentCount++;
    this.#element.innerText = this.#currentCount;

    if (this.#currentCount >= this.#maxCount) {
      this.stop(); 
    }
  }

}

export { Counter };

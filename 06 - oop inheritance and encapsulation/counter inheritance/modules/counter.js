class Counter {
  #maxCount;
  #currentCount;
  #id;

  constructor(maxCount) {
    this.#maxCount = maxCount;
    this.#currentCount = 0;
  }

  //Start och update behöver html-elementet som ska uppdateras
  start(element) {
    this.#update(element);

    this.#id = setInterval(()=>{
        this.#update(element);
    }, 1000);
    // this.#id = setInterval(this.update.bind(this), 1000);
  }

  stop() {
    clearInterval(this.#id);
  }

  //Update är en privat funktion och kan inte anropas externt
  #update(element) {
    this.#currentCount++;
    element.innerText = this.#currentCount;
    console.log(this.#currentCount);

    if (this.#currentCount >= this.#maxCount) {
      this.stop();
    }
  }

}

export { Counter };

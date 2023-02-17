
class Dog{
    constructor(breed){
        this.breed = breed.toLowerCase();
        this.createElements();
    }
    createElements(){
        const container = document.createElement('div');
        container.classList.add('dog-container');

        const img = document.createElement('img');
        const btn = document.createElement('button');
        btn.innerText = `Get ${this.breed} image`;
        
        btn.addEventListener('click', ()=>{
            this.getImage().then(imgUrl => img.src = imgUrl);
        })

        document.body.append(container);
        container.append(img, btn);
    }

    async getImage(){
        const url = `https://dog.ceo/api/breed/${this.breed}/images/random`;
        let r = '';

        const response = await fetch(url);
        const {message} = await response.json();
        return message;
    }
}

export {Dog};
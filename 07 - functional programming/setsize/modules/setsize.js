function setSize(size){
    const h1 = document.querySelector('h1');

    return function(){
        h1.style.fontSize = size+'px';
    }
}

const setSize14 = setSize(14);
const setSize30 = setSize(30);
const setSize48 = setSize(48);

export {setSize14, setSize30, setSize48};
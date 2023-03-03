const indexVal = sessionStorage.getItem('indexValue');

if(indexVal !== null){
    const h1 = document.querySelector('h1');
    h1.innerText = indexVal;
}


const btn = document.querySelector('button');
btn.addEventListener('click', event=>{
    event.preventDefault();

    const val = document.querySelector('input').value;
    sessionStorage.setItem('secondValue', val);

    location.assign('../index.html');
})
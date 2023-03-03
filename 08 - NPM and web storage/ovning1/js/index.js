const secondVal = sessionStorage.getItem('secondValue');

if(secondVal !== null){
    const h1 = document.querySelector('h1');
    h1.innerText = secondVal;
}

const btn = document.querySelector('button');
btn.addEventListener('click', event=>{
    event.preventDefault();
    
    const val = document.querySelector('input').value;
    sessionStorage.setItem('indexValue', val);

    location.assign('../html/second.html');
})
const lc = localStorage.getItem('name');
const form = document.querySelector('form');
const div = document.querySelector('div');

if(lc === null){
    form.classList.remove('hide');
    form.classList.add('show');

    form.addEventListener('submit', event=>{
        event.preventDefault();

        localStorage.setItem('name', document.querySelector('input').value);
        location.reload();
    })
}
else{
    div.classList.remove('hide');
    div.classList.add('show');

    document.querySelector('h1').innerText = `Welcome, ${lc}`;

    document.querySelector('#clear').addEventListener('click', ()=>{
        localStorage.clear();
        location.reload();
    })
}
const h1 = document.querySelector('h1');

if(sessionStorage.getItem('text') !== null){
    h1.innerText = `Welcome, ${sessionStorage.getItem('text')}`;
}
else{
    h1.innerText = 'Welcome, Unknown!'
}
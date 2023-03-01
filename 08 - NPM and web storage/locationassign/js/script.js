// console.log( sessionStorage.getItem('text') );

// if(sessionStorage.getItem('text') !== null){
//     document.querySelector('input').placeholder = sessionStorage.getItem('text');
// }


document.querySelector('button').addEventListener('click', event=>{
    event.preventDefault();

    const inputTexten = document.querySelector('input').value;
    document.querySelector('input').value = ''; 
    console.log(inputTexten);

    if(inputTexten !== '')
        sessionStorage.setItem('text', inputTexten);
        
    location.assign('../html/welcome.html');
})
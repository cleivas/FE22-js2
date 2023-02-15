async function getAllComments(){
    const url = 'https://comments-b6f91-default-rtdb.europe-west1.firebasedatabase.app/comments.json';

    const response = await fetch(url);
    const comments = await response.json();

    return comments;
}

function displayAllComments(comments){
    const commentContainer = document.querySelector('#commentsContainer');
    commentContainer.innerHTML = '';

    const commentArray = Object.values(comments);

    commentArray.forEach(({title, name, comment}) => {
        const h3 = document.createElement('h3');
        const pComment = document.createElement('p');
        const pName = document.createElement('p');

        h3.innerText = title;
        pComment.innerText = comment;
        pName.innerText = name;

        
        commentContainer.append(h3, pComment, pName);
    })
}

function getFormData(){
    const formData = {};
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input=>{
        formData[input.name] = input.value;
    })
    return formData;
}

async function postComment(commentObj){
    const url = 'https://comments-b6f91-default-rtdb.europe-west1.firebasedatabase.app/comments.json';

    const options = {
        method: 'POST', 
        body: JSON.stringify(commentObj),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    
    const response = await fetch(url, options);
    const id = await response.json();
    console.log(id);
}

async function putComment(commentObj){
    const url = 'https://comments-b6f91-default-rtdb.europe-west1.firebasedatabase.app/comments/catcomment/something.json';

    const options = {
        method: 'PUT', 
        body: JSON.stringify(commentObj),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    
    const response = await fetch(url, options);
    const id = await response.json();
    console.log(id);
}

async function patchName(newName){
    const url = 'https://comments-b6f91-default-rtdb.europe-west1.firebasedatabase.app/comments/-NOEZZHCftQGyqoNyzXW.json';


    const options = {
        method: 'PATCH', 
        body: JSON.stringify({name: newName}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    
    const response = await fetch(url, options);
    const id = await response.json();
    console.log(id);
}

document.querySelector('button').addEventListener('click',  event=>{
    event.preventDefault();

    const formData = getFormData();

    putComment(formData)
        .then( getAllComments )
        .then(displayAllComments);
})

getAllComments()
    .then( displayAllComments );